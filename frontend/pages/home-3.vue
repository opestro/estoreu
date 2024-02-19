<template>
  <div>
    <nuxt-layout name="layout-three">

      <!-- hero banner start -->
      <hero-banner-three />
      <!-- hero banner end -->

      <!-- category area start -->
      <categories-beauty/>
      <!-- category area end -->

      <!-- featured area start -->
      <feature-three/>
      <!-- featured area end -->

      <!-- product area start -->
      <product-beauty-area/>
      <!-- product area end -->

      <!-- collection area start -->
      <collection-beauty/>
      <!-- collection area end -->

      <!-- product best collection start -->
      <product-beauty-best-collection/>
      <!-- product best collection end -->

      <!-- special product area start -->
      <product-beauty-special-items/>
      <!-- special product area end -->

      <!-- testimonial area start -->
      <testimonial-beauty/>
      <!-- testimonial area end -->

      <!-- feature area start -->
      <feature-two/>
      <!-- feature area end -->

      <!-- instagram area start -->
      <instagram-area-3/>
      <!-- instagram area end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
useSeoMeta({ title: "Home Three" });
</script>

