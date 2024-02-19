<template>
  <section class="tp-collection-area pt-120">
    <div class="container">
      <div class="row gx-2 gy-2 gy-md-0">
        <div class="col-xl-7 col-md-6">
          <div
            class="tp-collection-item tp-collection-height grey-bg p-relative z-index-1 fix"
          >
            <div
              class="tp-collection-thumb include-bg include-bg transition-3"
              style="
                background-image: url(/img/product/collection/collection-1.jpg);
              "
            ></div>
            <div class="tp-collection-content">
              <span>Cosmetics Collection</span>
              <h3 class="tp-collection-title">
                <nuxt-link href="/shop">Foundation and <br />
                  powder brush
                </nuxt-link>
              </h3>
              <div class="tp-collection-btn">
                <nuxt-link href="/shop" class="tp-btn">
                  Discover Now
                  <svg-sm-arrow />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-md-6">
          <div
            class="tp-collection-item tp-collection-height grey-bg p-relative z-index-1 fix"
          >
            <div
              class="tp-collection-thumb has-overlay include-bg transition-3"
              style="
                background-image: url(/img/product/collection/collection-2.jpg);
              "
            ></div>
            <div class="tp-collection-content-1">
              <h3 class="tp-collection-title-1">
                <nuxt-link href="/shop">
                  Tops <br />
                  Blouse Shirts
                </nuxt-link>
              </h3>
              <div class="tp-collection-btn-1">
                <nuxt-link href="/shop" class="tp-link-btn-line">Shop Collection</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-3 col-lg-4 col-md-5">
          <div class="tp-collection-offer-wrapper mt-20">
            <p>
              Discover our Beauty Selection <span>75% Extra Discount</span> for
              your...
            </p>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-5">
          <div
            class="tp-collection-countdown d-flex align-items-center justify-content-center justify-content-md-start ml-20 mt-20"
          >
            <div
              class="tp-product-countdown"
            >
              <div class="tp-product-countdown-inner">
                <ul>
                  <li><span>{{ timer.days }}</span> Days</li>
                  <li><span>{{ timer.hours }}</span> Hrs</li>
                  <li><span>{{ timer.minutes }}</span> Min</li>
                </ul>
              </div>
            </div>
            <div
              class="tp-product-countdown has-second"
            >
              <div class="tp-product-countdown-inner">
                <ul>
                  <li><span>{{ timer.seconds }}</span> Sec</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTimer,type UseTimer } from "vue-timer-hook";

let timer: UseTimer;
const endTime = new Date('2024 20:20:22');
const endTimeMs = endTime.getTime();
timer = useTimer(endTimeMs);
</script>
