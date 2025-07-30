export type SplideThemes = 'default' | 'skyblue' | 'sea-green' | 'core'

export interface ModuleOptions {
  /**
   * Language highlighting theme
   *
   * @default 'default'
   */
  theme: SplideThemes
}

declare module 'nuxt-splide' {
  interface NuxtConfig {
    splide?: ModuleOptions
  }

  interface NuxtOptions {
    splide?: ModuleOptions
  }
}
