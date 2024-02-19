<template>
  <section class="tp-best-area pt-115">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-title-wrapper-4 mb-50 text-center">
            <span class="tp-section-title-pre-4">Best Seller This Week’s</span>
            <h3 class="tp-section-title-4">Top Sellers In Dress for You</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-best-slider">
            <Swiper
              :slidesPerView="4"
              :spaceBetween="24"
              :scrollbar="{
                el: '.tp-best-swiper-scrollbar',
                draggable: true,
                dragClass: 'tp-swiper-scrollbar-drag',
                snapOnRelease: true,
              }"
              :modules="[Scrollbar]"
              :breakpoints="{
                '1200': {
                  slidesPerView: 4,
                },
                '992': {
                  slidesPerView: 4,
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
              class="tp-best-slider-active swiper-container mb-10"
            >
              <SwiperSlide
                v-for="(item, i) in jewelryTopSellsItems"
                :key="i"
                class="tp-best-item-4"
              >
                <product-jewelry-item :item="item" />
              </SwiperSlide>
            </Swiper>

            <div class="tp-best-swiper-scrollbar tp-swiper-scrollbar"></div>
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

const jewelryTopSellsItems = product_data
  .filter((p) => p.productType === "jewelry")
  .slice()
  .sort((a, b) => b.sellCount - a.sellCount)
  .slice(0, 6);
</script>
