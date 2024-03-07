import { defineNuxtPlugin } from "#app";

// @ts-ignore
import VueSplide from "@splidejs/vue-splide";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSplide);
});
