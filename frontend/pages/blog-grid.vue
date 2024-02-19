<template>
  <div>
    <!-- breadcrumb start -->
    <breadcrumb-3
      title="Blog Standard"
      subtitle="Insight and advice <br /> From our Expert team."
    />
    <!-- breadcrumb end -->

    <!-- blog grid area start -->
    <blog-grid-area />
    <!-- blog grid area end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Blog Grid Page" });
</script>
