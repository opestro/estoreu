<template>
  <div id="video-overlay" class="video-overlay" @click="utilsStore.closeVideo">
    <a class="video-overlay-close" @click.prevent="utilsStore.closeVideo">×</a>
  </div>
</template>

<script setup lang="ts">
import {useUtilityStore} from '@/pinia/useUtilityStore';
const utilsStore = useUtilityStore();


// Remove the iframe on component unmount
onBeforeUnmount(() => {
 utilsStore.closeVideo();
});
</script>
