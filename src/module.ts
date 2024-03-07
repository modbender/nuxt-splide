import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addImports,
} from "@nuxt/kit";

import { defu } from "defu";

import type { ModuleOptions } from "./types";

import { name, version } from "../package.json";

const importList = ["Splide", "SplideTrack", "SplideSlide"];
const cssList = {
  default: "@splidejs/vue-splide/css",
  skyblue: "@splidejs/vue-splide/css/skyblue",
  "sea-green": "@splidejs/vue-splide/css/sea-green",
  core: "@splidejs/vue-splide/css/core",
};

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "splide",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    theme: "default",
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    nuxt.options.runtimeConfig.splide = defu(
      nuxt.options.runtimeConfig.splide as Object,
      options
    );

    nuxt.options.runtimeConfig.public.splide = defu(
      nuxt.options.runtimeConfig.public.splide as Object,
      options
    );

    const themeCSS = cssList[options.theme ?? "default"];

    importList.map((importName) => {
      addImports({
        name: importName,
        from: "@splidejs/vue-splide",
      });
    });

    nuxt.options.css = [...(nuxt.options.css || []), themeCSS];

    nuxt.options.build.transpile = [
      ...(nuxt.options.build?.transpile || []),
      "@splidejs/vue-splide",
    ];

    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
