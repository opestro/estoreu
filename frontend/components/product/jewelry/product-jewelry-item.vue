<template>
  <div class="tp-product-item-4 p-relative mb-40">
    <div class="tp-product-thumb-4 w-img fix" style="background-color: #f6f6f6">
      <nuxt-link :href="`/product-details/${item.id}`">
        <img :src="item.img" alt="product-img" />
      </nuxt-link>
      <!-- product action -->
      <div
        class="tp-product-action-3 tp-product-action-4 has-shadow tp-product-action-blackStyle tp-product-action-brownStyle"
      >
        <div class="tp-product-action-item-3 d-flex flex-column">
          <button
            v-if="!isItemInCart(item)"
            @click="cartStore.addCartProduct(item)"
            type="button"
            :class="`tp-product-action-btn-3 tp-product-add-cart-btn ${isItemInCart(item)? 'active': ''}`"
          >
            <svg-cart-bag />
            <span class="tp-product-tooltip">Add to Cart</span>
          </button>
          <nuxt-link
            v-if="isItemInCart(item)"
            @click="cartStore.addCartProduct(item)"
            href="/cart"
            :class="`tp-product-action-btn-3 d-inline-block tp-product-add-cart-btn ${isItemInCart(item)? 'active': ''}`"
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
    </div>
    <div class="tp-product-content-4">
      <h3 class="tp-product-title-4">
        <nuxt-link :href="`/product-details/${item.id}`">{{ item.title }}</nuxt-link>
      </h3>
      <div class="tp-product-info-4">
        <p>{{ item.category.name }}</p>
      </div>

      <div class="tp-product-price-inner-4">
        <div class="tp-product-price-wrapper-4">
          <span class="tp-product-price-4">${{ item.price.toFixed(2) }}</span>
        </div>
        <div class="tp-product-price-add-to-cart">
          <button
           v-if="!isItemInCart(item)"
            @click="cartStore.addCartProduct(item)"
            class="tp-product-add-to-cart-4"
          >
            <svg-add-cart-2 />
            Add to Cart
          </button>
          <nuxt-link v-if="isItemInCart(item)" class="tp-product-add-to-cart-4" href="/cart">
            <svg-add-cart-2 />
            View Cart
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

const props = defineProps<{ item: IProduct }>();

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
