<template>
  <div>
      <!-- breadcrumb start -->
      <breadcrumb-1 title="Shop Right Sidebar" subtitle="Shop Right Sidebar" />
      <!-- breadcrumb end -->

      <!-- shop area start -->
      <shop-area :shop_right_side="true" />
      <!-- shop area end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Shop Right Sidebar Page" });
</script>