import type { AxiosPromise } from "axios";
import { apiInstance } from "./base";
import type { Beer } from "./models";

const BASE_URL = "/beers";

export type GetBeersListParams = {
  abv_gt?: number; // Returns all beers with ABV greater than the supplied number
  abv_lt?: number; // Returns all beers with ABV less than the supplied number
  ibu_gt?: number; // Returns all beers with IBU greater than the supplied number
  ibu_lt?: number; // Returns all beers with IBU less than the supplied number
  ebc_gt?: number; // Returns all beers with EBC greater than the supplied number
  ebc_lt?: number; // Returns all beers with EBC less than the supplied number
  beer_name?: string; // Returns all beers matching the supplied name (this will match partial strings as well), if you need to add spaces just add an underscore (_)
  yeast?: string; // Returns all beers matching the supplied yeast name, this performs a fuzzy match
  brewed_before?: Date; // Returns all beers brewed before this date, the date format is mm-yyyy e.g 10-2011
  brewed_after?: Date; // Returns all beers brewed after this date, the date format is mm-yyyy e.g 10-2011
  hops?: string; // Returns all beers matching the supplied hops name, this performs a fuzzy match
  malt?: string; // Returns all beers matching the supplied malt name, this performs a fuzzy match
  food?: string; // Returns all beers matching the supplied food name, this performs a fuzzy match
  ids: string; // Returns all beers matching the supplied ID's. You can pass in multiple ID's by separating them with a | symbol
};

export const getBeersList = (
  params?: GetBeersListParams
): AxiosPromise<Beer[]> => {
  return apiInstance.get(BASE_URL, { params });
};
