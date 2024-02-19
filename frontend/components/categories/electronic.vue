<template>
  <section class="tp-product-category pt-60 pb-15">
    <div class="container">
      <div class="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4">
        <div v-for="(item, i) in category_items" :key="i" class="col">
          <div class="tp-product-category-item text-center mb-40">
            <div class="tp-product-category-thumb fix">
              <a class="cursor-pointer" @click="handleParentCategory(item.parent)">
                <img :src="item.img" alt="product-category" />
              </a>
            </div>
            <div class="tp-product-category-content">
              <h3 class="tp-product-category-title">
                <a class="cursor-pointer" @click="handleParentCategory(item.parent)">
                  {{ item.parent }}
                </a>
              </h3>
              <p>{{ item.products.length }} Product</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import category_data from "@/data/category-data";
const category_items = category_data.filter(
  (c) => c.productType === "electronics"
);

const router = useRouter();
// handle parent
const handleParentCategory = (value:string) => {
  const newCategory = value.toLowerCase().replace("&", "").split(" ").join("-");
  router.push(`/shop?category=${newCategory}`);
}
</script>
