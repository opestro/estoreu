<template>
  <div>
    <header-two :style_2="true" />
    <main>
      <slot />
    </main>
    <footer-one :primary_style="true" />
    <back-to-top />
    <!-- <modal-product /> -->
  </div>
</template>

<script setup lang="ts"></script>
