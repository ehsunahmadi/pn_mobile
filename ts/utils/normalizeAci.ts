// Copyright 2023 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import { strictAssert } from './assert';
import { isAciString } from './isAciString';
import * as log from './log';

export function normalizeAci(
  rawAci: string,
  context: string,
  logger?: Pick<log.LoggerType, 'warn'>
): AciString;

export function normalizeAci(
  rawAci: string | undefined | null,
  context: string,
  logger?: Pick<log.LoggerType, 'warn'>
): AciString | undefined;

export function normalizeAci(
  rawAci: string | undefined | null,
  context: string,
  logger: Pick<log.LoggerType, 'warn'> = log
): AciString | undefined {
  if (rawAci == null) {
    return undefined;
  }

  const result = rawAci.toLowerCase();
  strictAssert(!result.startsWith('pni:'), 'ACI should not start with PNI:');

  if (!isAciString(result)) {
    logger.warn(
      `Normalizing invalid aci: ${rawAci} to ${result} in context "${context}"`
    );

    // Cast anyway we don't want to throw here
    return result as AciString;
  }

  return result;
}

export enum ServiceIdKind {
  ACI = 'ACI',
  PNI = 'PNI',
  Unknown = 'Unknown',
}

export type PniString = string & { __pni: never };
export type UntaggedPniString = string & { __untagged_pni: never };
export type AciString = string & { __aci: never };
export type ServiceIdString = PniString | AciString;
