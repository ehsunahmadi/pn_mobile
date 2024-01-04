// Copyright 2020 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import { User } from './storage/User';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as log from '../utils/log';
import { StorageAccessType, StorageInterface } from './storage/Storage';

export class Storage implements StorageInterface {
  public readonly user: User;

  private ready = false;

  private readyCallbacks: Array<() => void> = [];

  private items: Partial<StorageAccessType> = Object.create(null);

  constructor() {
    this.user = new User(this);

    // window.storage = this;
  }

  // `StorageInterface` implementation

  public get<K extends keyof StorageAccessType, V extends StorageAccessType[K]>(
    key: K
  ): V | undefined;

  public get<K extends keyof StorageAccessType, V extends StorageAccessType[K]>(
    key: K,
    defaultValue: V
  ): V;

  public get<K extends keyof StorageAccessType>(
    key: K,
    defaultValue?: StorageAccessType[K]
  ): StorageAccessType[K] | undefined {
    if (!this.ready) {
      log.warn('Called storage.get before storage is ready. key:', key);
    }

    const item = this.items[key];
    if (item === undefined) {
      return defaultValue;
    }

    return item;
  }

  public async put<K extends keyof StorageAccessType>(
    key: K,
    value: StorageAccessType[K]
  ): Promise<void> {
    if (!this.ready) {
      log.warn('Called storage.put before storage is ready. key:', key);
    }

    this.items[key] = value;
    await AsyncStorage.setItem(key, value);

    // window.reduxActions?.items.putItemExternal(key, value);
  }

  public async remove<K extends keyof StorageAccessType>(
    key: K
  ): Promise<void> {
    if (!this.ready) {
      log.warn('Called storage.remove before storage is ready. key:', key);
    }

    delete this.items[key];
    await AsyncStorage.removeItem(key);

    // window.reduxActions?.items.removeItemExternal(key);
  }

  // Regular methods

  public onready(callback: () => void): void {
    if (this.ready) {
      callback();
    } else {
      this.readyCallbacks.push(callback);
    }
  }

  public async fetch(): Promise<void> {
    this.reset();

    Object.assign(this.items, await AsyncStorage.getAllKeys());

    this.ready = true;
    this.callListeners();
  }

  public reset(): void {
    this.ready = false;
    this.items = Object.create(null);
  }

  public getItemsState(): Partial<StorageAccessType> {
    if (!this.ready) {
      log.warn('Called getItemsState before storage is ready');
    }

    log.info('Storage/getItemsState: now preparing copy of items...');

    const state = Object.create(null);

    // TypeScript isn't smart enough to figure out the types automatically.
    const { items } = this;
    const allKeys = Object.keys(items) as Array<keyof typeof items>;

    for (const key of allKeys) {
      state[key] = items[key];
    }

    return state;
  }

  private callListeners(): void {
    if (!this.ready) {
      return;
    }
    const callbacks = this.readyCallbacks;
    this.readyCallbacks = [];
    callbacks.forEach((callback) => callback());
  }
}
