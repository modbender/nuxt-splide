import { defineNuxtPlugin } from "#app";

import VueSplide from "@splidejs/vue-splide";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSplide);
});
