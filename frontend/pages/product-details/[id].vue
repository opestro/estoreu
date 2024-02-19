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
import { type IProduct } from '@/types/product-type';
const route = useRoute()

const productStore = useProductStore();

let product = ref<IProduct | undefined>();
useSeoMeta({ title: "Product Details Page" });
onMounted(() => {
  product.value = product_data.find(b => b.id === route.params.id);
  if(product.value?.img){
    productStore.activeImg  = product.value.img;
  }
});
</script>
