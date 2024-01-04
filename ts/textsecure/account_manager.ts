import { KyberPreKeyRecord } from '@signalapp/libsignal-client';
import { isNumber, omit, orderBy } from 'lodash';
import {
  UploadKeysType,
  UploadPreKeyType,
  createAccount as createAccountRequest,
  registerKeys,
} from '../api';
import { UploadSignedPreKeyType } from '../api/types';
import { SignalService as Proto } from '../protobuf';
import { ourProfileKeyService } from '../services/ourProfileKey';
import { isUntaggedPniString, toTaggedPni } from '../utils/ServiceId';
import { strictAssert, toLogFormat } from '../utils/assert';
import { getRegionCodeForNumber } from '../utils/libphonenumberUtil';
import * as log from '../utils/log';
import { normalizeAci } from '../utils/normalizeAci';
import { isOlderThan } from '../utils/timestamps';
import * as Bytes from './bytes';
import {
  deriveAccessKey,
  encryptDeviceName as encryptDeviceNameCrypto,
  generateRegistrationId,
  getRandomBytes,
} from './crypto';
import {
  CompatPreKeyType,
  CompatSignedPreKeyType,
  generateKeyPair,
  generateKyberPreKey,
  generatePreKey,
  generateSignedPreKey as generateSignedPreKeyCurve,
} from './curve';

const PRE_KEY_MAX_COUNT = 200;
const DAY = 24 * 60 * 60 * 1000;

const PRE_KEY_ARCHIVE_AGE = 90 * DAY;

const PROFILE_KEY_LENGTH = 32;
const MASTER_KEY_LENGTH = 32;
const STARTING_KEY_ID = 1;
const PRE_KEY_GEN_BATCH_SIZE = 100;
enum AccountType {
  Primary = 'Primary',
  Linked = 'Linked',
}
type StorageKeyByServiceIdKind = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [kind in ServiceIdKind]: keyof any;
};

export enum ServiceIdKind {
  ACI = 'ACI',
  PNI = 'PNI',
  Unknown = 'Unknown',
}

export const KYBER_KEY_ID_KEY: StorageKeyByServiceIdKind = {
  [ServiceIdKind.ACI]: 'maxKyberPreKeyId',
  [ServiceIdKind.Unknown]: 'maxKyberPreKeyId',
  [ServiceIdKind.PNI]: 'maxKyberPreKeyIdPNI',
};

export const SIGNED_PRE_KEY_ID_KEY: StorageKeyByServiceIdKind = {
  [ServiceIdKind.ACI]: 'signedKeyId',
  [ServiceIdKind.Unknown]: 'signedKeyId',
  [ServiceIdKind.PNI]: 'signedKeyIdPNI',
};

const PRE_KEY_ID_KEY: StorageKeyByServiceIdKind = {
  [ServiceIdKind.ACI]: 'maxPreKeyId',
  [ServiceIdKind.Unknown]: 'maxPreKeyId',
  [ServiceIdKind.PNI]: 'maxPreKeyIdPNI',
};

export type PniString = string & { __pni: never };
export type UntaggedPniString = string & { __untagged_pni: never };
export type AciString = string & { __aci: never };
export type ServiceIdString = PniString | AciString;
export type KeyPairType = {
  privKey: Uint8Array;
  pubKey: Uint8Array;
};

type CreateAccountSharedOptionsType = Readonly<{
  number: string;
  verificationCode: string;
  aciKeyPair: KeyPairType;
  pniKeyPair: KeyPairType;
  profileKey: Uint8Array;
  masterKey: Uint8Array | undefined;
}>;

type CreatePrimaryDeviceOptionsType = Readonly<{
  type: AccountType.Primary;

  deviceName?: undefined;
  ourAci?: undefined;
  ourPni?: undefined;
  userAgent?: undefined;

  readReceipts: true;

  accessKey: Uint8Array;
  sessionId: string;
}> &
  CreateAccountSharedOptionsType;

type CreateLinkedDeviceOptionsType = Readonly<{
  type: AccountType.Linked;

  deviceName: string;
  ourAci: AciString;
  ourPni: PniString;
  userAgent?: string;

  readReceipts: boolean;

  accessKey?: undefined;
  sessionId?: undefined;
}> &
  CreateAccountSharedOptionsType;

type CreateAccountOptionsType =
  | CreatePrimaryDeviceOptionsType
  | CreateLinkedDeviceOptionsType;

export async function registerSingleDevice(
  number: string,
  verificationCode: string,
  sessionId: string
): Promise<void> {
  const aciKeyPair = generateKeyPair();
  const pniKeyPair = generateKeyPair();
  const profileKey = getRandomBytes(PROFILE_KEY_LENGTH);
  const accessKey = deriveAccessKey(profileKey);
  const masterKey = getRandomBytes(MASTER_KEY_LENGTH);

  return createAccount({
    type: AccountType.Primary,
    number,
    verificationCode,
    sessionId,
    aciKeyPair,
    pniKeyPair,
    profileKey,
    accessKey,
    masterKey,
    readReceipts: true,
  });
}

async function createAccount(options: CreateAccountOptionsType): Promise<void> {
  const {
    number,
    verificationCode,
    aciKeyPair,
    pniKeyPair,
    profileKey,
    masterKey,
    readReceipts,
    userAgent,
  } = options;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const storage = {} as any;
  let password = Bytes.toBase64(getRandomBytes(16));
  password = password.substring(0, password.length - 2);
  const registrationId = generateRegistrationId();
  const pniRegistrationId = generateRegistrationId();

  const previousNumber = storage.user.getNumber();
  const previousACI = storage.user.getAci();
  const previousPNI = storage.user.getPni();

  log.info(
    `createAccount: Number is ${number}, password has length: ${
      password ? password.length : 'none'
    }`
  );

  let uuidChanged: boolean;
  if (options.type === AccountType.Primary) {
    uuidChanged = true;
  } else if (options.type === AccountType.Linked) {
    uuidChanged = previousACI != null && previousACI !== options.ourAci;
  } else {
    throw new Error(options);
  }

  // We only consider the number changed if we didn't have a UUID before
  const numberChanged =
    !previousACI && previousNumber && previousNumber !== number;

  if (uuidChanged || numberChanged) {
    if (uuidChanged) {
      log.warn(
        'createAccount: New uuid is different from old uuid; deleting all previous data'
      );
    }
    if (numberChanged) {
      log.warn(
        'createAccount: New number is different from old number; deleting all previous data'
      );
    }

    try {
      await storage.protocol.removeAllData();
      log.info('createAccount: Successfully deleted previous data');
    } catch (error) {
      log.error(
        'Something went wrong deleting data from previous number',
        toLogFormat(error)
      );
    }
  } else {
    log.info('createAccount: Erasing configuration');
    await storage.protocol.removeAllConfiguration();
  }

  const previousUuids = [previousACI, previousPNI].filter(
    (uuid) => uuid != null
  );
  if (previousUuids.length > 0) {
    await Promise.all([
      storage.put(
        'identityKeyMap',
        omit(storage.get('identityKeyMap') || {}, previousUuids)
      ),
      storage.put(
        'registrationIdMap',
        omit(storage.get('registrationIdMap') || {}, previousUuids)
      ),
    ]);
  }

  let ourAci: AciString;
  let ourPni: PniString;
  let deviceId: number;

  const aciPqLastResortPreKey = await generateLastResortKyberKey(
    ServiceIdKind.ACI,
    aciKeyPair
  );
  const pniPqLastResortPreKey = await generateLastResortKyberKey(
    ServiceIdKind.PNI,
    pniKeyPair
  );
  const aciSignedPreKey = await generateSignedPreKey(
    ServiceIdKind.ACI,
    aciKeyPair
  );
  const pniSignedPreKey = await generateSignedPreKey(
    ServiceIdKind.PNI,
    pniKeyPair
  );

  const keysToUpload = {
    aciPqLastResortPreKey: kyberPreKeyToUploadSignedPreKey(
      aciPqLastResortPreKey
    ),
    aciSignedPreKey: signedPreKeyToUploadSignedPreKey(aciSignedPreKey),
    pniPqLastResortPreKey: kyberPreKeyToUploadSignedPreKey(
      pniPqLastResortPreKey
    ),
    pniSignedPreKey: signedPreKeyToUploadSignedPreKey(pniSignedPreKey),
  };

  if (options.type === AccountType.Primary) {
    const response = await createAccountRequest({
      number,
      code: verificationCode,
      newPassword: password,
      registrationId,
      pniRegistrationId,
      accessKey: options.accessKey,
      sessionId: options.sessionId,
      aciPublicKey: aciKeyPair.pubKey,
      pniPublicKey: pniKeyPair.pubKey,
      ...keysToUpload,
    });

    ourAci = normalizeAci(response.uuid, 'createAccount');
    strictAssert(
      isUntaggedPniString(response.pni),
      'Response pni must be untagged'
    );
    ourPni = toTaggedPni(response.pni);
    deviceId = 1;
  }
  // else if (options.type === AccountType.Linked) {
  //   //TODO: link device
  // }
  else {
    throw new Error('something went wrong!!');
  }

  // `setCredentials` needs to be called
  // before `saveIdentifyWithAttributes` since `saveIdentityWithAttributes`
  // indirectly calls `ConversationController.getConversationId()` which
  // initializes the conversation for the given number (our number) which
  // calls out to the user storage API to get the stored UUID and number
  // information.
  await storage.user.setCredentials({
    aci: ourAci,
    pni: ourPni,
    number,
    deviceId,
    deviceName: options.deviceName,
    password,
  });

  const identityAttrs = {
    firstUse: true,
    timestamp: Date.now(),
    verified: storage.protocol.VerifiedStatus.VERIFIED,
    nonblockingApproval: true,
  };

  // update our own identity key, which may have changed
  // if we're relinking after a reinstall on the master device
  await Promise.all([
    storage.protocol.saveIdentityWithAttributes(ourAci, {
      ...identityAttrs,
      publicKey: aciKeyPair.pubKey,
    }),
    storage.protocol.saveIdentityWithAttributes(ourPni, {
      ...identityAttrs,
      publicKey: pniKeyPair.pubKey,
    }),
  ]);

  const identityKeyMap = {
    ...(storage.get('identityKeyMap') || {}),
    [ourAci]: aciKeyPair,
    [ourPni]: pniKeyPair,
  };
  const registrationIdMap = {
    ...(storage.get('registrationIdMap') || {}),
    [ourAci]: registrationId,
    [ourPni]: pniRegistrationId,
  };

  await storage.put('identityKeyMap', identityKeyMap);
  await storage.put('registrationIdMap', registrationIdMap);
  await ourProfileKeyService.set(profileKey);
  if (userAgent) {
    await storage.put('userAgent', userAgent);
  }
  if (masterKey) {
    await storage.put('masterKey', Bytes.toBase64(masterKey));
  }

  await storage.put('read-receipt-setting', Boolean(readReceipts));

  const regionCode = getRegionCodeForNumber(number);
  await storage.put('regionCode', regionCode);
  await storage.protocol.hydrateCaches();

  const store = storage.protocol;

  await store.storeSignedPreKey(
    ourAci,
    aciSignedPreKey.keyId,
    aciSignedPreKey.keyPair
  );
  await store.storeSignedPreKey(
    ourPni,
    pniSignedPreKey.keyId,
    pniSignedPreKey.keyPair
  );
  await store.storeKyberPreKeys(ourAci, [
    kyberPreKeyToStoredSignedPreKey(aciPqLastResortPreKey, ourAci),
  ]);
  await store.storeKyberPreKeys(ourPni, [
    kyberPreKeyToStoredSignedPreKey(pniPqLastResortPreKey, ourPni),
  ]);

  await _confirmKeys(
    {
      pqLastResortPreKey: keysToUpload.aciPqLastResortPreKey,
      signedPreKey: keysToUpload.aciSignedPreKey,
    },
    ServiceIdKind.ACI
  );
  await _confirmKeys(
    {
      pqLastResortPreKey: keysToUpload.pniPqLastResortPreKey,
      signedPreKey: keysToUpload.pniSignedPreKey,
    },
    ServiceIdKind.PNI
  );

  const uploadKeys = async (kind: ServiceIdKind) => {
    try {
      const keys = await _generateSingleUseKeys(kind);
      await registerKeys(keys, kind);
    } catch (error) {
      if (kind === ServiceIdKind.PNI) {
        log.error(
          'Failed to upload PNI prekeys. Moving on',
          toLogFormat(error)
        );
        return;
      }

      throw error;
    }
  };

  await Promise.all([
    uploadKeys(ServiceIdKind.ACI),
    uploadKeys(ServiceIdKind.PNI),
  ]);
}

async function deviceNameIsEncrypted(): Promise<void> {
  // await window.textsecure.storage.user.setDeviceNameEncrypted();
}

async function generateLastResortKyberKey(
  serviceIdKind: ServiceIdKind,
  identityKey: KeyPairType
): Promise<KyberPreKeyRecord> {
  const logId = `generateLastRestortKyberKey(${serviceIdKind})`;

  const kyberKeyId = getNextKeyId(serviceIdKind, KYBER_KEY_ID_KEY);
  if (typeof kyberKeyId !== 'number') {
    throw new Error(`${logId}: Invalid KYBER_KEY_ID_KEY in storage`);
  }

  const keyId = kyberKeyId;
  const record = generateKyberPreKey(identityKey, keyId);
  log.info(`${logId}: Saving new last resort prekey`, keyId);

  // await window.textsecure.storage.put(
  //   KYBER_KEY_ID_KEY[serviceIdKind],
  //   kyberKeyId + 1
  // );

  return record;
}

async function generateSignedPreKey(
  serviceIdKind: ServiceIdKind,
  identityKey: KeyPairType
): Promise<CompatSignedPreKeyType> {
  const logId = `AccountManager.generateSignedPreKey(${serviceIdKind})`;

  const signedKeyId = getNextKeyId(serviceIdKind, SIGNED_PRE_KEY_ID_KEY);
  if (typeof signedKeyId !== 'number') {
    throw new Error(`${logId}: Invalid SIGNED_PRE_KEY_ID_KEY in storage`);
  }

  const key = generateSignedPreKeyCurve(identityKey, signedKeyId);
  log.info(`${logId}: Saving new signed prekey`, key.keyId);

  // await window.textsecure.storage.put(
  //   SIGNED_PRE_KEY_ID_KEY[serviceIdKind],
  //   signedKeyId + 1
  // );

  return key;
}

// Very similar to maybeUpdateKeys, but will always generate prekeys and doesn't upload
async function _generateSingleUseKeys(
  serviceIdKind: ServiceIdKind,
  count = PRE_KEY_GEN_BATCH_SIZE
): Promise<UploadKeysType> {
  // const ourServiceId =
  //   window.textsecure.storage.user.getCheckedServiceId(serviceIdKind);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ourServiceId = '' as any;
  const logId = `AccountManager.generateKeys(${serviceIdKind}, ${ourServiceId})`;

  const preKeys = await generateNewPreKeys(serviceIdKind, count);
  const pqPreKeys = await generateNewKyberPreKeys(serviceIdKind, count);

  log.info(
    `${logId}: Generated ` +
      `${preKeys.length} pre keys, ` +
      `${pqPreKeys.length} kyber pre keys`
  );

  // These are primarily for the summaries they log out
  await _cleanPreKeys(serviceIdKind);
  // await _cleanKyberPreKeys(serviceIdKind);

  return {
    identityKey: getIdentityKeyOrThrow(ourServiceId).pubKey,
    preKeys,
    pqPreKeys,
  };
}

async function generateNewPreKeys(
  serviceIdKind: ServiceIdKind,
  count = PRE_KEY_GEN_BATCH_SIZE
): Promise<Array<UploadPreKeyType>> {
  // const ourServiceId =
  //   window.textsecure.storage.user.getCheckedServiceId(serviceIdKind);
  const ourServiceId = '';
  const logId = `AccountManager.generateNewPreKeys(${serviceIdKind})`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const storage = {} as any;
  const store = storage.protocol;

  const startId = getNextKeyId(serviceIdKind, PRE_KEY_ID_KEY);
  log.info(`${logId}: Generating ${count} new keys starting at ${startId}`);

  if (typeof startId !== 'number') {
    throw new Error(`${logId}: Invalid PRE_KEY_ID_KEY in storage`);
  }

  const toSave: Array<CompatPreKeyType> = [];
  for (let keyId = startId; keyId < startId + count; keyId += 1) {
    toSave.push(generatePreKey(keyId));
  }

  await Promise.all([
    store.storePreKeys(ourServiceId, toSave),
    storage.put(PRE_KEY_ID_KEY[serviceIdKind], startId + count),
  ]);

  return toSave.map((key) => ({
    keyId: key.keyId,
    publicKey: key.keyPair.pubKey,
  }));
}

async function generateNewKyberPreKeys(
  serviceIdKind: ServiceIdKind,
  count = PRE_KEY_GEN_BATCH_SIZE
): Promise<Array<UploadKyberPreKeyType>> {
  const logId = `AccountManager.generateNewKyberPreKeys(${serviceIdKind})`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const storage = {} as any;
  const store = storage.protocol;

  const startId = getNextKeyId(serviceIdKind, KYBER_KEY_ID_KEY);
  log.info(`${logId}: Generating ${count} new keys starting at ${startId}`);

  if (typeof startId !== 'number') {
    throw new Error(`${logId}: Invalid KYBER_KEY_ID_KEY in storage`);
  }

  const ourServiceId = storage.user.getCheckedServiceId(serviceIdKind);
  const identityKey = getIdentityKeyOrThrow(ourServiceId);

  const toSave: Array<Omit<KyberPreKeyType, 'id'>> = [];
  const toUpload: Array<UploadKyberPreKeyType> = [];
  const now = Date.now();
  for (let keyId = startId; keyId < startId + count; keyId += 1) {
    const record = generateKyberPreKey(identityKey, keyId);
    toSave.push({
      createdAt: now,
      data: record.serialize(),
      isConfirmed: false,
      isLastResort: false,
      keyId,
      ourServiceId,
    });
    toUpload.push({
      keyId,
      publicKey: record.publicKey().serialize(),
      signature: record.signature(),
    });
  }

  await Promise.all([
    store.storeKyberPreKeys(ourServiceId, toSave),
    storage.put(KYBER_KEY_ID_KEY[serviceIdKind], startId + count),
  ]);

  return toUpload;
}

function encryptDeviceName(
  name: string,
  identityKey: KeyPairType
): string | undefined {
  if (!name) {
    return undefined;
  }
  const encrypted = encryptDeviceNameCrypto(name, identityKey.pubKey);

  const proto = new Proto.DeviceName();
  proto.ephemeralPublic = encrypted.ephemeralPublic;
  proto.syntheticIv = encrypted.syntheticIv;
  proto.ciphertext = encrypted.ciphertext;

  const bytes = Proto.DeviceName.encode(proto).finish();
  return Bytes.toBase64(bytes);
}

function getIdentityKeyOrThrow(ourServiceId: ServiceIdString): KeyPairType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const storage = {} as any;
  const store = storage.protocol;
  let identityKey: KeyPairType | undefined;
  try {
    identityKey = store.getIdentityKeyPair(ourServiceId);
  } catch (error) {
    const errorText = toLogFormat(error);
    throw new Error(
      `getIdentityKeyOrThrow: Failed to fetch identity key - ${errorText}`
    );
  }

  if (!identityKey) {
    throw new Error('getIdentityKeyOrThrow: Missing identity key');
  }

  return identityKey;
}

// Exposed only for testing
async function _confirmKeys(
  {
    signedPreKey,
    pqLastResortPreKey,
  }: Readonly<{
    signedPreKey?: UploadSignedPreKeyType;
    pqLastResortPreKey?: UploadSignedPreKeyType;
  }>,
  serviceIdKind: ServiceIdKind
): Promise<void> {
  // const ourServiceId =
  //   window.textsecure.storage.user.getCheckedServiceId(serviceIdKind);
  const ourServiceId = '';
  const logId = `AccountManager.confirmKeys(${serviceIdKind})`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const storage = {} as any;
  const store = storage.protocol;

  // const updatedAt = Date.now();
  if (signedPreKey) {
    log.info(`${logId}: confirming signed prekey key`, signedPreKey.keyId);
    await store.confirmSignedPreKey(ourServiceId, signedPreKey.keyId);
    // await window.storage.put(
    //   SIGNED_PRE_KEY_UPDATE_TIME_KEY[serviceIdKind],
    //   updatedAt
    // );
  } else {
    log.info(`${logId}: signedPreKey was not uploaded, not confirming`);
  }

  if (pqLastResortPreKey) {
    log.info(`${logId}: confirming last resort key`, pqLastResortPreKey.keyId);
    await store.confirmKyberPreKey(ourServiceId, pqLastResortPreKey.keyId);
    // await window.storage.put(
    //   LAST_RESORT_KEY_UPDATE_TIME_KEY[serviceIdKind],
    //   updatedAt
    // );
  } else {
    log.info(`${logId}: pqLastResortPreKey was not uploaded, not confirming`);
  }
}
async function _cleanPreKeys(serviceIdKind: ServiceIdKind): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const store = {} as any;
  const logId = `AccountManager.cleanPreKeys(${serviceIdKind})`;
  // const ourServiceId =
  //   window.textsecure.storage.user.getCheckedServiceId(serviceIdKind);
  const ourServiceId = '';
  const preKeys = store.loadPreKeys(ourServiceId);
  const toDelete: Array<number> = [];
  const sortedKeys = orderBy(preKeys, ['createdAt'], ['desc']);

  sortedKeys.forEach((key, index) => {
    if (index < PRE_KEY_MAX_COUNT) {
      return;
    }
    const createdAt = key.createdAt || 0;

    if (isOlderThan(createdAt, PRE_KEY_ARCHIVE_AGE)) {
      toDelete.push(key.keyId);
    }
  });

  log.info(`${logId}: ${sortedKeys.length} total prekeys`);
  if (toDelete.length > 0) {
    log.info(`${logId}: Removing ${toDelete.length} obsolete prekeys`);
    await store.removePreKeys(ourServiceId, toDelete);
  }
}

function getNextKeyId(
  kind: ServiceIdKind,
  keys: StorageKeyByServiceIdKind
): number {
  const id = '';
  // window.storage.get(keys[kind]);

  if (isNumber(id)) {
    return id;
  }

  // For PNI ids, start with existing ACI id
  if (kind === ServiceIdKind.PNI) {
    log.info(keys);
    // return window.storage.get(keys[ServiceIdKind.ACI], STARTING_KEY_ID);
  }

  return STARTING_KEY_ID;
}

function kyberPreKeyToUploadSignedPreKey(
  record: KyberPreKeyRecord
): UploadSignedPreKeyType {
  return {
    keyId: record.id(),
    publicKey: record.publicKey().serialize(),
    signature: record.signature(),
  };
}

function signedPreKeyToUploadSignedPreKey({
  keyId,
  keyPair,
  signature,
}: CompatSignedPreKeyType): UploadSignedPreKeyType {
  return {
    keyId,
    publicKey: keyPair.pubKey,
    signature,
  };
}

function kyberPreKeyToStoredSignedPreKey(
  record: KyberPreKeyRecord,
  ourServiceId: ServiceIdString
): Omit<KyberPreKeyType, 'id'> {
  return {
    createdAt: Date.now(),
    data: record.serialize(),
    isConfirmed: false,
    isLastResort: true,
    keyId: record.id(),
    ourServiceId,
  };
}

export type UploadKyberPreKeyType = UploadSignedPreKeyType;

export type PreKeyIdType = `${ServiceIdString}:${number}`;
export type KyberPreKeyType = {
  id: PreKeyIdType;

  createdAt: number;
  data: Uint8Array;
  isConfirmed: boolean;
  isLastResort: boolean;
  keyId: number;
  ourServiceId: ServiceIdString;
};
