<template>
  <section class="tp-special-area fix">
    <div class="container">
      <div class="row gx-2">
        <div class="col-xl-5 col-md-6">
          <div class="tp-special-slider-thumb">
            <div class="tp-special-thumb">
              <img
                src="/img/product/special/big/special-big-1.jpg"
                alt="special-big-img"
              />
              <div class="tp-special-hotspot-item tp-special-hotspot-1">
                <span class="tp-hotspot tp-pulse-border">
                  <svg-plus />
                </span>
                <div class="tp-special-hotspot-content">
                  <h3 class="tp-special-hotspot-title">Skincare Product</h3>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
              <div class="tp-special-hotspot-item tp-special-hotspot-2">
                <span class="tp-hotspot tp-pulse-border">
                  <svg-plus />
                </span>
                <div class="tp-special-hotspot-content">
                  <h3 class="tp-special-hotspot-title">Skincare Product</h3>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-7 col-md-6">
          <div class="tp-special-wrapper grey-bg-9 pt-85 pb-35">
            <div class="tp-section-title-wrapper-3 mb-40 text-center">
              <span class="tp-section-title-pre-3">Trending This Week’s</span>
              <h3 class="tp-section-title-3">Special products</h3>
            </div>
            <div class="tp-special-slider">
              <div class="row gx-0 justify-content-center">
                <div class="col-xl-5 col-lg-7 col-md-9 col-sm-7">
                  <div class="tp-special-slider-inner p-relative">
                    <Swiper
                      :slidesPerView="1"
                      :spaceBetween="0"
                      :effect="'fade'"
                      :pagination="{
                        el: '.tp-special-slider-dot',
                        clickable: true,
                      }"
                      :modules="[Pagination, Navigation, EffectFade]"
                      :navigation="{
                        nextEl: '.tp-special-slider-button-next',
                        prevEl: '.tp-special-slider-button-prev',
                      }"
                      class="tp-special-slider-active swiper-container"
                    >
                      <SwiperSlide
                        v-for="item in products"
                        :key="item.id"
                        class="tp-special-item swiper-slide grey-bg-9"
                      >
                        <product-beauty-item :item="item" :isCenter="true" />
                      </SwiperSlide>
                    </Swiper>
                    <!-- dot style -->
                    <div
                      class="tp-swiper-dot tp-special-slider-dot d-sm-none text-center"
                    ></div>
                    <div class="tp-special-arrow d-none d-sm-block">
                      <button class="tp-special-slider-button-prev">
                        <svg-prev-arrow />
                      </button>
                      <button class="tp-special-slider-button-next">
                        <svg-next-arrow />
                      </button>
                    </div>
                  </div>
                </div>
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
import { EffectFade, Pagination, Navigation } from "swiper/modules";
import product_data from "@/data/product-data";

const products = product_data
  .filter((p) => p.productType === "beauty")
  .slice(-4);
</script>
