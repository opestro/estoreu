<template>
  <section
    class="tp-category-area pt-115 pb-105 tp-category-plr-85"
    style="background-color: #EFF1F5;"
  >
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-title-wrapper-4 mb-60 text-center">
            <span class="tp-section-title-pre-4">Shop by Category</span>
            <h3 class="tp-section-title-4">Popular on the Shofy store.</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-category-slider-4">
            <Swiper
              :slidesPerView="5"
              :spaceBetween="25"
              :pagination="{
                el: '.tp-category-slider-dot-4',
                clickable: true,
              }"
              :scrollbar="{
                el: '.tp-category-swiper-scrollbar',
                draggable: true,
                dragClass: 'tp-swiper-scrollbar-drag',
                snapOnRelease: true,
              }"
              :modules="[Scrollbar]"
              :breakpoints="{
                '1400': {
                  slidesPerView: 5,
                },
                '1200': {
                  slidesPerView: 4,
                },
                '992': {
                  slidesPerView: 3,
                },
                '768': {
                  slidesPerView: 2,
                },
                '576': {
                  slidesPerView: 2,
                },
                '0': {
                  slidesPerView: 1,
                },
              }"
              class="tp-category-slider-active-4 swiper-container mb-70"
            >
              <SwiperSlide
                v-for="(item, i) in jewelryPopularItem"
                :key="i"
              >
                <product-jewelry-slider-item :item="item" />
              </SwiperSlide>
            </Swiper>
            <div class="tp-category-swiper-scrollbar tp-swiper-scrollbar"></div>
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

const jewelryPopularItem = product_data
  .filter((p) => p.productType === "jewelry")
  .slice(0, 6);
</script>
