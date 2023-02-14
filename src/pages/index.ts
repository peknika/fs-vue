import Routing from "./index.vue";

export const routes = [
  { path: "/", component: () => import("./beers-list") },
  { path: "/beer/:id", component: () => import("./beer-details") },
];

export { Routing };
