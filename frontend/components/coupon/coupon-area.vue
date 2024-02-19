<template>
  <!-- breadcrumb area start -->
  <section class="breadcrumb__area include-bg pt-95 pb-50">
    <div class="container">
        <div class="row">
          <div class="col-xxl-12">
              <div class="breadcrumb__content p-relative z-index-1">
                <h3 class="breadcrumb__title">Grab Best Offer</h3>
                <div class="breadcrumb__list">
                    <span><nuxt-link href="/">Home</nuxt-link></span>
                    <span>Coupon</span>
                </div>
              </div>
          </div>
        </div>
    </div>
  </section>
  <!-- breadcrumb area end -->

  <!-- coupon area start -->
  <div class="tp-coupon-area pb-120">
    <div class="container">
        <div class="row">
          <div v-for="item in coupon_data" :key="item.id" class="col-xl-6">
              <coupon-item :coupon="item" />
          </div>
        </div>
    </div>
  </div>
  <!-- coupon area end -->
</template>

<script setup lang="ts">
import coupon_data from '@/data/coupon-data';
</script>
