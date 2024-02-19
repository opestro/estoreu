<template>
  <section class="tp-related-product pt-95 pb-120">
    <div class="container">
      <div class="row">
        <div class="tp-section-title-wrapper-6 text-center mb-40">
          <span class="tp-section-title-pre-6">Next day Products</span>
          <h3 class="tp-section-title-6">Related Products</h3>
        </div>
      </div>
      <div class="row">
        <div class="tp-product-related-slider">
          <swiper
            v-bind="slider_setting"
            :modules="[Scrollbar]"
            class="tp-product-related-slider-active swiper-container mb-10"
          >
            <swiper-slide v-for="(item, i) in related_products" :key="i">
              <product-beauty-item :item="item" :primary_style="true" :style_2="true" />
            </swiper-slide>
          </swiper>
          <div class="tp-related-swiper-scrollbar tp-swiper-scrollbar"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Scrollbar } from "swiper/modules";
import product_data from "@/data/product-data";
// props
const props = defineProps<{ productId: string; category: string }>();
// related_products
const related_products = product_data.filter(
  (p) =>
    p.category.name.toLowerCase() === props.category.toLowerCase() &&
    p.id !== props.productId
);
// slider_setting
const slider_setting = {
  slidesPerView: 4,
  spaceBetween: 24,
  enteredSlides: false,
  scrollbar: {
    el: ".tp-related-swiper-scrollbar",
    draggable: true,
    dragClass: "tp-swiper-scrollbar-drag",
    snapOnRelease: true,
  },
  breakpoints: {
    "1200": {
      slidesPerView: 4,
    },
    "992": {
      slidesPerView: 3,
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
