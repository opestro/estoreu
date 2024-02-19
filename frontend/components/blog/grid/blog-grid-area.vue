<template>
  <section class="tp-blog-grid-area pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xl-9 col-lg-8">
          <div class="tp-blog-grid-wrapper">
            <div class="tp-blog-grid-top d-flex justify-content-between mb-40">
              <div class="tp-blog-grid-result">
                <p>Showing 1–{{ blog_items.slice(startIndex,endIndex).length }} of {{blog_items.length}} results</p>
              </div>
              <div class="tp-blog-grid-tab tp-tab">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      :class="`nav-link ${list_style?'':'active'}`"
                      id="nav-grid-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-grid"
                      type="button"
                      role="tab"
                      aria-controls="nav-grid"
                      aria-selected="true"
                    >
                      <svg-grid />
                    </button>
                    <button
                      :class="`nav-link ${list_style?'active':''}`"
                      id="nav-list-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-list"
                      type="button"
                      role="tab"
                      aria-controls="nav-list"
                      aria-selected="false"
                    >
                      <svg-list />
                    </button>
                  </div>
                </nav>
              </div>
            </div>
            <!-- top end -->

            <div class="tab-content" id="nav-tabContent">
              <div
              :class="`tab-pane fade ${list_style?'':'show active'}`"
                id="nav-grid"
                role="tabpanel"
                aria-labelledby="nav-grid-tab"
                tabindex="0"
              >
                <!-- blog grid item wrapper -->
                <div class="tp-blog-grid-item-wrapper">
                  <div class="row tp-gx-30">
                    <div
                      v-for="(blog, i) in blog_items.slice(startIndex,endIndex)"
                      :key="i"
                      class="col-lg-6 col-md-6"
                    >
                      <blog-grid-item :item="blog" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                :class="`tab-pane fade ${list_style?'show active':''}`"
                id="nav-list"
                role="tabpanel"
                aria-labelledby="nav-list-tab"
                tabindex="0"
              >
                <!-- blog list wrapper -->
                <div class="tp-blog-list-item-wrapper">
                  <blog-list-item
                    v-for="(blog, i) in blog_items.slice(startIndex, endIndex)"
                    :key="i"
                    :item="blog"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12">
                  <div class="tp-blog-pagination mt-30">
                    <div class="tp-pagination">
                      <ui-pagination
                        :items-per-page="6"
                        :data="blog_items"
                        @handle-paginate="handlePagination"
                      />
                    </div>
                  </div>
                </div>
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
</template>

<script setup lang="ts">
import blogData from "@/data/blog-data";
import { type IBlogType } from "@/types/blog-type";

// props
withDefaults(defineProps<{list_style?:boolean }>(), {
  list_style:false,
})

// blog items
const blog_items = blogData.filter((b) => b.blog === "blog-grid");
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
