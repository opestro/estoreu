<template>
  <section class="tp-product-area pb-90">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-title-wrapper-2 text-center mb-35">
            <span class="tp-section-title-pre-2">
              All Product Shop
              <svg-section-line-2 />
            </span>
            <h3 class="tp-section-title-2">Customer Favorite Style Product</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-product-tab-2 tp-tab mb-50 text-center">
            <nav>
              <div
                class="nav nav-tabs justify-content-center"
                id="nav-tab"
                role="tablist"
              >
                <button
                  v-for="(tab, i) in tabs"
                  :key="i"
                  :class="`nav-link ${activeTab === tab ? 'active' : ''}`"
                  @click="handleActiveTab(tab)"
                >
                  {{ tab }}
                  <span class="tp-product-tab-tooltip">{{
                    tab === "All Collection"
                      ? allProducts.length
                      : allProducts.filter(
                          (p) =>
                            p.category.name.toLowerCase() === tab.toLowerCase()
                        ).length
                  }}</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="row">
            <div
              v-for="item in filteredProducts"
              :key="item.id"
              class="col-xl-3 col-lg-4 col-md-6 col-sm-6"
            >
              <product-fashion-product-item :item="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import product_data from "@/data/product-data";
import { ref, computed } from "vue";
// tabs
const tabs: string[] = ["All Collection", "Shoes", "Clothing", "Bags"];
const activeTab = ref<string>(tabs[0]);
const fashion_prd = product_data.filter((p) => p.productType === "fashion");
const allProducts = fashion_prd;
// handleActiveTab
const handleActiveTab = (tab: string) => {
  activeTab.value = tab;
};
const filteredProducts = computed(() => {
  if (activeTab.value === "All Collection") {
    return allProducts;
  } else if (activeTab.value === "Shoes") {
    return allProducts.filter((p) => p.category.name === "Shoes");
  } else if (activeTab.value === "Clothing") {
    return allProducts.filter((p) => p.category.name === "Clothing");
  } else if (activeTab.value === "Bags") {
    return allProducts.filter((p) => p.category.name === "Bags");
  } else {
    return allProducts;
  }
});
</script>
