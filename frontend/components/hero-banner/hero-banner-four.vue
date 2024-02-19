<template>
  <section class="tp-slider-area p-relative z-index-1 fix">
    <Swiper
      :slidesPerView="1"
      :spaceBetween="0"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="[FreeMode, Thumbs, EffectFade]"
      :effect="'fade'"
      class="tp-slider-active-4 khaki-bg text-start"
    >
      <SwiperSlide
        v-for="(item, i) in slider_data"
        :key="i"
        class="tp-slider-item-4 tp-slider-height-4 p-relative khaki-bg d-flex align-items-center"
      >
        <div class="tp-slider-thumb-4">
          <img :src="item.img" alt="slider-img" />
          <div class="tp-slider-thumb-4-shape">
            <span class="tp-slider-thumb-4-shape-1"></span>
            <span class="tp-slider-thumb-4-shape-2"></span>
          </div>
        </div>

        <div class="tp-slider-video-wrapper">
          <!-- video -->
          <div
            :class="`tp-slider-video transition-3 ${play ? 'full-width' : ''}`"
          >
            <video loop ref="videoRef">
              <source type="video/mp4" :src="item.videoSrc" />
            </video>
          </div>
          <!-- video button -->
          <div class="tp-slider-play">
            <button
              type="button"
              :class="`tp-slider-play-btn tp-slider-video-move-btn tp-video-toggle-btn ${play ? 'hide' : ''}`"
              @click="handleVideoPlay"
            >
              <img
                class="text-shape"
                src="/img/slider/4/shape/rounded-test.png"
                alt="shape"
              />
              <span class="play-icon">
                <svg-play-icon />
              </span>
              <span class="pause-icon">
                <svg-pause-icon />
              </span>
            </button>
          </div>
        </div>

        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-8">
              <div class="tp-slider-content-4 p-relative z-index-1">
                <span>{{ item.subtitle }}</span>
                <h3 class="tp-slider-title-4">{{ item.title }}</h3>

                <div class="tp-slider-btn-4">
                  <nuxt-link
                    href="/shop"
                    class="tp-btn tp-btn-border tp-btn-border-white"
                  >
                    Discover Now
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="tp-slider-arrow-4"></div>
    <div class="tp-slider-nav">
      <Swiper
        class="tp-slider-nav-active"
        @swiper="setThumbsSwiper"
        :spaceBetween="10"
        :slidesPerView="3"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="[FreeMode, Thumbs]"
        :direction="'vertical'"
      >
        <SwiperSlide
          v-for="(item, i) in slider_nav_data"
          :key="i"
          class="tp-slider-nav-item d-flex align-items-center mb-0"
        >
          <div class="tp-slider-nav-icon">
            <span>
              <img :src="item.icon" alt="icon" />
            </span>
          </div>
          <div class="tp-slider-nav-content">
            <h3 class="tp-slider-nav-title" v-html="item.title"></h3>
          </div>
        </SwiperSlide>
      </Swiper>
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

const play = ref(false);

// Method to handle video toggle
function handleVideoPlay() {
  const videos = document.querySelectorAll(".tp-slider-video video");
  if (play.value === false) {
    play.value = true;
    videos.forEach((video) => {
      // Type cast 'video' to HTMLVideoElement
      (video as HTMLVideoElement).play();
    });
  } else {
    play.value = false;
    videos.forEach((video) => {
      // Type cast 'video' to HTMLVideoElement
      (video as HTMLVideoElement).pause();
    });
  }
}

// slider data
const slider_data: {
  subtitle: string;
  title: string;
  img: string;
  videoSrc?: string;
}[] = [
  {
    subtitle: "The original",
    title: "Shine bright",
    img: "/img/slider/4/slider-1.png",
    videoSrc: "https://html.hixstudio.net/videos/shofy/jewellery-1.mp4",
  },
  {
    subtitle: "The original",
    title: "Creative Design",
    img: "/img/slider/4/slider-2.png",
    videoSrc: "https://html.hixstudio.net/videos/shofy/jewellery-1.mp4",
  },
  {
    subtitle: "The original",
    title: "Gold Plateted",
    img: "/img/slider/4/slider-3.png",
    videoSrc: "https://html.hixstudio.net/videos/shofy/jewellery-1.mp4",
  },
  {
    subtitle: "The original",
    title: "Unique shapes",
    img: "/img/slider/4/slider-4.png",
    videoSrc: "https://html.hixstudio.net/videos/shofy/jewellery-1.mp4",
  },
];

// slider nav data
const slider_nav_data: {
  icon: string;
  title: string;
}[] = [
  { icon: "/img/slider/4/nav/icon-1.png", title: "Ring <br />& Earring" },
  { icon: "/img/slider/4/nav/icon-2.png", title: "Bangles & <br />Bracelets" },
  { icon: "/img/slider/4/nav/icon-3.png", title: "Drop <br /> Necklaces" },
  { icon: "/img/slider/4/nav/icon-4.png", title: "Diamond <br /> Necklaces" },
];
</script>
