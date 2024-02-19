<template>
  <div>
      <!-- breadcrumb start -->
      <breadcrumb-4 title="Forgot Password" subtitle="Reset Password" :center="true" />
      <!-- breadcrumb end -->

      <!-- forgot area start -->
      <forgot-area/>
      <!-- forgot area end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Forgot Page" });
</script>
