<template>
  <section class="tp-featured-slider-area grey-bg-6 fix pt-95 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-title-wrapper-2 mb-50">
            <span class="tp-section-title-pre-2">
              Shop by Category
              <svg-section-line-2 />
            </span>
            <h3 class="tp-section-title-2">This Week's Featured</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-featured-slider">
            <Swiper
              :slidesPerView="3"
              :spaceBetween="10"
              :navigation="{
                nextEl: '.tp-featured-slider-button-next',
                prevEl: '.tp-featured-slider-button-prev',
              }"
              :modules="[Navigation]"
              :breakpoints="{
                '1200': {
                  slidesPerView: 3,
                },
                '992': {
                  slidesPerView: 3,
                },
                '768': {
                  slidesPerView: 2,
                },
                '576': {
                  slidesPerView: 1,
                },
                '0': {
                  slidesPerView: 1,
                },
              }"
              class="tp-featured-slider-active swiper-container"
            >
              <SwiperSlide
                v-for="item in fashion_prd"
                :key="item.id"
                class="tp-featured-item white-bg p-relative z-index-1"
              >
                <div
                  class="tp-featured-thumb include-bg"
                  :style="`background-image:url(${item.img})`"
                ></div>
                <div class="tp-featured-content">
                  <h3 class="tp-featured-title">
                    <nuxt-link :href="`/product-details/${item.id}`">{{ item.title }}</nuxt-link>
                  </h3>
                  <div class="tp-featured-price-wrapper">
                    <div v-if="item.discount > 0">
                      <span class="tp-featured-price old-price">${{ item.price }}</span>
                      <span class="tp-featured-price new-price">
                        ${{
                          (
                            Number(item.price) -
                            (Number(item.price) * Number(item.discount)) / 100
                          ).toFixed(2)
                        }}
                      </span>
                    </div>
                    <span v-else class="tp-featured-price new-price"
                      >${{ item.price.toFixed(2) }}</span
                    >
                  </div>
                  <div class="tp-product-rating-icon tp-product-rating-icon-2">
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                  </div>
                  <div class="tp-featured-btn">
                    <nuxt-link :href="`/product-details/${item.id}`"
                      class="tp-btn tp-btn-border tp-btn-border-sm"
                    >
                      Shop Now <svg-right-arrow />
                    </nuxt-link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div class="tp-featured-slider-arrow mt-45">
              <button class="tp-featured-slider-button-prev">
                <svg-slider-btn-prev />
              </button>
              <button class="tp-featured-slider-button-next">
                <svg-slider-btn-next />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import product_data from "@/data/product-data";

const fashion_prd = product_data
  .filter((p) => p.productType === "fashion")
  .filter((p) => p.featured);
</script>
