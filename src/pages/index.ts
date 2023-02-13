import Routing from "./index.vue";

export const routes = [{ path: "/", component: () => import("./beers-list") }];

export { Routing };
