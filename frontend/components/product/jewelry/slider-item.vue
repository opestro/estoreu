<template>
  <div class="tp-category-item-4 p-relative z-index-1 text-center">
    <div
      class="tp-category-thumb-4 include-bg"
      :style="`background-image:url(${item.img});background-color:#fff;background-position: 0px -80px;`"
    ></div>
    <!-- product action -->
    <div
      class="tp-product-action-3 tp-product-action-4 tp-product-action-blackStyle tp-product-action-brownStyle"
    >
      <div class="tp-product-action-item-3 d-flex flex-column">

        <button
            v-if="!isItemInCart(item)"
            @click="cartStore.addCartProduct(item)"
            type="button"
            :class="`tp-product-action-btn-3 tp-product-add-cart-btn ${
              isItemInCart(item) ? 'active' : ''
            }`"
          >
            <svg-cart-bag />
            <span class="tp-product-tooltip">Add to Cart</span>
         </button>
          <nuxt-link
            v-if="isItemInCart(item)"
            @click="cartStore.addCartProduct(item)"
            href="/cart"
            :class="`tp-product-action-btn-3 tp-product-add-cart-btn ${isItemInCart(item)? 'active': ''}`"
          >
            <svg-cart-bag />
            <span class="tp-product-tooltip">View Cart</span>
          </nuxt-link>

        <button
          type="button"
          class="tp-product-action-btn-3 tp-product-quick-view-btn"
          data-bs-toggle="modal"
          :data-bs-target="`#${utilityStore.modalId}`"
          @click="utilityStore.handleOpenModal(`product-modal-${item.id}`,item)"
        >
          <svg-quick-view />
          <span class="tp-product-tooltip">Quick View</span>
        </button>
        
        <button
          @click="wishlistStore.add_wishlist_product(item)"
          type="button"
          :class="`tp-product-action-btn-3 tp-product-add-to-wishlist-btn ${wishlistStore.wishlists.some((prd) => prd.id === item.id)? 'active': ''}`"
        >
          <svg-wishlist />
          <span class="tp-product-tooltip">
            {{isItemInWishlist(item) ? 'Remove From Wishlist' : 'Add To Wishlist'}}
          </span>
        </button>
      </div>
    </div>
    <div class="tp-category-content-4">
      <h3 class="tp-category-title-4">
        <nuxt-link :href="`/product-details/${item.id}`">{{item.title}}</nuxt-link>
      </h3>
      <div class="tp-category-price-wrapper-4">
        <span v-if="item.discount > 0" class="tp-category-price-4">
          ${{(Number(item.price) - (Number(item.price) * Number(item.discount)) / 100).toFixed(2)}}
        </span>
        <span v-else class="tp-category-price-4">
          ${{item.price.toFixed(2)}}
        </span>
        <div class="tp-category-add-to-cart">
          <button v-if="!isItemInCart(item)" @click="cartStore.addCartProduct(item)" class="tp-category-add-to-cart-4">
            <svg-add-cart-2 />
            Add to Cart
          </button>
          <nuxt-link href="/cart" v-if="isItemInCart(item)" class="tp-category-add-to-cart-4">
            <svg-add-cart-2 />
            View cart
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/pinia/useCartStore";
import { useWishlistStore } from "@/pinia/useWishlistStore";
import { useUtilityStore } from "@/pinia/useUtilityStore";

import { type IProduct } from "@/types/product-type";

defineProps<{ item: IProduct }>();

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const utilityStore = useUtilityStore();

function isItemInWishlist(product: IProduct) {
  return wishlistStore.wishlists.some((prd) => prd.id === product.id);
}
function isItemInCart(product: IProduct) {
  return cartStore.cart_products.some((prd) => prd.id === product.id);
}
</script>
