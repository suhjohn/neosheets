import localForage from "localforage";

export const localForageInstance = localForage.createInstance({
  name: "LocalForage",
  version: 1.0,
  storeName: "LocalForage",
  driver: [localForage.INDEXEDDB, localForage.LOCALSTORAGE],
});
