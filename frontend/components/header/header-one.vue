<template>
  <header>
    <div class="tp-header-area p-relative z-index-11">
      <!-- header top start  -->
      <div class="tp-header-top black-bg p-relative z-index-1 d-none d-md-block">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="tp-header-welcome d-flex align-items-center">
                <span>
                  <svg-shipping-car />
                </span>
                <p>FREE Express Shipping On Orders $570+</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="tp-header-top-right d-flex align-items-center justify-content-end">
                <header-component-top-menu />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- header main start -->
      <div class="tp-header-main tp-header-sticky">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-2 col-md-4 col-6">
              <div class="logo">
                <nuxt-link href="/">
                  <img src="/img/logo/logo.svg" alt="logo" />
                </nuxt-link>
              </div>
            </div>
            <div class="col-xl-6 col-lg-7 d-none d-lg-block">
              <!-- search form start -->
              <header-component-search />
              <!-- search form end -->
            </div>
            <div class="col-xl-4 col-lg-3 col-md-8 col-6">
              <!-- header right start -->
              <header-component-main-right />
              <!-- header right end -->
            </div>
          </div>
        </div>
      </div>

      <!-- header bottom start -->
      <div class="tp-header-bottom tp-header-bottom-border d-none d-lg-block">
        <div class="container">
          <div class="tp-mega-menu-wrapper p-relative">
            <div class="row align-items-center">
              <div class="col-xl-3 col-lg-3">
                <!-- categories start -->
                <header-component-top-categories />
                <!-- categories end -->
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="main-menu menu-style-1">
                  <nav class="tp-main-menu-content">
                    <!-- menus start -->
                    <header-component-menus />
                    <!-- menus end -->
                  </nav>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3">
                <div class="tp-header-contact d-flex align-items-center justify-content-end">
                  <div class="tp-header-contact-icon">
                    <span>
                      <svg-contact />
                    </span>
                  </div>
                  <div class="tp-header-contact-content">
                    <h5>Hotline:</h5>
                    <p><a href="tel:402-763-282-46">+(402) 763 282 46</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- header sticky start -->
    <div id="header-sticky-2" :class="`tp-header-sticky-area ${isSticky ? 'header-sticky-2' : ''}`">
      <div class="container">
        <div class="tp-mega-menu-wrapper p-relative">
          <div class="row align-items-center">
            <div class="col-xl-3 col-lg-3 col-md-3 col-6">
              <div class="logo">
                <nuxt-link href="/">
                  <img src="/img/logo/logo.svg" alt="logo">
                </nuxt-link>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 d-none d-lg-block">
              <div class="tp-header-sticky-menu main-menu menu-style-1">
                <nav id="mobile-menu">
                  <!-- menus start -->
                  <header-component-menus />
                  <!-- menus end -->
                </nav>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-6">
              <div class="tp-header-action d-flex align-items-center justify-content-end ml-50">
                <div class="tp-header-action-item d-none d-lg-block">
                  <nuxt-link href="/compare" class="tp-header-action-btn">
                    <svg-compare />
                  </nuxt-link>
                </div>
                <div class="tp-header-action-item d-none d-lg-block">
                  <nuxt-link href="/wishlist" class="tp-header-action-btn">
                    <svg-wishlist />
                    <span class="tp-header-action-badge">{{wishlistStore.wishlists.length}}</span>
                  </nuxt-link>
                </div>
                <div class="tp-header-action-item">
                  <button @click="cartStore.handleCartOffcanvas" type="button" class="tp-header-action-btn cartmini-open-btn">
                    <svg-cart-bag />
                    <span class="tp-header-action-badge">{{ cartStore.totalPriceQuantity.quantity }}</span>
                  </button>
                </div>
                <div class="tp-header-action-item d-lg-none">
                  <button @click="utilsStore.handleOpenMobileMenu()" type="button" class="tp-header-action-btn tp-offcanvas-open-btn">
                    <svg-menu-icon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- header sticky end -->
  </header>
  <!-- cart offcanvas start -->
  <offcanvas-cart-sidebar/>
  <!-- cart offcanvas end -->

  <!-- cart offcanvas start -->
  <offcanvas-mobile-sidebar product-type="electronics"/>
  <!-- cart offcanvas end -->
</template>

<script setup lang="ts">
import { useCartStore } from '@/pinia/useCartStore';
import { useWishlistStore } from '@/pinia/useWishlistStore';
import { useUtilityStore} from '@/pinia/useUtilityStore';

const {isSticky} = useSticky();
const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const utilsStore = useUtilityStore();
</script>
