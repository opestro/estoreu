<template>
  <section class="tp-product-area pt-115 pb-80">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xl-6 col-lg-6">
          <div
            class="tp-section-title-wrapper-4 mb-40 text-center text-lg-start"
          >
            <span class="tp-section-title-pre-4">Product Collection</span>
            <h3 class="tp-section-title-4">Discover our Products</h3>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="tp-product-tab-2 tp-product-tab-3 tp-tab mb-45">
            <div
              class="tp-product-tab-inner-3 d-flex align-items-center justify-content-center justify-content-lg-end"
            >
              <nav>
                <div
                  class="nav nav-tabs justify-content-center tp-product-tab tp-tab-menu p-relative"
                >
                  <template v-for="(tab, i) in tabs" :key="i">
                    <button
                      v-if="active_tab === tab"
                      ref="activeRef"
                      @click="handleActiveMarker($event, tab)"
                      :class="`nav-link ${active_tab === tab ? 'active' : ''}`"
                      id="nav_active"
                    >
                      {{ tab }}
                      <span class="tp-product-tab-tooltip">{{filteredProducts.length}}</span>
                    </button>
                    <button
                      v-else
                      @click="handleActiveMarker($event, tab)"
                      :class="`nav-link ${active_tab === tab ? 'active' : ''}`"
                    >
                      {{ tab }}
                      <span class="tp-product-tab-tooltip">{{filteredProducts.length}}</span>
                    </button>
                  </template>
                  <span
                    ref="activeMarker"
                    id="productTabMarker"
                    class="tp-tab-line d-none d-sm-inline-block"
                  ></span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="row">
            <div
              v-for="item in filteredProducts"
              :key="item.id"
              class="col-xl-3 col-lg-4 col-sm-6"
            >
              <product-jewelry-item :item="item" :style_2="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
const activeRef = ref<HTMLButtonElement | null>(null);
const activeMarker = ref<HTMLSpanElement | null>(null);
import product_data from "@/data/product-data";

let active_tab = ref("All Collection");
// tabs
const tabs = ["All Collection", "Bracelets", "Necklaces", "Earrings"];
// handleActiveMarker
const handleActiveMarker = (event: MouseEvent, tab: string) => {
  active_tab.value = tab;
  activeRef.value = event.target as HTMLButtonElement;
  const marker = document.getElementById("productTabMarker");
  if (marker && event.target) {
    marker.style.left = (event.target as HTMLButtonElement).offsetLeft + "px";
    marker.style.width = (event.target as HTMLButtonElement).offsetWidth + "px";
  }
};

const jewelry_prd = product_data.filter((p) => p.productType === "jewelry");
const allProducts = jewelry_prd;
// filteredProducts
const filteredProducts = computed(() => {
  if (active_tab.value === "All Collection") {
    return allProducts.slice(0, 8);
  } else if (active_tab.value === "Bracelets") {
    return allProducts.filter((p) => p.category.name === 'Bracelets');
  } else if (active_tab.value === "Necklaces") {
    return allProducts.filter((p) => p.category.name === 'Necklaces');
  } else if (active_tab.value === "Earrings") {
    return allProducts.filter((p) => p.category.name === 'Earrings');
  } else {
    return [];
  }
});

onMounted(() => {
  const nav_active = document.getElementById("nav_active");
  const marker = document.getElementById("productTabMarker");
  if (nav_active?.classList.contains("active") && marker) {
    marker.style.left = nav_active.offsetLeft + "px";
    marker.style.width = nav_active.offsetWidth + "px";
  }
});
</script>
