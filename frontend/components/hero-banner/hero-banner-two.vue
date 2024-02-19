<template>
  <section class="tp-slider-area p-relative z-index-1">
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="false"
      :navigation="{
        nextEl: '.tp-slider-2-button-next',
        prevEl: '.tp-slider-2-button-prev',
      }"
      :pagination="{
        el: '.tp-slider-2-dot',
        clickable: true,
      }"
      :effect="'fade'"
      :modules="[Navigation, Pagination, EffectFade]"
      class="tp-slider-active-2 swiper-container"
    >
      <swiper-slide
        v-for="(item) in slider_data"
        :key="item.id"
        class="tp-slider-item-2 tp-slider-height-2 p-relative grey-bg-5 d-flex align-items-end"
      >
        <div class="tp-slider-2-shape">
          <img
            class="tp-slider-2-shape-1"
            src="/img/slider/2/shape/shape-1.png"
            alt="shape"
          />
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="tp-slider-content-2">
                <span>{{item.subtitle}}</span>
                <h3 class="tp-slider-title-2">{{item.title}}</h3>
                <div class="tp-slider-btn-2">
                  <nuxt-link href="/shop" class="tp-btn tp-btn-border">Shop Collection</nuxt-link>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="tp-slider-thumb-2-wrapper p-relative">
                <div class="tp-slider-thumb-2-shape">
                  <img
                    class="tp-slider-thumb-2-shape-1"
                    src="/img/slider/2/shape/shape-2.png"
                    alt="shape"
                  />
                  <img
                    class="tp-slider-thumb-2-shape-2"
                    src="/img/slider/2/shape/shape-3.png"
                    alt="shape"
                  />
                </div>
                <div class="tp-slider-thumb-2 text-end">
                  <span class="tp-slider-thumb-2-gradient"></span>
                  <img :src="item.img" alt="main-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="tp-swiper-dot tp-slider-2-dot"></div>
    </swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, EffectFade } from "swiper/modules";

// slider data type
type ISliderData = {
  id: number;
  subtitle: string;
  title: string;
  img: string;
};
const slider_data: ISliderData[] = [
  {
    id: 1,
    subtitle: "New Arrivals 2023",
    title: "The Clothing Collection",
    img: "/img/slider/2/slider-1.png",
  },
  {
    id: 2,
    subtitle: "Best Selling 2023",
    title: "The Summer Collection",
    img: "/img/slider/2/slider-2.png",
  },
  {
    id: 3,
    subtitle: "Winter Has Arrived",
    title: "Amazing New designs",
    img: "/img/slider/2/slider-3.png",
  },
];
</script>
