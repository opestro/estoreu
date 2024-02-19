<template>
  <div>
    <template v-if="cartStore.totalPriceQuantity.total < freeShippingThreshold">
      <p>{{ `Add $${remainingAmount.toFixed(2)} more to qualify for free shipping` }}</p>
    </template>
    <template v-else>
      <p>You are eligible for free shipping</p>
    </template>

    <div class="progress">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        :data-width="`${progress}%`"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="`width:${progress}%`"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/pinia/useCartStore';
const cartStore = useCartStore()
const freeShippingThreshold = ref<number>(200);
const progress = computed(() => (cartStore.totalPriceQuantity.total / freeShippingThreshold.value) * 100);
const remainingAmount = computed(() => freeShippingThreshold.value - cartStore.totalPriceQuantity.total);
</script>
