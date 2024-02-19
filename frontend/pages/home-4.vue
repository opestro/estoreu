<template>
  <div>
    <nuxt-layout name="layout-four">

      <!-- hero banner start -->
      <hero-banner-four />
      <!-- hero banner end -->

      <!-- feature area start -->
      <feature-four/>
      <!-- feature area end -->

      <!-- banner area start -->
      <banner-jewelry/>
      <!-- banner area end -->

      <!-- about area start -->
      <about-jewelry/>
      <!-- about area end -->
      
      <!-- popular product start -->
      <product-jewelry-popular-items/>
      <!-- popular product end -->

      <!-- product items start -->
      <product-jewelry-items/>
      <!-- product items end -->

      <!-- collection area start -->
      <collection-jewelry/>
      <!-- collection area end -->

      <!-- top sells items start -->
      <product-jewelry-top-sells/>
      <!-- top sells items end -->

      <!-- brand area start -->
      <brand-jewelry/>
      <!-- brand area end -->

      <!-- instagram area start -->
      <instagram-area-4/>
      <!-- instagram area end -->

    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
useSeoMeta({ title: "Home Four" });
</script>

