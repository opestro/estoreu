<template>
  <div>
    <!-- breadcrumb start -->
    <breadcrumb-3
      title="Blog Standard"
      subtitle="Insight and advice <br /> From our Expert team."
    />
    <!-- breadcrumb end -->

    <!-- blog grid area start -->
    <blog-grid-area :list_style="true" />
    <!-- blog grid area end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Blog List Page" });
</script>
