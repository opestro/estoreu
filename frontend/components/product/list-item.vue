<template>
  <div class="tp-product-list-item d-md-flex">
    <div class="tp-product-list-thumb p-relative fix">
      <nuxt-link :href="`/product-details/${item.id}`" style="height: 310px;background-color: #f2f3f5;">
        <img :src="item.img" alt="product-img" />
      </nuxt-link>

      <!-- product action -->
      <div class="tp-product-action-2 tp-product-action-blackStyle">
        <div class="tp-product-action-item-2 d-flex flex-column">
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
            :class="`tp-product-action-btn-2 tp-product-add-to-wishlist-btn ${wishlistStore.wishlists.some((prd) => prd.id === item.id) ? 'active': ''}`"
          >
            <svg-wishlist />
            <span class="tp-product-tooltip tp-product-tooltip-right">
              {{isItemInWishlist(item) ? 'Remove From Wishlist' : 'Add To Wishlist'}}
            </span>
          </button>

          <button
            @click="compareStore.add_compare_product(item)"
            type="button"
            :class="`tp-product-action-btn-2 tp-product-add-to-compare-btn ${compareStore.compare_items.some((prd) => prd.id === item.id) ? 'active': ''}`"
          >
            <svg-compare-2 />
            <span class="tp-product-tooltip tp-product-tooltip-right">
              {{ isItemInCompare(item) ? 'Remove From Compare' : 'Add To Compare' }}
            </span>
          </button>
        </div>
      </div>
    </div>
    <div class="tp-product-list-content">
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
            <span class="tp-product-price-2 new-price">${{(Number(item.price) - (Number(item.price) * Number(item.discount)) / 100).toFixed(2)}} {{ " " }}</span>
            <span class="tp-product-price-2 old-price">
              ${{ item.price }}
            </span>
          </div>
          <span v-else class="tp-product-price-2 new-price">${{ item.price.toFixed(2) }}</span>
        </div>

        <p>{{ item.description.slice(0, 100) }}</p>
        <div class="tp-product-list-add-to-cart">
          <button v-if="!isItemInCart(item)" @click="cartStore.addCartProduct(item)" class="tp-product-list-add-to-cart-btn">Add To Cart</button>
          <nuxt-link to="/cart" v-if="isItemInCart(item)" class="tp-product-list-add-to-cart-btn">
            View Cart
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IProduct } from "@/types/product-type";
import { useUtilityStore } from "@/pinia/useUtilityStore";
import { useCompareStore } from "@/pinia/useCompareStore";
import { useCartStore } from "@/pinia/useCartStore";
import { useWishlistStore } from "@/pinia/useWishlistStore";

defineProps<{ item: IProduct }>();

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
</script>
