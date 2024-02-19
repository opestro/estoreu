<template>
  <header>
    <div id="header-sticky"
      :class="`tp-header-area tp-header-style-transparent-white tp-header-sticky tp-header-transparent has-dark-logo tp-header-height ${isSticky ? 'header-sticky' : ''}`">
      <div class="tp-header-bottom-3 pl-85 pr-85">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-2 col-6">
              <div class="logo">
                <nuxt-link href="/">
                  <img class="logo-light" src="/img/logo/logo-white.svg" alt="logo">
                  <img class="logo-dark" src="/img/logo/logo.svg" alt="logo">
                </nuxt-link>
              </div>
            </div>
            <div class="col-xl-8 col-lg-8 d-none d-lg-block">
              <div class="main-menu menu-style-3 menu-style-4 p-relative">
                <nav class="tp-main-menu-content">
                  <!-- menus start -->
                  <header-component-menus />
                  <!-- menus end -->
                </nav>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-6">
              <div class="tp-header-action d-flex align-items-center justify-content-end ml-50">
                <div class="tp-header-action-item d-none d-sm-block">
                  <button @click="utilityStore.handleOpenSearchBar()" type="button" class="tp-header-action-btn tp-search-open-btn">
                    <svg-search />
                  </button>
                </div>
                <div class="tp-header-action-item d-none d-sm-block">
                  <nuxt-link href="/wishlist" class="tp-header-action-btn">
                    <svg-wishlist />
                    <span class="tp-header-action-badge">{{wishlistStore.wishlists.length}}</span>
                  </nuxt-link>
                </div>
                <div class="tp-header-action-item d-none d-sm-block">
                  <button @click="cartStore.handleCartOffcanvas" type="button" class="tp-header-action-btn cartmini-open-btn">
                    <svg-cart-bag />
                    <span class="tp-header-action-badge">{{ cartStore.totalPriceQuantity.quantity }}</span>
                  </button>
                </div>
                <div class="tp-header-action-item d-lg-none">
                  <button @click="utilityStore.handleOpenMobileMenu()" type="button" class="tp-offcanvas-open-btn">
                    <svg-menu-icon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

   <!-- search bar start -->
   <header-component-search3/>
  <!-- search bar end -->

  <!-- cart offcanvas start -->
  <offcanvas-cart-sidebar/>
  <!-- cart offcanvas end -->

  <!-- cart offcanvas start -->
  <offcanvas-mobile-sidebar product-type="jewelry"/>
  <!-- cart offcanvas end -->
</template>

<script setup lang="ts">
import { useUtilityStore } from '@/pinia/useUtilityStore';
import { useCartStore } from '@/pinia/useCartStore';
import { useWishlistStore } from '@/pinia/useWishlistStore';
const {isSticky} = useSticky();
const utilityStore = useUtilityStore();
const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
</script>
