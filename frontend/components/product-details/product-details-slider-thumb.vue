<template>
  <div class="tp-product-details-thumb-slider p-relative">
    <swiper
      v-bind="slider_setting"
      :modules="[Navigation, Pagination]"
      class="tp-product-details-thumb-slider-active swiper-container"
    >
      <swiper-slide
        v-for="(item, i) in product.imageURLs"
        :key="i"
        class="tp-prouct-details-thumb-item w-img"
        style="background-color: #f5f6f8"
      >
        <img :src="item.img" alt="product-img" style="height: 660px;object-fit: cover;" />
      </swiper-slide>
    </swiper>
    <div
      class="tp-product-details-thumb-arrow text-center mt-20 d-none d-sm-block"
    >
      <button
        type="button"
        class="tp-product-details-thumb-slider-5-button-prev"
      >
        <svg-prev-nav />
      </button>
      <button
        type="button"
        class="tp-product-details-thumb-slider-5-button-next"
      >
        <svg-next-nav />
      </button>
    </div>
    <div
      class="tp-product-details-thumb-slider-dot tp-swiper-dot text-center mt-25"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { type IProduct } from "@/types/product-type";

defineProps<{ product: IProduct }>();

// slider_setting
const slider_setting = {
  slidesPerView: 2,
  spaceBetween: 13,
  enteredSlides: false,
  pagination: {
    el: ".tp-product-details-thumb-slider-dot",
    clickable: true,
  },
  navigation: {
    nextEl: ".tp-product-details-thumb-slider-5-button-next",
    prevEl: ".tp-product-details-thumb-slider-5-button-prev",
  },
  breakpoints: {
    "1200": {
      slidesPerView: 2,
    },
    "992": {
      slidesPerView: 2,
    },
    "768": {
      slidesPerView: 2,
    },
    "576": {
      slidesPerView: 2,
    },
    "0": {
      slidesPerView: 1,
    },
  },
};
</script>
