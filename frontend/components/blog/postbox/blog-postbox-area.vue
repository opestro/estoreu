<template>
  <section class="tp-postbox-area pt-120 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xl-9 col-lg-8">
          <div class="tp-postbox-wrapper pr-50">
            <blog-postbox-item
              v-for="(blog, i) in blog_items.slice(startIndex, endIndex)"
              :key="i"
              :item="blog"
            />
            <div class="tp-blog-pagination mt-50">
              <div class="tp-pagination">
                <ui-pagination
                  :items-per-page="4"
                  :data="blog_items"
                  @handle-paginate="handlePagination"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4">
          <!-- blog sidebar start -->
          <blog-sidebar />
          <!-- blog sidebar end -->
        </div>
      </div>
    </div>
  </section>

  <!-- video modal start -->
  <modal-video/>
  <!-- video modal end -->
</template>

<script setup lang="ts">
import blogData from "@/data/blog-data";
import { type IBlogType } from "@/types/blog-type";

// blog items
const blog_items = blogData.filter((b) => b.blog === "blog-postbox");
let filteredProductsItems = ref<IBlogType[]>(blog_items);
let startIndex = ref<number>(0);
let endIndex = ref<number>(blog_items.length);

const handlePagination = (data: IBlogType[], start: number, end: number) => {
  console.log("data", data, "start", start, "end", end);
  filteredProductsItems.value = data;
  startIndex.value = start;
  endIndex.value = end;
};
</script>
