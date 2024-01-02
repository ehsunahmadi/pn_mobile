import { z } from 'zod';
import { aciSchema, untaggedPniSchema } from '../../utils/ServiceId';

export type UploadSignedPreKeyType = {
  keyId: number;
  publicKey: Uint8Array;
  signature: Uint8Array;
};

export enum VerificationTransport {
  SMS = 'SMS',
  Voice = 'Voice',
}

export const verificationSessionZod = z.object({
  id: z.string(),
  allowedToRequestCode: z.boolean(),
  verified: z.boolean(),
});

export type CreateAccountOptionsType = Readonly<{
  sessionId: string;
  number: string;
  code: string;
  newPassword: string;
  registrationId: number;
  pniRegistrationId: number;
  accessKey: Uint8Array;
  aciPublicKey: Uint8Array;
  pniPublicKey: Uint8Array;
  aciSignedPreKey: UploadSignedPreKeyType;
  pniSignedPreKey: UploadSignedPreKeyType;
  aciPqLastResortPreKey: UploadSignedPreKeyType;
  pniPqLastResortPreKey: UploadSignedPreKeyType;
}>;
export const createAccountResultZod = z.object({
  uuid: aciSchema,
  pni: untaggedPniSchema,
});
export type CreateAccountResultType = z.infer<typeof createAccountResultZod>;
