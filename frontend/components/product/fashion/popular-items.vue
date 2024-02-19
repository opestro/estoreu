<template>
  <section class="tp-category-area pb-95 pt-95">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-title-wrapper-2 text-center mb-50">
            <span class="tp-section-title-pre-2">
              Shop by Category
              <svg-section-line-2/>
            </span>
            <h3 class="tp-section-title-2">Popular on the Shofy store.</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-category-slider-2 position-relative">
            <swiper
              :slidesPerView="5"
              :spaceBetween="20"
              :scrollbar="{ draggable: true}"
              :modules="[Scrollbar]"
              :breakpoints="{
                1200: {
                  slidesPerView: 5,
                },
                992: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 3,
                },
                576: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              }"
              class="tp-category-slider-active-2 swiper-container pb-50"
            >
              <swiper-slide
                v-for="item in popular_prd"
                :key="item.id"
                class="tp-category-item-2 p-relative z-index-1 text-center"
              >
                <div class="tp-category-thumb-2" style="background-color: #f2f3f5;">
                  <a href="#">
                    <img :src="item.img" alt="product-img" style="width: 100%;height: 100%" />
                  </a>
                </div>
                <div class="tp-category-content-2">
                  <span>From ${{item.price.toFixed(2)}}</span>
                  <h3 class="tp-category-title-2">
                    <nuxt-link :href="`/product-details/${item.id}`">{{item.title}}</nuxt-link>
                  </h3>
                  <div class="tp-category-btn-2">
                    <button
                      v-if="!cartStore.cart_products.some((prd) => prd.id === item.id)"
                      @click="cartStore.addCartProduct(item)"
                      type="button"
                      :class="`tp-btn tp-btn-border ${ cartStore.cart_products.some((prd) => prd.id === item.id)? 'active': ''}`">
                      Add to Cart
                    </button>
                    <nuxt-link
                      v-if="cartStore.cart_products.some((prd) => prd.id === item.id)"
                      href="/cart"
                      :class="`tp-btn tp-btn-border ${cartStore.cart_products.some((prd) => prd.id === item.id) ? 'active': ''}`"
                    >
                      View Cart
                    </nuxt-link>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <div
              class="swiper-scrollbar-el tp-swiper-scrollbar tp-swiper-scrollbar-drag d-none"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Scrollbar } from "swiper/modules";
import product_data from "@/data/product-data";
import { useCartStore } from "@/pinia/useCartStore";

const cartStore = useCartStore();

const popular_prd = product_data
  .filter((p) => p.productType === "fashion")
  .slice(0, 8);
</script>
