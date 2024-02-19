<template>
  <section class="tp-history-area pt-140 pb-140" style="background-color: #f8f8f8">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-history-slider mb-50">
            <Swiper
              :slidesPerView="1"
              :spaceBetween="0"
              :thumbs="{ swiper: thumbsSwiper }"
              :modules="[FreeMode, Thumbs, EffectFade]"
              :effect="'fade'"
              class="tp-history-slider-active swiper-container"
            >
              <SwiperSlide
                v-for="(item, i) in slider_data"
                :key="i"
                class="tp-thistory-item"
                style="background-color: #f8f8f8"
              >
                <div class="row">
                  <div class="col-xl-5 col-lg-6 col-md-6">
                    <div class="tp-history-wrapper pr-45">
                      <div class="tp-history-content mb-40">
                        <h3 class="tp-history-title" v-html="item.title"></h3>
                        <p>
                          {{item.subtitle_1}}
                        </p>
                        <p>
                          {{ item.subtitle_2 }}
                        </p>
                      </div>
                      <div class="tp-history-year">
                        <p>{{item.year}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-7 col-lg-6 col-md-6">
                    <div class="tp-history-thumb-wrapper ml-150 p-relative">
                      <div class="tp-history-thumb-text">
                        <p v-html="item.thumb_text"></p>
                      </div>
                      <div class="tp-history-thumb m-img">
                        <img :src="item.img" alt="thumb_img" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div class="tp-history-nav">
        <div class="row">
          <div class="col-xl-12">
            <Swiper
              class="tp-history-nav-active swiper-container"
              @swiper="setThumbsSwiper"
              :spaceBetween="220"
              :slidesPerView="4"
              :freeMode="true"
              :watchSlidesProgress="true"
              :modules="[FreeMode, Thumbs]"
            >
              <SwiperSlide
                v-for="(num, i) in slider_nav_data"
                :key="i"
                class="tp-history-nav-year text-center"
              >
                <p>{{ num }}</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Thumbs, EffectFade } from "swiper/modules";

let thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};

// slider data
const slider_data: {
  subtitle_1: string;
  subtitle_2: string;
  title: string;
  img: string;
  thumb_text: string;
  year: number;
}[] = [
  {
    title: "About our <br> Online Store",
    subtitle_1:
      "At our eCommerce site, we are passionate about providing our customers with the best possible shopping experience. From our extensive product selection to our exceptional customer service, we are committed to exceeding your expectations.",
    subtitle_2:
      "So start browsing today and find the perfect products to suit your needs!",
    img: "/img/history/history-1.jpg",
    thumb_text: "Welcome to our <br> Shofy eCommerce Theme",
    year: 2016,
  },
  {
    title: "About our <br> Online Store",
    subtitle_1:
      "At our eCommerce site, we are passionate about providing our customers with the best possible shopping experience. From our extensive product selection to our exceptional customer service, we are committed to exceeding your expectations.",
    subtitle_2:
      "So start browsing today and find the perfect products to suit your needs!",
    img: "/img/history/history-2.jpg",
    thumb_text: "Welcome to our <br> Shofy eCommerce Theme",
    year: 2017,
  },
  {
    title: "About our <br> Online Store",
    subtitle_1:
      "At our eCommerce site, we are passionate about providing our customers with the best possible shopping experience. From our extensive product selection to our exceptional customer service, we are committed to exceeding your expectations.",
    subtitle_2:
      "So start browsing today and find the perfect products to suit your needs!",
    img: "/img/history/history-1.jpg",
    thumb_text: "Welcome to our <br> Shofy eCommerce Theme",
    year: 2018,
  },
  {
    title: "About our <br> Online Store",
    subtitle_1:
      "At our eCommerce site, we are passionate about providing our customers with the best possible shopping experience. From our extensive product selection to our exceptional customer service, we are committed to exceeding your expectations.",
    subtitle_2:
      "So start browsing today and find the perfect products to suit your needs!",
    img: "/img/history/history-2.jpg",
    thumb_text: "Welcome to our <br> Shofy eCommerce Theme",
    year: 2019,
  },
];

// slider nav data
const slider_nav_data: number[] = [2016, 2017, 2018, 2019];
</script>
