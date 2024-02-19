<template>
  <div class="tp-product-details-thumb-list">
    <div
      v-for="(item, i) in product.imageURLs"
      :key="i"
      class="tp-product-details-thumb-list-item mb-25 d-flex align-items-center justify-content-center"
      style="background-color: #f5f6f8"
    >
      <img :src="item.img" alt="product-img" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IProduct } from "@/types/product-type";

defineProps<{ product: IProduct }>();
</script>
