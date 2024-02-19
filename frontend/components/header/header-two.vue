<template>
  <header>
    <div :class="`tp-header-area tp-header-style-${style_2 ? 'primary' : 'darkRed'} tp-header-height`">
      <!-- header top start  -->
      <div class="tp-header-top-2 p-relative z-index-11 tp-header-top-border d-none d-md-block">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="tp-header-info d-flex align-items-center">
                <div class="tp-header-info-item">
                  <a href="#">
                    <span>
                      <svg-facebook />
                    </span> 7500k Followers
                  </a>
                </div>
                <div class="tp-header-info-item">
                  <a href="tel:402-763-282-46">
                    <span>
                      <svg-phone />
                    </span> +(402) 763 282 46
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="tp-header-top-right tp-header-top-black d-flex align-items-center justify-content-end">
                <!-- header top menu start -->
                <header-component-top-menu />
                <!-- header top menu end -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- header bottom start -->
      <div id="header-sticky" :class="`tp-header-bottom-2 tp-header-sticky ${isSticky ? 'header-sticky' : ''}`">
        <div class="container">
          <div class="tp-mega-menu-wrapper p-relative">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-5 col-md-5 col-sm-4 col-6">
                <div class="logo">
                  <nuxt-link href="/">
                    <img src="/img/logo/logo.svg" alt="logo">
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xl-5 d-none d-xl-block">
                <div class="main-menu menu-style-2">
                  <nav class="tp-main-menu-content">
                    <!-- menus start -->
                    <header-component-menus />
                    <!-- menus end -->
                  </nav>
                </div>
              </div>
              <div class="col-xl-5 col-lg-7 col-md-7 col-sm-8 col-6">
                <div class="tp-header-bottom-right d-flex align-items-center justify-content-end pl-30">
                  <div class="tp-header-search-2 d-none d-sm-block">
                    <form @submit.prevent="handleSubmit">
                      <input type="text" placeholder="Search for Products..." v-model="searchText">
                      <button type="submit">
                        <svg-search />
                      </button>
                    </form>
                  </div>
                  <div class="tp-header-action d-flex align-items-center ml-30">
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
                      <button @click="cartStore.handleCartOffcanvas" class="tp-header-action-btn cartmini-open-btn">
                        <svg-cart-bag />
                        <span class="tp-header-action-badge">{{ cartStore.totalPriceQuantity.quantity }}</span>
                      </button>
                    </div>
                    <div class="tp-header-action-item tp-header-hamburger mr-20 d-xl-none">
                      <button @click="utilsStore.handleOpenMobileMenu()" type="button" class="tp-offcanvas-open-btn">
                        <svg-menu-icon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

   <!-- cart offcanvas start -->
   <offcanvas-cart-sidebar/>
   <!-- cart offcanvas end -->

  <!-- cart offcanvas start -->
  <offcanvas-mobile-sidebar product-type="fashion"/>
  <!-- cart offcanvas end -->
</template>

<script setup lang="ts">
const router = useRouter();
const {isSticky} = useSticky();
import { useCartStore } from '@/pinia/useCartStore';
import { useWishlistStore } from '@/pinia/useWishlistStore';
import { useUtilityStore } from '@/pinia/useUtilityStore';

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const utilsStore = useUtilityStore();

defineProps<{style_2?:boolean}>()

let searchText = ref<string>('');

// handleSubmit
const handleSubmit = () => {
  if(!searchText.value){
    return
  }
  else {
    router.push(`/search?searchText=${searchText.value}`)
  }
}
</script>
