// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import noop from 'lodash/noop';

type LogAtLevelFnType = (
  level: LogLevel,
  ...args: ReadonlyArray<unknown>
) => void;

let logAtLevel: LogAtLevelFnType = noop;
let hasInitialized = false;

export const fatal: LogFunction = (...args) =>
  logAtLevel(LogLevel.Fatal, ...args);
export const error: LogFunction = (...args) =>
  logAtLevel(LogLevel.Error, ...args);
export const warn: LogFunction = (...args) =>
  logAtLevel(LogLevel.Warn, ...args);
export const info: LogFunction = (...args) =>
  logAtLevel(LogLevel.Info, ...args);
export const debug: LogFunction = (...args) =>
  logAtLevel(LogLevel.Debug, ...args);
export const trace: LogFunction = (...args) =>
  logAtLevel(LogLevel.Trace, ...args);

/**
 * Sets the low-level logging interface. Should be called early in a process's life, and
 * can only be called once.
 */
export function setLogAtLevel(log: LogAtLevelFnType): void {
  if (hasInitialized) {
    throw new Error('Logger has already been initialized');
  }
  logAtLevel = log;
  hasInitialized = true;
}

// Copyright 2020 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

export type LogFunction = (...args: Array<unknown>) => void;

export type LoggerType = {
  fatal: LogFunction;
  error: LogFunction;
  warn: LogFunction;
  info: LogFunction;
  debug: LogFunction;
  trace: LogFunction;
};

// These match [Pino's recommendations][0].
// [0]: https://getpino.io/#/docs/api?id=loggerlevels-object
export enum LogLevel {
  Fatal = 60,
  Error = 50,
  Warn = 40,
  Info = 30,
  Debug = 20,
  Trace = 10,
}
