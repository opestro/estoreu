<template>
  <div style="color: red">
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
defineProps<{ msg: string | undefined}>();
</script>
