import IndexedDB from "@/shared/index-db";
const USER_STORE = "userStore";

export const userDb = IndexedDB.init(USER_STORE);
