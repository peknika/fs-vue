import IndexedDB from "@/shared/index-db";
const BEER_STORE = "userStore";

export const beerDb = IndexedDB.init(BEER_STORE);
