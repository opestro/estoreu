<template>
  <section class="tp-trending-area pt-140 pb-150">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-6">
          <div class="tp-trending-wrapper">
            <div class="tp-section-title-wrapper-2 mb-50">
              <span class="tp-section-title-pre-2">
                More to Discover
                <svg-section-line-2 />
              </span>
              <h3 class="tp-section-title-2">Trending Arrivals</h3>
            </div>
            <div class="tp-trending-slider">
              <Swiper
                :slidesPerView="2"
                :spaceBetween="24"
                :modules="[Pagination]"
                :pagination="{
                  el: '.tp-trending-slider-dot',
                  clickable: true,
                }"
                :breakpoints="{
                  '1200': {
                    slidesPerView: 2,
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
                class="tp-trending-slider-active swiper-container"
              >
                <SwiperSlide
                  v-for="item in product_items"
                  :key="item.id"
                  class="tp-trending-item swiper-slide"
                >
                  <product-fashion-product-item :item="item" :spacing="false" />
                </SwiperSlide>
              </Swiper>
              <div
                class="tp-trending-slider-dot tp-swiper-dot text-center mt-45"
              ></div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-5 col-md-8 col-sm-10">
          <div class="tp-trending-banner p-relative ml-35">
            <div
              class="tp-trending-banner-thumb w-img include-bg"
              style="background-image: url(/img/product/trending/banner/trending-banner.jpg)"
            ></div>
            <div class="tp-trending-banner-content">
              <h3 class="tp-trending-banner-title">
                <nuxt-link href="/shop">
                  Short Sleeve Tunic <br />Tops Casual Swing
                </nuxt-link>
              </h3>
              <div class="tp-trending-banner-btn">
                <nuxt-link href="/shop"
                  class="tp-btn tp-btn-border tp-btn-border-white tp-btn-border-white-sm"
                >
                  Explore More
                  <svg-right-arrow />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import product_data from "@/data/product-data";

const product_items = product_data.filter(p => p.productType === 'fashion').slice(-4);
</script>
