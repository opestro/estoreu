<template>
  <section class="tp-shop-area pb-120">
    <div class="container">
      <div class="row">

        <div class="col-xl-3 col-lg-4">
          <!-- shop sidebar start -->
          <shop-sidebar-load-more />
          <!-- shop sidebar end -->
        </div>

        <div class="col-xl-9 col-lg-8">
          <div class="tp-shop-main-wrapper">
            <div class="tp-shop-top mb-45">
              <div class="row">
                <div class="col-xl-6">
                  <div class="tp-shop-top-left d-flex align-items-center">
                    <div class="tp-shop-top-tab tp-tab">
                      <ul class="nav nav-tabs" id="productTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button
                            :class="`nav-link ${active_tab === 'grid' ? 'active' : ''}`"
                            @click="handleActiveTab('grid')"
                          >
                            <svg-grid />
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button
                            :class="`nav-link ${active_tab === 'list' ? 'active' : ''}`"
                            @click="handleActiveTab('list')"
                          >
                            <svg-list />
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div class="tp-shop-top-result">
                      <p>
                        Showing 1–{{ store.filteredProducts?.slice(0,perView).length }} of
                        {{ product_data.length }} results
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
              <div v-if="active_tab === 'grid'">
                <div class="row infinite-container">
                  <div
                    v-for="item in store.filteredProducts?.slice(0,perView)"
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

              <div v-if="active_tab === 'list'">
                <div class="row">
                  <div class="col-xl-12">
                    <product-list-item
                      v-for="item in store.filteredProducts?.slice(0,perView)"
                      :key="item.id"
                      :item="item"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <button v-if="store.filteredProducts && perView < store.filteredProducts.length" @click="handlePerView" type="button" class="btn-loadmore tp-btn tp-btn-border tp-btn-border-primary">
            Load More Products
          </button>

          <p v-else class="btn-loadmore-text">End Of Products</p>
        </div>


      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import product_data from "@/data/product-data";
import { useProductFilterStore } from "@/pinia/useProductFilterStore";

const active_tab = ref<string>("grid");
let perView = ref<number>(9);
const store = useProductFilterStore();

function handleActiveTab(tab: string) {
  active_tab.value = tab;
}

function handlePerView() {
  perView.value = perView.value + 3
}

</script>
