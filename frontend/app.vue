<template>
  <NuxtLayout>
    <NuxtPage />
    <modal-product/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useProductFilterStore } from './pinia/useProductFilterStore';
import { useUtilityStore } from './pinia/useUtilityStore';

const route = useRoute();
const prdFilterStore = useProductFilterStore();
const utilsStore = useUtilityStore();

watch(() => route.path, () => {
  prdFilterStore.$reset
  prdFilterStore.handleResetFilter();
  utilsStore.removeBackdrop();
})
</script>
