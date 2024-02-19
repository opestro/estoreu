<template>
  <div>
      <!-- breadcrumb start -->
      <breadcrumb-1 title="Shop Full Width" subtitle="Shop Full Width" :shop_1600="true" />
      <!-- breadcrumb end -->

      <!-- shop area start -->
      <shop-area :shop_1600="true"/>
      <!-- shop area end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Shop 1600px Page" });
</script>