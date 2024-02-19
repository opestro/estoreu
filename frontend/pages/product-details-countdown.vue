<template>
  <div v-if="product">
      <!-- breadcrumb start -->
      <product-details-breadcrumb :product="product" />
      <!-- breadcrumb end -->

      <!-- product details area start -->
      <product-details-area :product="product" />
      <!-- product details area end -->

      <!-- related products start -->
      <product-related :product-id="product.id" :category="product.category.name" />
      <!-- related products end -->
  </div>
</template>

<script setup lang="ts">
import product_data from '@/data/product-data';
import { useProductStore } from '@/pinia/useProductStore';
useSeoMeta({ title: "Product Details With Countdown Page" });

const product = product_data.find(p => p.offerDate);
const productStore = useProductStore();
onMounted(() => {
  if(product){
    productStore.activeImg  = product.img;
  }
})
</script>
