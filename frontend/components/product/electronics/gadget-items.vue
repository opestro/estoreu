<template>
  <section class="tp-product-gadget-area pt-80 pb-75">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-5">
          <div class="tp-product-gadget-sidebar mb-40">
            <div class="tp-product-gadget-categories p-relative fix mb-10">
              <div class="tp-product-gadget-thumb">
                <img src="/img/product/gadget/gadget-girl.png" alt="" />
              </div>
              <h3 class="tp-product-gadget-categories-title">
                Electronics <br />
                Gadgets
              </h3>

              <div class="tp-product-gadget-categories-list">
                <ul>
                  <li><nuxt-link href="/shop">Micrscope</nuxt-link></li>
                  <li><nuxt-link href="/shop">Remote Control</nuxt-link></li>
                  <li><nuxt-link href="/shop">Monitor</nuxt-link></li>
                  <li><nuxt-link href="/shop">Thermometer</nuxt-link></li>
                  <li><nuxt-link href="/shop">Backpack</nuxt-link></li>
                  <li><nuxt-link href="/shop">Headphones</nuxt-link></li>
                </ul>
              </div>

              <div class="tp-product-gadget-btn">
                <nuxt-link href="/shop" class="tp-link-btn">
                  More Products
                  <SvgRightArrow2 />
                </nuxt-link>
              </div>
            </div>
            <div class="tp-product-gadget-banner">
              <Swiper
                :slidesPerView="1"
                :spaceBetween="0"
                :loop="true"
                :effect="'fade'"
                :pagination="{
                  el: '.tp-product-gadget-banner-slider-dot',
                  clickable: true,
                }"
                :modules="[EffectFade, Pagination]"
                class="tp-product-gadget-banner-slider-active swiper-container"
              >
                <SwiperSlide
                  v-for="(item, i) in banner_data"
                  :key="i"
                  class="tp-product-gadget-banner-item include-bg"
                  :style="`background-image:url(${item.bg})`"
                  data-background="assets/img/product/gadget/gadget-banner-1.jpg"
                >
                  <div class="tp-product-gadget-banner-content">
                    <span class="tp-product-gadget-banner-price">
                      Only ${{ item.price.toFixed(2) }}
                    </span>
                    <h3 class="tp-product-gadget-banner-title">
                      <nuxt-link href="/shop">
                        <span v-html="item.title"></span>
                      </nuxt-link>
                    </h3>
                  </div>
                </SwiperSlide>
                <div
                  class="tp-product-gadget-banner-slider-dot tp-swiper-dot"
                ></div>
              </Swiper>
            </div>
          </div>
        </div>
        <div class="col-xl-8 col-lg-7">
          <div class="tp-product-gadget-wrapper">
            <div class="row">
              <div
                v-for="item in product_data.slice(0, 6)"
                :key="item.id"
                class="col-xl-4 col-sm-6"
              >
                <ProductElectronicsItem :item="item" />
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
import { EffectFade, Pagination } from "swiper/modules";
import product_data from "@/data/product-data";

const banner_data: {
  bg: string;
  title: string;
  price: number;
}[] = [
  {
    bg: "/img/product/gadget/gadget-banner-1.jpg",
    title: "Selected novelty <br /> Products",
    price: 99,
  },
  {
    bg: "/img/product/gadget/gadget-banner-2.jpg",
    title: "Top Rated <br /> Products",
    price: 55,
  },
];
</script>
