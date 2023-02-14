import { fetchBeerById } from "./../../../shared/api/punkapi/beers";
import { beerDb } from "./../../../app/providers/beerIndexDb";
import { reactive, computed } from "vue";
import { defineStore } from "pinia";

import { punkApi, type Beer } from "@/shared/api";

const MEDIUM_ABV = 5;

export enum ABV {
  All = "all",
  Light = "light",
  Strong = "strong",
}

export const NAMESPACE = "beers";

// export const useBeers = defineStore(NAMESPACE, {
//     beers: () => ({
//         /** @type {Beer[]} */
//         beers: [] as Beer[],
//         /** @type {ABV.all | ABV.Light | ABV.Strong} */
//         filter: 'all',
//         loading: true,
//       }),
//       getters: {
//         light: (beers): Beer[] => {
//           return beers.list.filter((b) => b.abv < MEDIUM_ABV) as Beer[]
//         },
//         strong: (beers): Beer[] => {
//           return beers.list.filter((b) => b.abv > MEDIUM_ABV)
//         },
//         filteredBeers(_): Beer[] {
//           if (this.filter === ABV.Light) {
//             return this.light
//           } else if (this.filter === ABV.Strong) {
//             return this.strong
//           }
//           return this.list
//         },
//       },
//       actions: {
//         async fetchBeers() {
//             this.list = []
//             this.list = await punkApi.list.getBeersList()
//             this.loading = false
//           },
//       }
// });

interface BeersState {
  currentBeer: Beer;
  list: Beer[];
  loading: boolean;
  filter: ABV;
}
export const useBeers = defineStore(NAMESPACE, () => {
  const beers: BeersState = reactive({
    currentBeer: null,
    list: [],
    loading: true,
    filter: ABV.All,
  });

  // getters
  // const light = computed((): Beer[] =>
  //   beers.list.filter((b) => b.abv < MEDIUM_ABV)
  // );
  // const strong = computed(
  //   (): Beer[] => beers.list.filter((b) => b.abv > MEDIUM_ABV) as Beer[]
  // );
  // const all = computed((): Beer[] => beers.list);

  const currenFilter = computed((): ABV => beers.filter);

  const filteredBeers = computed((): Beer[] => {
    if (beers.filter === ABV.Light) {
      const light = beers.list.filter((b) => b.abv < MEDIUM_ABV) as Beer[];

      return light;
    } else if (beers.filter === ABV.Strong) {
      const strong = beers.list.filter((b) => b.abv > MEDIUM_ABV) as Beer[];

      return strong;
    }
    const all = beers.list;

    return all;
  });

  const currentBeer = computed(() => beers.currentBeer);

  //setters
  const setFilter = (filter: ABV) => (beers.filter = filter);

  // actions
  const fetchBeers = async (): Promise<Beer[]> => {
    const result = await punkApi.beers.getBeersList();
    beers.loading = false;
    return (beers.list = result.data);
  };

  const fetchBeerById = async (id: number): Promise<Beer> =>
    (beers.currentBeer = await punkApi.beers.fetchBeerById(id));

  const likeBeer = async (id: number): Promise<void> =>
    beerDb.set(id.toString(), JSON.stringify(getById(id)));

  const getFavorites = async () => beerDb.keys();

  // helpers
  const getById = (id: number): Beer | null =>
    beers.list.find((beer) => beer.id === id);

  return {
    beers,
    currentBeer,
    fetchBeers,
    fetchBeerById,
    currenFilter,
    setFilter,
    filteredBeers,
    likeBeer,
    getFavorites,
  };
});
