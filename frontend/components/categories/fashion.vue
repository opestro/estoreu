<template>
  <section class="tp-banner-area mt-20">
    <div class="container-fluid tp-gx-40">
      <div class="row tp-gx-20">
        <div
          v-for="item in category_items"
          :key="item.id"
          class="col-xxl-4 col-lg-6"
        >
          <div
            class="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix"
          >
            <div
              class="tp-banner-thumb-2 include-bg transition-3"
              :style="`background-image:url(${item.img})`"
            ></div>
            <h3 class="tp-banner-title-2">
              <a @click="handleParentCategory(item.parent)" class="cursor-pointer">
                {{item.parent}}
              </a>
            </h3>
            <div class="tp-banner-btn-2">
              <a
                @click="handleParentCategory(item.parent)"
                class="tp-btn tp-btn-border tp-btn-border-sm cursor-pointer">
                Shop Now
                <svg-right-arrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import category_data from "@/data/category-data";

const category_items = category_data.filter((c) => c.productType === "fashion");

const router = useRouter();
// handle parent
const handleParentCategory = (value: string) => {
  const newCategory = value.toLowerCase().replace("&", "").split(" ").join("-");
  router.push(`/shop?category=${newCategory}`);
};
</script>
