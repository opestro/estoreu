<template>
  <section class="tp-product-sm-area">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-md-6">
          <div class="tp-product-sm-list mb-50">
            <div class="tp-section-title-wrapper mb-40">
              <h3 class="tp-section-title tp-section-title-sm">
                Discount Products
                <SvgSectionLineSm />
              </h3>
            </div>

            <div class="tp-product-sm-wrapper mr-20">
              <ProductElectronicsSmItem
                v-for="item in discount_products"
                :key="item.id"
                :item="item"
              />
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6">
          <div class="tp-product-sm-list mb-50">
            <div class="tp-section-title-wrapper mb-40">
              <h3 class="tp-section-title tp-section-title-sm">
                Featured Products
                <SvgSectionLineSm />
              </h3>
            </div>

            <div class="tp-product-sm-wrapper mr-20">
              <ProductElectronicsSmItem
                v-for="item in featured_products"
                :key="item.id"
                :item="item"
              />
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6">
          <div class="tp-product-sm-list mb-50">
            <div class="tp-section-title-wrapper mb-40">
              <h3 class="tp-section-title tp-section-title-sm">
                Selling Products
                <SvgSectionLineSm />
              </h3>
            </div>

            <div class="tp-product-sm-wrapper mr-20">
              <ProductElectronicsSmItem
                v-for="item in selling_products"
                :key="item.id"
                :item="item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import product_data from "@/data/product-data";

const all_products = product_data;
const discount_products = all_products
  .filter((p) => p.productType === "electronics" && p.discount > 0)
  .slice(0, 3);
const featured_products = all_products
  .filter((p) => p.productType === "electronics" && p.featured)
  .slice(0, 3);
const selling_products = all_products
  .filter((p) => p.productType === "electronics")
  .slice()
  .sort((a, b) => b.sellCount - a.sellCount)
  .slice(0, 3);
</script>
