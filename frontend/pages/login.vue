<template>
  <div>
      <!-- breadcrumb start -->
      <breadcrumb-4 title="My account" subtitle="My account" :center="true" />
      <!-- breadcrumb end -->

      <!-- login area start -->
      <login-area/>
      <!-- login area end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Login Page" });
</script>
