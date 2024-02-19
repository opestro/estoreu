<template>
  <section class="tp-blog-area pt-110 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-title-wrapper-2 mb-50 text-center">
            <span class="tp-section-title-pre-2">
              Our Blog & News
              <svg-section-line-2/>
            </span>
            <h3 class="tp-section-title-2">Latest News & Articles</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="item in blog_items"
          :key="item.id"
          class="col-xl-4 col-lg-4 col-md-6"
        >
          <blog-fashion-item :item="item" />
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-blog-more-2 mt-10 text-center">
            <nuxt-link
              href="/blog"
              class="tp-btn tp-btn-border tp-btn-border-sm"
              >
              Discover More
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import blogData from "@/data/blog-data";
const blog_items = blogData.filter((b) => b.blog === "fashion");
</script>
