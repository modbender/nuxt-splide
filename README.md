<h1 align="center">
Nuxt Splide
</h1>

<p align="center">
<a href="https://npmjs.com/package/nuxt-splide"><img src="https://img.shields.io/npm/v/nuxt-splide/latest.svg?style=flat&colorA=020420&colorB=00DC82" alt="Nuxt Splide - NPM Package" /></a>
<a href="https://npmjs.com/package/nuxt-splide"><img src="https://img.shields.io/npm/dm/nuxt-splide.svg?style=flat&colorA=020420&colorB=00DC82" alt="Nuxt Splide - NPM Package Downloads" /></a>
<a href="https://npmjs.com/package/nuxt-splide"><img src="https://img.shields.io/npm/l/nuxt-splide.svg?style=flat&colorA=020420&" alt="Nuxt Splide License" /></a>
<a href="https://nuxt.com"><img src="https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js" alt="Nuxt Splide - Nuxt" /></a>
</p>

<p align="center">
Performance first slider/carousel you have always been waiting after Owl Carousel.<br/>
The Splide slider does not degrade Accessibility, Best Practices and SEO 🎉
</p>

<p align="center">
  <img src="https://github.com/Splidejs/splide/raw/master/images/lighthouse-mobile.png" alt="Nuxt Splide Performance" />
</p>

-----
- [🧪 &nbsp;Examples](https://splidejs.github.io/vue-splide/)
- [📖 &nbsp;Splide Documentation](https://splidejs.com/integration/vue-splide/)
- [🏀 Online playground](https://stackblitz.com/github/modbender/nuxt-splide?file=playground%2Fapp.vue)
- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- 🔆 &nbsp;No Lighthouse/PageSpeed Errors
- ⚡ &nbsp;Lightweight, No dependencies
- 🕶️ &nbsp;Unstyled or Styled with themes
- ⚔️ &nbsp;Compatible with modern browsers
- ➡️ &nbsp;RTL and vertical direction
- 🗼 &nbsp;Flexible and Extensible

## Quick Setup

1. Add `nuxt-splide` dependency to your project

    ```bash
    # Using pnpm
    pnpm add -D nuxt-splide

    # Using yarn
    yarn add --dev nuxt-splide

    # Using npm
    npm install --save-dev nuxt-splide
    ```

2. Add `nuxt-splide` to the `modules` section of `nuxt.config.ts`

    ```js
    export default defineNuxtConfig({
      modules: [
        'nuxt-splide'
      ]
      splide: {
        theme: 'default'
      }
    })
    ```
    | Theme     |   Description    |
    | --------- | :--------------: |
    | default   | default theme    |
    | skyblue   | light blue theme |
    | sea-green | green theme      |
    | core      | unstyled         |

3. Next add `Splide` and `SplideSlide` components to your page.

    ```xml
    <template>
      <Splide
        :options="{ perPage: 3, perMove: 1, type: 'loop' }"
        aria-labelledby="My Favorite Images"
      >
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1460176449511-ff5fc8e64c35?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sample 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1561424412-6c2125ecb1cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sample 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1507160874687-6fe86a78b22e?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sample 3"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1664478194406-4a1f2915f685?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sample 4"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1584220844836-4071bc6cc793?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sample 5"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sample 6"
          />
        </SplideSlide>
      </Splide>
    </template>

    <script setup></script>

    <style>
    img {
      width: 100%;
      aspect-ratio: 4/3;
    }
    </style>
    ```
    For all `options` check [Official Documentation](https://splidejs.com/guides/options/#options).

That's it! You can now use Nuxt Splide in your Nuxt app ✨

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm run dev:prepare

# Develop with the playground
pnpm run dev

# Build the playground
pnpm run dev:build

# Run ESLint
pnpm run lint

# Run Vitest
pnpm run test
pnpm run test:watch

# Release new version
npm run release
```
