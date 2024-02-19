<template>
    <article class="tp-postbox-item format-image mb-50 transition-3">
    <div v-if="!item.blockquote && !item.video && !item.audio && !item.slider">
      <div class="tp-postbox-thumb w-img">
        <nuxt-link :to="`/blog-details/${item.id}`">
          <img :src="item.img" alt="blog img" />
        </nuxt-link>
      </div>
    </div>
    <div v-if="item.video && item.video_id" class="tp-postbox-thumb tp-postbox-video w-img p-relative">
      <nuxt-link :to="`/blog-details/${item.id}`">
        <img :src="item.img" alt="blog img" />
      </nuxt-link>
      <a @click="utilsStore.playVideo(item.video_id)" class="cursor-pointer tp-postbox-video-btn popup-video">
        <i class="fas fa-play"></i>
      </a>
    </div>
    <div v-if="item.audio" class="tp-postbox-thumb tp-postbox-audio w-img p-relative">
      <iframe allow="autoplay" :src="item.audio_id"></iframe>
    </div>
    <div v-if="item.slider" class="tp-postbox-thumb tp-postbox-slider swiper-container w-img p-relative">
      <swiper v-bind="slider_setting" :modules="[Navigation, Autoplay]" class="tp-postbox-slider swiper-container w-img p-relative">
        <swiper-slide v-for="(img, i) in item.slider_images" :key="i" class="tp-postbox-slider-item">
          <img :src="img" alt="slider img" />
        </swiper-slide>
        <div class="tp-postbox-nav">
          <button class="tp-postbox-slider-button-next">
            <i class="fal fa-arrow-right"></i>
          </button>
          <button class="tp-postbox-slider-button-prev">
            <i class="fal fa-arrow-left"></i>
          </button>
        </div>
      </swiper>
    </div>
    <div v-if="!item.blockquote" class="tp-postbox-content">
      <div class="tp-postbox-meta">
        <span>
          <i class="far fa-calendar-check"></i> {{ item.date }}
        </span>
        <span>
          <a href="#">
            <i class="far fa-user"></i> {{ item.author }}
          </a>
        </span>
        <span>
          <a href="#">
            <i class="fal fa-comments"></i> {{ item.comments }} Comments
          </a>
        </span>
      </div>
      <h3 class="tp-postbox-title">
        <nuxt-link :to="`/blog-details/${item.id}`">{{ item.title }}</nuxt-link>
      </h3>
      <div class="tp-postbox-text">
        <p>
          {{ item.desc }} […]
        </p>
      </div>
      <div class="tp-postbox-read-more">
        <nuxt-link :to="`/blog-details/${item.id}`" class="tp-btn">Read More</nuxt-link>
      </div>
    </div>
    <div v-if="item.blockquote" class="tp-postbox-quote">
      <blockquote>
        <p>{{ item.title }}<cite>{{ item.author }}</cite></p>
      </blockquote>
    </div>
  </article>


</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import { type IBlogType } from "@/types/blog-type";
import {useUtilityStore} from '@/pinia/useUtilityStore';

const utilsStore = useUtilityStore();

defineProps<{ item: IBlogType }>();
// slider setting 
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".tp-postbox-slider-button-next",
    prevEl: ".tp-postbox-slider-button-prev",
  }
}
</script>
