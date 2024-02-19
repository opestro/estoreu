<template>
  <div class="tp-product-details-review-rating-item d-flex align-items-center">
    <span>{{ star }} Star</span>
    <div class="tp-product-details-review-rating-bar">
      <span
        class="tp-product-details-review-rating-bar-inner"
        :data-width="`${width}%`"
        :style="`width: ${width}%;`"
      ></span>
    </div>
    <div class="tp-product-details-review-rating-percent">
      <span>{{width}}%</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{star:number,width:string}>()
</script>
