<template>
  <tr>
    <!-- img -->
    <td class="tp-cart-img">
      <nuxt-link :href="`/product-details/${item.id}`" style="background-color: #F2F3F5;display: block;">
        <img :src="item.img" alt=""/>
      </nuxt-link>
    </td>
    <!-- title -->
    <td class="tp-cart-title">
      <nuxt-link :href="`/product-details/${item.id}`">{{item.title}}</nuxt-link>
    </td>
    <!-- price -->
    <td class="tp-cart-price"><span>${{item.price.toFixed(2)}}</span></td>
    <!-- quantity -->
    <td class="tp-cart-quantity">
      <div class="tp-product-quantity mt-10 mb-10">
        <span class="tp-cart-minus" @click="cartStore.quantityDecrement(item)">
          <svg-minus />
        </span>
        <input class="tp-cart-input" type="text" :value="item.orderQuantity" :v-model="item.orderQuantity"
        />
        <span class="tp-cart-plus" @click="cartStore.addCartProduct(item)">
          <svg-plus-sm />
        </span>
      </div>
    </td>
    <!-- action -->
    <td class="tp-cart-action">
      <button class="tp-cart-action-btn" @click="cartStore.removeCartProduct(item)">
        <svg-remove />
        <span>Remove</span>
      </button>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { useCartStore } from "@/pinia/useCartStore";
import { type IProduct } from '@/types/product-type';
const cartStore = useCartStore();

const props = defineProps<{item:IProduct}>()
</script>
