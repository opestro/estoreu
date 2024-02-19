<template>
  <div class="tp-product-details-thumb-gallery">
    <div class="row">
      <div class="col-lg-6"  v-for="(item, i) in product.imageURLs" :key="i">
        <div class="tp-product-details-thumb-gallery-item mb-25" style="background-color: #f5f6f8">
          <img
            :src="item.img"
            alt="product-img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IProduct } from "@/types/product-type";

defineProps<{ product: IProduct }>();
</script>
