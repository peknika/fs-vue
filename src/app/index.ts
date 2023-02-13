import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./index.vue";
import router from "@/processes/router";

export const app = createApp(App).use(router).use(createPinia());
