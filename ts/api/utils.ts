import { SECOND } from '../utils/durations';

export async function _ajax(param: AjaxOptionsType): Promise<unknown> {
  if (!param.urlParameters) {
    param.urlParameters = '';
  }

  const outerParams = {
    basicAuth: param.basicAuth,
    contentType: param.contentType || 'application/json; charset=utf-8',
    data:
      param.data ||
      (param.jsonData ? JSON.stringify(param.jsonData) : undefined),
    headers: param.headers,
    path: URL_CALLS[param.call] + param.urlParameters,
    responseType: param.responseType,
    timeout: param.timeout,
    type: param.httpType,
    redactUrl: param.redactUrl,
    serverUrl: '',
    version: '',
    unauthenticated: param.unauthenticated,
    accessKey: param.accessKey,
    abortSignal: param.abortSignal,
  };
  return await _outerAjax(null, outerParams);
}

async function _outerAjax(
  url: string | null,
  options: PromiseAjaxOptionsType
): Promise<unknown> {
  options.stack = new Error().stack; // just in case, save stack here.

  return _promiseAjax(url, options);
}

async function _promiseAjax(
  providedUrl: string | null,
  options: PromiseAjaxOptionsType
): Promise<unknown> {
  const url = providedUrl || `${options.host}/${options.path}`;

  const timeout =
    typeof options.timeout === 'number' ? options.timeout : DEFAULT_TIMEOUT;

  const fetchOptions = {
    method: options.type,
    body: options.data,
    headers: {
      'X-Signal-Agent': 'OWD',
      ...options.headers,
    } as FetchHeaderListType,
    redirect: options.redirect,
    ca: options.certificateAuthority,
    timeout,
    abortSignal: options.abortSignal,
  };

  if (fetchOptions.body instanceof Uint8Array) {
    // node-fetch doesn't support Uint8Array, only node Buffer
    const contentLength = fetchOptions.body.byteLength;
    fetchOptions.body = Buffer.from(fetchOptions.body);

    // node-fetch doesn't set content-length like S3 requires
    fetchOptions.headers['Content-Length'] = contentLength.toString();
  }

  if (options.contentType) {
    fetchOptions.headers['Content-Type'] = options.contentType;
  }

  return fetch(url, fetchOptions);
}

const URL_CALLS = {
  accountExistence: 'v1/accounts/account',
  attachmentId: 'v3/attachments/form/upload',
  attestation: 'v1/attestation',
  batchIdentityCheck: 'v1/profile/identity_check/batch',
  challenge: 'v1/challenge',
  config: 'v1/config',
  deliveryCert: 'v1/certificate/delivery',
  directoryAuthV2: 'v2/directory/auth',
  discovery: 'v1/discovery',
  getGroupAvatarUpload: 'v1/groups/avatar/form',
  getGroupCredentials: 'v1/certificate/auth/group',
  getIceServers: 'v1/accounts/turn',
  getOnboardingStoryManifest:
    'dynamic/desktop/stories/onboarding/manifest.json',
  getStickerPackUpload: 'v1/sticker/pack/form',
  getArtAuth: 'v1/art/auth',
  groupLog: 'v1/groups/logs',
  groupJoinedAtVersion: 'v1/groups/joined_at_version',
  groups: 'v1/groups',
  groupsViaLink: 'v1/groups/join/',
  groupToken: 'v1/groups/token',
  keys: 'v2/keys',
  linkDevice: 'v1/devices/link',
  messages: 'v1/messages',
  multiRecipient: 'v1/messages/multi_recipient',
  phoneNumberDiscoverability: 'v2/accounts/phone_number_discoverability',
  profile: 'v1/profile',
  registration: 'v1/registration',
  registerCapabilities: 'v1/devices/capabilities',
  reportMessage: 'v1/messages/report',
  signed: 'v2/keys/signed',
  storageManifest: 'v1/storage/manifest',
  storageModify: 'v1/storage/',
  storageRead: 'v1/storage/read',
  storageToken: 'v1/storage/auth',
  subscriptions: 'v1/subscription',
  subscriptionConfiguration: 'v1/subscription/configuration',
  supportUnauthenticatedDelivery: 'v1/devices/unauthenticated_delivery',
  updateDeviceName: 'v1/accounts/name',
  username: 'v1/accounts/username_hash',
  reserveUsername: 'v1/accounts/username_hash/reserve',
  confirmUsername: 'v1/accounts/username_hash/confirm',
  usernameLink: 'v1/accounts/username_link',
  verificationSession: 'v1/verification/session',
  whoami: 'v1/accounts/whoami',
};

type AjaxOptionsType = {
  basicAuth?: string;
  call: keyof typeof URL_CALLS;
  contentType?: string;
  data?: Uint8Array | Buffer | Uint8Array | string;
  disableSessionResumption?: boolean;
  headers?: HeaderListType;
  host?: string;
  httpType: HTTPCodeType;
  jsonData?: unknown;
  password?: string;
  redactUrl?: RedactUrl;
  responseType?: 'json' | 'bytes' | 'byteswithdetails' | 'stream';
  schema?: unknown;
  timeout?: number;
  urlParameters?: string;
  username?: string;
  isRegistration?: true;
  abortSignal?: AbortSignal;
} & (
  | {
      unauthenticated?: false;
      accessKey?: string;
    }
  | {
      unauthenticated: true;
      accessKey: undefined | string;
    }
);
type FetchHeaderListType = { [name: string]: string };
export type HeaderListType = { [name: string]: string | ReadonlyArray<string> };
type HTTPCodeType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD';

type RedactUrl = (url: string) => string;

type PromiseAjaxOptionsType = {
  basicAuth?: string;
  certificateAuthority?: string;
  contentType?: string;
  data?: Uint8Array | string;
  disableRetries?: boolean;
  disableSessionResumption?: boolean;
  headers?: HeaderListType;
  host?: string;
  password?: string;
  path?: string;
  proxyUrl?: string;
  redactUrl?: RedactUrl;
  redirect?: 'error' | 'follow' | 'manual';
  responseType?:
    | 'json'
    | 'jsonwithdetails'
    | 'bytes'
    | 'byteswithdetails'
    | 'stream';
  serverUrl?: string;
  stack?: string;
  timeout?: number;
  type: HTTPCodeType;
  user?: string;
  version: string;
  abortSignal?: AbortSignal;
} & (
  | {
      unauthenticated?: false;
      accessKey?: string;
    }
  | {
      unauthenticated: true;
      accessKey: undefined | string;
    }
);

const DEFAULT_TIMEOUT = 30 * SECOND;
