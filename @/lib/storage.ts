import localForage from "localforage";

export const localForageInstance = localForage.createInstance({
  name: "NeoSheetsStore",
  version: 1.0,
  storeName: "db",
  driver: [localForage.INDEXEDDB],
});
