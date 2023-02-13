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

// export const use = defineStore(NAMESPACE, {
//     beers: () => ({
//         /** @type {Beer[]} */
//         beers: [] as Beer[],
//         /** @type {ABV.all | ABV.Light | ABV.Strong} */
//         filter: 'all',
//         loading: true,
//         /** @type {any} */
//         error: null
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
//             this.loading = true
//             try {
//               this.list = await punkApi.list.getBeersList()
//               .then((response) => response.data)
//             } catch (error) {
//               this.error = error as any
//             } finally {
//               this.loading = false
//             }
//           },
//       }
// });

interface BeersState {
  list: Beer[];
  loading: boolean;
  filter: ABV;
}
export const useBeers = defineStore(NAMESPACE, () => {
  const beers: BeersState = reactive({
    list: [],
    loading: true,
    filter: ABV.All,
  });

  // getters
  const light = computed(
    () => beers.list.filter((b) => b.abv < MEDIUM_ABV) as Beer[]
  );
  const strong = computed(
    () => beers.list.filter((b) => b.abv > MEDIUM_ABV) as Beer[]
  );

  // actions
  const fetchBeers = async (): Promise<Beer[]> => {
    const result = await punkApi.beers.getBeersList();
    beers.loading = false;
    return (beers.list = result.data);
  };

  // toRef. toRefs
  return {
    beers,
    fetchBeers,
    light,
    strong,
  };
});
