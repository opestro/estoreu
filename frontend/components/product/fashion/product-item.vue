<template>
  <div :class="`tp-product-item-2 ${spacing ? 'mb-40' : ''}`">
    <div
      class="tp-product-thumb-2 p-relative z-index-1 fix w-img"
      style="background-color: #f2f3f5"
    >
      <nuxt-link :href="`/product-details/${item.id}`">
        <img :src="item.img" alt="product-img" />
      </nuxt-link>

      <!-- product badge -->
      <div class="tp-product-badge">
        <span v-if="item.status === 'out-of-stock'" class="product-hot">out-of-stock</span>
      </div>

      <!-- product action -->
      <div class="tp-product-action-2 tp-product-action-blackStyle">
        <div class="tp-product-action-item-2 d-flex flex-column">
          <button
            v-if="!isItemInCart(item)"
            @click="cartStore.addCartProduct(item)"
            type="button"
            :class="`tp-product-action-btn-2 tp-product-add-cart-btn ${isItemInCart(item)? 'active': ''}`"
          >
            <svg-add-cart />
            <span class="tp-product-tooltip tp-product-tooltip-right">Add to Cart</span>
          </button>
          <nuxt-link
            v-if="isItemInCart(item)"
            href="/cart"
            :class="`tp-product-action-btn-2 tp-product-add-cart-btn ${isItemInCart(item)? 'active': ''}`"
          >
            <svg-add-cart />
            <span class="tp-product-tooltip tp-product-tooltip-right">View Cart</span>
          </nuxt-link>

          <button
            type="button"
            class="tp-product-action-btn-2 tp-product-quick-view-btn"
            data-bs-toggle="modal"
            :data-bs-target="`#${utilityStore.modalId}`"
            @click="utilityStore.handleOpenModal(`product-modal-${item.id}`,item)"
          >
            <svg-quick-view />
            <span class="tp-product-tooltip tp-product-tooltip-right">Quick View</span>
          </button>

          <button
            @click="wishlistStore.add_wishlist_product(item)"
            type="button"
            :class="`tp-product-action-btn-2 tp-product-add-to-wishlist-btn ${isItemInWishlist(item)? 'active': ''}`"
          >
            <svg-wishlist />
            <span class="tp-product-tooltip tp-product-tooltip-right">
              {{ isItemInWishlist(item) ? 'Remove From Wishlist' : 'Add To Wishlist' }}
            </span>
          </button>

          <button
            @click="compareStore.add_compare_product(item)"
            type="button"
            :class="`tp-product-action-btn-2 tp-product-add-to-compare-btn ${isItemInCompare(item) ? 'active': ''}`"
          >
            <svg-compare-2 />
            <span class="tp-product-tooltip tp-product-tooltip-right">
              {{ isItemInCompare(item) ? 'Remove From Compare' : 'Add To Compare' }}
            </span>
          </button>
        </div>
      </div>
    </div>
    <div class="tp-product-content-2 pt-15">
      <div class="tp-product-tag-2">
        <a href="#">{{ item.category.name }}</a>
      </div>
      <h3 class="tp-product-title-2">
        <nuxt-link :href="`/product-details/${item.id}`">{{ item.title }}</nuxt-link>
      </h3>
      <div class="tp-product-rating-icon tp-product-rating-icon-2">
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
      </div>
      <div class="tp-product-price-wrapper-2">
        <div v-if="item.discount > 0">
          <span class="tp-product-price-2 new-price">
            ${{( Number(item.price) -(Number(item.price) * Number(item.discount)) / 100).toFixed(2)}}
          </span>
          <span class="tp-product-price-2 old-price">
            ${{ item.price }}
          </span>
        </div>
        <span v-else class="tp-product-price-2 new-price">${{ item.price.toFixed(2) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IProduct } from "@/types/product-type";
import { useCompareStore } from "@/pinia/useCompareStore";
import { useCartStore } from "@/pinia/useCartStore";
import { useUtilityStore } from "@/pinia/useUtilityStore";
import { useWishlistStore } from "@/pinia/useWishlistStore";

const compareStore = useCompareStore();
const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const utilityStore = useUtilityStore();

function isItemInWishlist(product: IProduct) {
  return wishlistStore.wishlists.some((prd) => prd.id === product.id);
}
function isItemInCompare(product: IProduct) {
  return compareStore.compare_items.some((prd) => prd.id === product.id);
}
function isItemInCart(product: IProduct) {
  return cartStore.cart_products.some((prd) => prd.id === product.id);
}

const props = withDefaults(
  defineProps<{ item: IProduct; spacing?: boolean }>(),
  {
    spacing: true,
  }
);
</script>
