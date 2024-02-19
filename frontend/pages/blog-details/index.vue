<template>
  <div>
    <!-- blog details area start -->
    <blog-details-area :blog="blogData[4]" />
    <!-- blog details area end -->
  </div>
</template>

<script setup lang="ts">
import blogData from '@/data/blog-data';
useSeoMeta({ title: "Blog Details Page" });
</script>
