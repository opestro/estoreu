<template>
  <section class="tp-testimonial-area pt-115 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-title-wrapper-3 mb-45 text-center">
            <span class="tp-section-title-pre-3">Customers Review</span>
            <h3 class="tp-section-title-3">What our Clients say</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-testimonial-slider-3">
            <Swiper
              :slidesPerView="2"
              :spaceBetween="24"
              :pagination="{
                el: '.tp-testimoinal-slider-dot-3',
                clickable: true,
              }"
              :navigation="{
                nextEl: '.tp-testimoinal-slider-button-next-3',
                prevEl: '.tp-testimoinal-slider-button-prev-3',
              }"
              :modules="[Navigation, Pagination]"
              :breakpoints="{
                '992': {
                  slidesPerView: 2,
                },
                '576': {
                  slidesPerView: 1,
                },
                '0': {
                  slidesPerView: 1,
                },
              }"
              class="tp-testimoinal-slider-active-3 swiper-container"
            >
              <SwiperSlide
                v-for="item in testi_data"
                :key="item.id"
                class="tp-testimonial-item-3 grey-bg-7 p-relative z-index-1"
              >
                <div class="tp-testimonial-shape-3">
                  <img
                    class="tp-testimonial-shape-3-quote"
                    src="/img/testimonial/testimonial-quote.png"
                    alt="quote"
                  />
                </div>
                <div class="tp-testimonial-rating tp-testimonial-rating-3">
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                  <span><i class="fa-solid fa-star"></i></span>
                </div>
                <div class="tp-testimonial-content-3">
                  <p>
                    {{item.desc}}
                  </p>
                </div>
                <div class="tp-testimonial-user-wrapper-3 d-flex">
                  <div class="tp-testimonial-user-3 d-flex align-items-center">
                    <div class="tp-testimonial-avater-3 mr-10">
                      <img :src="item.user" alt="user" />
                    </div>
                    <div
                      class="tp-testimonial-user-3-info tp-testimonial-user-translate"
                    >
                      <h3 class="tp-testimonial-user-3-title">{{item.name}} /</h3>
                      <span class="tp-testimonial-3-designation">{{item.designation}}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div class="tp-testimoinal-slider-dot-3 tp-swiper-dot-border text-center mt-50"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

// testimonial data type
type ITestimonial = {
  id: number;
  review: number;
  desc: string;
  user: string;
  name: string;
  designation: string;
};
const testi_data: ITestimonial[] = [
  {
    id: 1,
    review: 4,
    desc: "Suscipit tellus mauris a diam maecenas. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Auctor urna nunc id cursus. Scelerisque purus semper eget duis at. Pharetra vel turpis nunc eget.",
    user: "/img/users/user-1.jpg",
    name: "Jake Weary",
    designation: "CO Founder",
  },
  {
    id: 2,
    review: 3.5,
    desc: "Suscipit tellus mauris a diam maecenas. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Auctor urna nunc id cursus. Scelerisque purus semper eget duis at. Pharetra vel turpis nunc eget.",
    user: "/img/users/user-2.jpg",
    name: "Salim Rana",
    designation: "Web Developer",
  },
  {
    id: 3,
    review: 5,
    desc: "Suscipit tellus mauris a diam maecenas. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Auctor urna nunc id cursus. Scelerisque purus semper eget duis at. Pharetra vel turpis nunc eget.",
    user: "/img/users/user-3.jpg",
    name: "Selina Gomz",
    designation: "CO Founder",
  },
];
</script>
