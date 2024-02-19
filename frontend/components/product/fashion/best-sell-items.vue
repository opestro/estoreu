<template>
  <section class="tp-seller-area pb-140">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-title-wrapper-2 mb-50">
            <span class="tp-section-title-pre-2">
              Best Seller This Week’s
              <svg-section-line-2 />
            </span>
            <h3 class="tp-section-title-2">This Week's Featured</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="item in products"
          :key="item.id"
          class="col-xl-3 col-lg-4 col-sm-6"
        >
          <product-fashion-product-item :item="item" />
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-seller-more text-center mt-10">
            <nuxt-link href="/shop" class="tp-btn tp-btn-border tp-btn-border-sm">
              Shop All Product
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import product_data from "@/data/product-data";

const products = product_data
  .filter((p) => p.productType === "fashion")
  .slice()
  .sort((a, b) => b.sellCount - a.sellCount)
  .slice(0, 4);
</script>
