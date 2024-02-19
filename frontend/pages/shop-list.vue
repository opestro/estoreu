<template>
  <div>
      <!-- breadcrumb start -->
      <breadcrumb-1 title="Shop List" subtitle="Shop List" />
      <!-- breadcrumb end -->

      <!-- shop area start -->
      <shop-area :list_style="true"/>
      <!-- shop area end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Shop List Page" });
</script>
