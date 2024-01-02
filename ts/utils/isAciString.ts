// Copyright 2023 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import { isValidUuid } from './isValidUuid';
import { AciString } from './normalizeAci';

export function isAciString(value?: string | null): value is AciString {
  return isValidUuid(value);
}
