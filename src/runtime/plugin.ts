import { defineNuxtPlugin } from '#app'

// @ts-expect-error: VueSplide type definition issue
import VueSplide from '@splidejs/vue-splide'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSplide)
})
