<template>
  <div>
    <!-- breadcrumb start -->
    <breadcrumb-1 title="Search Products" subtitle="Search Products" />
    <!-- breadcrumb end -->

    <!-- shop area start -->
    <section class="tp-shop-area pb-120">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12">
            <div class="tp-shop-main-wrapper">
              <div class="tp-shop-top mb-45">
                <div class="row">
                  <div class="col-xl-6">
                    <div class="tp-shop-top-left d-flex align-items-center">
                      <div class="tp-shop-top-result">
                        <p>
                          Showing 1–{{
                            store.searchFilteredItems?.slice(0, perView).length
                          }}
                          of {{ product_data.length }} results
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <shop-sidebar-filter-select
                      @handle-select-filter="store.handleSelectFilter"
                    />
                  </div>
                </div>
              </div>
              <div class="tp-shop-items-wrapper tp-shop-item-primary">
                <div>
                  <div class="row infinite-container">
                    <div
                      v-for="item in store.searchFilteredItems?.slice(0,perView)"
                      :key="item.id"
                      class="col-xl-4 col-md-6 col-sm-6 infinite-item"
                    >
                      <product-fashion-product-item
                        :item="item"
                        :spacing="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center">
              <button
                v-if="
                  store.searchFilteredItems &&
                  perView < store.searchFilteredItems.length
                "
                @click="handlePerView"
                type="button"
                class="btn-loadmore tp-btn tp-btn-border tp-btn-border-primary"
              >
                Load More Products
              </button>

              <p v-else class="btn-loadmore-text">End Of Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- shop area end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Search Page" });

import { ref } from "vue";
import product_data from "@/data/product-data";
import { useProductFilterStore } from "@/pinia/useProductFilterStore";

let perView = ref<number>(9);
const store = useProductFilterStore();

function handlePerView() {
  perView.value = perView.value + 3;
}
</script>
