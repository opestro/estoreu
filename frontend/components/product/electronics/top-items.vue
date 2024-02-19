<template>
  <section class="tp-product-area pb-55">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xl-5 col-lg-6 col-md-5">
          <div class="tp-section-title-wrapper mb-40">
            <h3 class="tp-section-title">Trending Products
              <SvgSectionLine />
            </h3>
          </div>
        </div>
        <div class="col-xl-7 col-lg-6 col-md-7">
          <div class="tp-product-tab tp-product-tab-border mb-45 tp-tab d-flex justify-content-md-end">
            <ul class="nav nav-tabs justify-content-sm-end" id="productTab">
              <li v-for="(tab, i) in tabs" :key="i" class="nav-item">
                <button @click="handleActiveTab(tab)" :class="`nav-link ${active_tab === tab ? 'active' : ''}`">{{ tab }}
                  <span class="tp-product-tab-line">
                    <SvgActiveLine />
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-product-tab-content">
            <div class="row">
              <div v-for="(item,i) in filteredProducts" :key="i" class="col-xl-3 col-lg-3 col-sm-6">
                <ProductElectronicsItem :item="item" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted,computed } from 'vue';
import product_data from '@/data/product-data';

let active_tab = ref('New')

const tabs = ["New", "Featured", "Top Sellers"];
// handleActiveTab
const handleActiveTab = (tab: string) => {
  active_tab.value = tab;
};

const electronic_prd = product_data.filter(p => p.productType === 'electronics')
const allProducts = electronic_prd;

const filteredProducts = computed(() => {
  if (active_tab.value === 'New') {
    return allProducts.slice(0,8);
  } else if (active_tab.value === 'Featured') {
    return allProducts.filter((product) => product.featured);
  } else if (active_tab.value === 'Top Sellers') {
    return allProducts.slice().sort((a, b) => (b.sellCount ?? 0) - (a.sellCount ?? 0)).slice(0,8);
  } else {
    return [];
  }
});
onMounted(() => {})
</script>
