<template>
  <div>
    <nuxt-layout name="layout-two">
      <!-- hero banner start -->
      <hero-banner-two />
      <!-- hero banner end -->

      <!-- category area start -->
      <categories-fashion/>
      <!-- category area end -->

      <!-- popular product items start -->
      <product-fashion-popular-items/>
      <!-- popular product items end -->

      <!-- all products start -->
      <product-fashion-all-products/>
      <!-- all products end -->

      <!-- featured products start -->
      <product-fashion-featured-items/>
      <!-- featured products end -->

      <!-- trending products start -->
      <product-fashion-trending-products/>
      <!-- trending products end -->

      <!-- best-sell products start -->
      <product-fashion-best-sell-items/>
      <!-- best-sell products end -->

      <!-- testimonial start -->
      <testimonial-fashion/>
      <!-- testimonial end -->

      <!-- blog start -->
      <blog-fashion-items/>
      <!-- blog end -->

      <!-- feature area start -->
      <feature-two/>
      <!-- feature area end -->

      <!-- instagram area start -->
      <instagram-area-2/>
      <!-- instagram area end -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
useSeoMeta({ title: "Home two" });
</script>
