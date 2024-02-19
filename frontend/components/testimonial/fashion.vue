<template>
  <section class="tp-testimonial-area grey-bg-7 pt-130 pb-135">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12">
          <div class="tp-testimonial-slider p-relative z-index-1">
            <div class="tp-testimonial-shape">
              <span class="tp-testimonial-shape-gradient"></span>
            </div>
            <h3 class="tp-testimonial-section-title text-center">
              The Review Are In
            </h3>
            <div class="row justify-content-center">
              <div class="col-xl-8 col-lg-8 col-md-10">
                <Swiper
                  :slidesPerView="1"
                  :spaceBetween="0"
                  :pagination="{
                    el: '.tp-testimonial-slider-dot',
                    clickable: true,
                  }"
                  :modules="[Navigation]"
                  :navigation="{
                    nextEl: '.tp-testimonial-slider-button-next',
                    prevEl: '.tp-testimonial-slider-button-prev',
                  }"
                  class="tp-testimonial-slider-active swiper-container"
                >
                  <SwiperSlide
                    v-for="item in testi_data"
                    :key="item.id"
                    class="tp-testimonial-item text-center mb-20"
                  >
                    <div class="tp-testimonial-rating">
                      <span><i class="fa-solid fa-star"></i></span>
                      <span><i class="fa-solid fa-star"></i></span>
                      <span><i class="fa-solid fa-star"></i></span>
                      <span><i class="fa-solid fa-star"></i></span>
                      <span><i class="fa-solid fa-star"></i></span>
                    </div>
                    <div class="tp-testimonial-content">
                      <p>{{ item.desc }}</p>
                    </div>
                    <div
                      class="tp-testimonial-user-wrapper d-flex align-items-center justify-content-center"
                    >
                      <div
                        class="tp-testimonial-user d-flex align-items-center"
                      >
                        <div class="tp-testimonial-avater mr-10">
                          <img :src="item.user" alt="user" />
                        </div>
                        <div
                          class="tp-testimonial-user-info tp-testimonial-user-translate"
                        >
                          <h3 class="tp-testimonial-user-title">
                            {{ item.name }}
                          </h3>
                          <span class="tp-testimonial-designation">
                            {{item.designation}}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div class="tp-testimonial-arrow d-none d-md-block">
              <button class="tp-testimonial-slider-button-prev">
                <svg-left-arrow />
              </button>
              <button class="tp-testimonial-slider-button-next">
                <svg-right-arrow />
              </button>
            </div>
            <div
              class="tp-testimonial-slider-dot tp-swiper-dot text-center mt-30 tp-swiper-dot-style-darkRed d-md-none"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

// data type
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
    desc: "“ How you use the city or town name is up to you. All results may be freely used in any work.”",
    user: "/img/users/user-2.jpg",
    name: "Theodore Handle",
    designation: "CO Founder",
  },
  {
    id: 2,
    review: 5,
    desc: "“Very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!”",
    user: "/img/users/user-3.jpg",
    name: "John Smith",
    designation: "UI/UX Designer",
  },
  {
    id: 3,
    review: 3,
    desc: "“Thanks for all your efforts and teamwork over the last several months!  Thank you so much”",
    user: "/img/users/user-4.jpg",
    name: "Salim Rana",
    designation: "Web Developer",
  },
];
</script>
