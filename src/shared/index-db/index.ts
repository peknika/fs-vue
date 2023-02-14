import { createStore, set, get, del, keys, type UseStore } from "idb-keyval";
const STORE = "DBstore";

export interface IIndexedDB {
  get: (keys: string | Array<string>) => Promise<undefined | object>;
  set: (keys: string | Array<string>, value: any) => Promise<object>;
  clear: (keys: string | Array<string>) => Promise<void>;
}

export default class IndexedDB implements IIndexedDB {
  store: UseStore;

  constructor(objectKey: string) {
    this.store = createStore(objectKey, STORE);
  }

  static init(objectKey: string) {
    return new IndexedDB(objectKey);
  }

  async get(keys: string | Array<string>): Promise<undefined | object> {
    const key = IndexedDB.buildKey(keys);

    return (await get(key, this.store)) as any;
  }

  async set(keys: string | Array<string>, value: any): Promise<any> {
    const key = IndexedDB.buildKey(keys);

    await set(key, value, this.store);

    return await get(key, this.store);
  }

  async clear(keys: string | Array<string>): Promise<void> {
    const key = IndexedDB.buildKey(keys);

    return await del(key, this.store);
  }

  async keys(): Promise<string[]> {
    return await keys();
  }

  private static buildKey(keys: string | Array<string>): string {
    return [].concat(keys).join("_").toLowerCase();
  }
}
