<template>
  <Splide
    :options="{ perPage: 3, perMove: 1, type: 'loop' }"
    aria-labelledby="My Favorite Images"
  >
    <SplideSlide>
      <img
        src="https://images.unsplash.com/photo-1460176449511-ff5fc8e64c35?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sample 1"
      >
    </SplideSlide>
    <SplideSlide>
      <img
        src="https://images.unsplash.com/photo-1561424412-6c2125ecb1cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sample 2"
      >
    </SplideSlide>
    <SplideSlide>
      <img
        src="https://images.unsplash.com/photo-1507160874687-6fe86a78b22e?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sample 3"
      >
    </SplideSlide>
    <SplideSlide>
      <img
        src="https://plus.unsplash.com/premium_photo-1664478194406-4a1f2915f685?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sample 4"
      >
    </SplideSlide>
    <SplideSlide>
      <img
        src="https://images.unsplash.com/photo-1584220844836-4071bc6cc793?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sample 5"
      >
    </SplideSlide>
    <SplideSlide>
      <img
        src="https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sample 6"
      >
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
