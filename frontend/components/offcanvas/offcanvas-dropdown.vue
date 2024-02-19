<template>
  <div
    :class="`tp-filter-dropdown-wrapper tp-filter-dropdown-area ${
      store.openFilterDropdown ? 'filter-dropdown-opened' : ''
    }`"
  >
    <div class="row">
      <div class="col-lg-3">
        <!-- status -->
        <div class="tp-shop-widget mb-50">
          <h3 class="tp-shop-widget-title">Product Status</h3>
          <shop-sidebar-filter-status :filter_dropdown="true" />
        </div>
      </div>

      <div class="col-lg-3">
        <!-- categories -->
        <div class="tp-shop-widget mb-50">
          <h3 class="tp-shop-widget-title">Categories</h3>
          <shop-sidebar-filter-categories :filter_dropdown="true" />
        </div>
      </div>

      <div class="col-lg-3">
        <!-- color -->
        <div class="tp-shop-widget mb-50">
          <h3 class="tp-shop-widget-title">Filter by Price</h3>
          <shop-sidebar-price-filter :filter_dropdown="true" />
        </div>
        <shop-sidebar-reset-filter :filter_dropdown="true" />
      </div>

      <div class="col-lg-3">
        <!-- product rating -->
        <div class="tp-shop-widget mb-50">
          <h3 class="tp-shop-widget-title">Top Rated Products</h3>
          <shop-sidebar-top-product />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "@/pinia/useProductStore";
const store = useProductStore();
const route = useRoute()
watch(
  () => route.query,
  (newStatus) => {
    store.openFilterDropdown = false
  }
);
</script>
