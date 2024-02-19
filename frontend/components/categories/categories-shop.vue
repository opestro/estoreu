<template>
  <section class="tp-category-area pb-120">
    <div class="container">
      <div class="row">
        <div v-for="item in category_data" :key="item.id" class="col-lg-3 col-sm-6">
          <div
            class="tp-category-main-box mb-25 p-relative fix"
            style="background-color: #f3f5f7"
          >
            <div class="tp-category-main-content">
              <h3 class="tp-category-main-title pb-1">
                <a @click="handleCategory(item.parent)" class="cursor-pointer">{{item.parent}}</a>
              </h3>
              <span class="tp-category-main-item">
                {{item.products.length}} Products
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import category_data from '@/data/category-data';
const router = useRouter();

const handleCategory = (parent:string) => {
  router.push(
    `/shop?category=${parent.toLowerCase().replace("&", "").split(" ").join("-")}`
  );
};
</script>
