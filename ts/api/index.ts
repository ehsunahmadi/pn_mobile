import * as Bytes from '../textsecure/bytes';
import { AciString, ServiceIdKind } from '../utils/normalizeAci';
import {
  CreateAccountOptionsType,
  UploadSignedPreKeyType,
  VerificationTransport,
  createAccountResultZod,
  verificationSessionZod,
} from './types';
import { _ajax } from './utils';

export let username = '';
export let password = '';

export async function requestVerification(
  number: string,
  transport: VerificationTransport
) {
  console.log('requestVerification', number, transport);
  // Create a new blank session using just a E164
  let session = verificationSessionZod.parse(
    await _ajax({
      call: 'verificationSession',
      httpType: 'POST',
      responseType: 'json',
      jsonData: {
        number,
      },
      unauthenticated: true,
      accessKey: undefined,
    })
  );

  // Request an SMS or Voice confirmation
  session = verificationSessionZod.parse(
    await _ajax({
      call: 'verificationSession',
      httpType: 'POST',
      urlParameters: `/${encodeURIComponent(session.id)}/code`,
      responseType: 'json',
      jsonData: {
        client: 'ios',
        transport: transport === VerificationTransport.SMS ? 'sms' : 'voice',
      },
      unauthenticated: true,
      accessKey: undefined,
    })
  );

  // Return sessionId to be used in `createAccount`
  return { SessionID: session.id };
}

export async function createAccount({
  sessionId,
  number,
  code,
  newPassword,
  registrationId,
  pniRegistrationId,
  accessKey,
  aciPublicKey,
  pniPublicKey,
  aciSignedPreKey,
  pniSignedPreKey,
  aciPqLastResortPreKey,
  pniPqLastResortPreKey,
}: CreateAccountOptionsType) {
  const session = verificationSessionZod.parse(
    await _ajax({
      isRegistration: true,
      call: 'verificationSession',
      httpType: 'PUT',
      urlParameters: `/${encodeURIComponent(sessionId)}/code`,
      responseType: 'json',
      jsonData: {
        code,
      },
      unauthenticated: true,
      accessKey: undefined,
    })
  );

  if (!session.verified) {
    throw new Error('createAccount: invalid code');
  }

  const jsonData = {
    sessionId: session.id,
    accountAttributes: {
      fetchesMessages: true,
      registrationId,
      pniRegistrationId,
      capabilities: {
        pni: true,
      },
      unidentifiedAccessKey: Bytes.toBase64(accessKey),
    },
    requireAtomic: true,
    skipDeviceTransfer: true,
    aciIdentityKey: Bytes.toBase64(aciPublicKey),
    pniIdentityKey: Bytes.toBase64(pniPublicKey),
    aciSignedPreKey: serializeSignedPreKey(aciSignedPreKey),
    pniSignedPreKey: serializeSignedPreKey(pniSignedPreKey),
    aciPqLastResortPreKey: serializeSignedPreKey(aciPqLastResortPreKey),
    pniPqLastResortPreKey: serializeSignedPreKey(pniPqLastResortPreKey),
  };

  return _withNewCredentials(
    {
      username: number,
      password: newPassword,
    },
    async () => {
      const responseJson = await _ajax({
        isRegistration: true,
        call: 'registration',
        httpType: 'POST',
        responseType: 'json',
        jsonData,
      });

      return createAccountResultZod.parse(responseJson);
    }
  );
}
function serializeSignedPreKey(
  preKey?: UploadSignedPreKeyType
): SerializedSignedPreKeyType | undefined {
  if (preKey == null) {
    return undefined;
  }

  const { keyId, publicKey, signature } = preKey;

  return {
    keyId,
    publicKey: Bytes.toBase64(publicKey),
    signature: Bytes.toBase64(signature),
  };
}

export async function registerKeys(
  genKeys: UploadKeysType,
  serviceIdKind: ServiceIdKind
) {
  const preKeys = genKeys.preKeys?.map((key) => ({
    keyId: key.keyId,
    publicKey: Bytes.toBase64(key.publicKey),
  }));
  const pqPreKeys = genKeys.pqPreKeys?.map((key) => ({
    keyId: key.keyId,
    publicKey: Bytes.toBase64(key.publicKey),
    signature: Bytes.toBase64(key.signature),
  }));

  if (
    !preKeys?.length &&
    !pqPreKeys?.length &&
    !genKeys.pqLastResortPreKey &&
    !genKeys.signedPreKey
  ) {
    throw new Error(
      'registerKeys: None of the four potential key types were provided!'
    );
  }
  if (preKeys && preKeys.length === 0) {
    throw new Error('registerKeys: Attempting to upload zero preKeys!');
  }
  if (pqPreKeys && pqPreKeys.length === 0) {
    throw new Error('registerKeys: Attempting to upload zero pqPreKeys!');
  }

  const keys: JSONKeysType = {
    identityKey: Bytes.toBase64(genKeys.identityKey),
    preKeys,
    pqPreKeys,
    pqLastResortPreKey: serializeSignedPreKey(genKeys.pqLastResortPreKey),
    signedPreKey: serializeSignedPreKey(genKeys.signedPreKey),
  };

  await _ajax({
    isRegistration: true,
    call: 'keys',
    urlParameters: `?${serviceIdKindToQuery(serviceIdKind)}`,
    httpType: 'PUT',
    jsonData: keys,
  });
}

async function _withNewCredentials<
  Result extends { uuid: AciString; deviceId?: number },
>(
  { username: newUsername, password: newPassword }: WebAPICredentials,
  callback: () => Promise<Result>
): Promise<Result> {
  // Reset old websocket credentials and disconnect.
  // AccountManager is our only caller and it will trigger
  // `registration_done` which will update credentials.
  await logout();

  // Update REST credentials, though. We need them for the call below
  username = newUsername;
  password = newPassword;

  const result = await callback();

  const { uuid: aci = newUsername, deviceId = 1 } = result;

  // Set final REST credentials to let `registerKeys` succeed.
  username = `${aci}.${deviceId}`;
  password = newPassword;

  return result;
}

async function logout() {
  username = '';
  password = '';

  // if (useWebSocket) {
  //   await socketManager.logout();
  // }
}

export type WebAPICredentials = {
  username: string;
  password: string;
};

type SerializedSignedPreKeyType = Readonly<{
  keyId: number;
  publicKey: string;
  signature: string;
}>;

export type UploadKeysType = {
  identityKey: Uint8Array;

  // If a field is not provided, the server won't update its data.
  preKeys?: Array<UploadPreKeyType>;
  pqPreKeys?: Array<UploadSignedPreKeyType>;
  pqLastResortPreKey?: UploadSignedPreKeyType;
  signedPreKey?: UploadSignedPreKeyType;
};
function serviceIdKindToQuery(kind: ServiceIdKind): string {
  let value: string;
  if (kind === ServiceIdKind.ACI) {
    value = 'aci';
  } else if (kind === ServiceIdKind.PNI) {
    value = 'pni';
  } else {
    throw new Error(`Unsupported ServiceIdKind: ${kind}`);
  }
  return `identity=${value}`;
}

export type UploadPreKeyType = {
  keyId: number;
  publicKey: Uint8Array;
};

type JSONSignedPreKeyType = {
  keyId: number;
  publicKey: string;
  signature: string;
};
type JSONPreKeyType = {
  keyId: number;
  publicKey: string;
};
type JSONKyberPreKeyType = {
  keyId: number;
  publicKey: string;
  signature: string;
};

type JSONKeysType = {
  identityKey: string;
  preKeys?: Array<JSONPreKeyType>;
  pqPreKeys?: Array<JSONKyberPreKeyType>;
  pqLastResortPreKey?: JSONKyberPreKeyType;
  signedPreKey?: JSONSignedPreKeyType;
};
