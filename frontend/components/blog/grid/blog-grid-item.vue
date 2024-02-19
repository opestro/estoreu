<template>
  <div :class="`tp-blog-grid-item ${style_2?'tp-blog-grid-style2':''} p-relative mb-30`">
    <div class="tp-blog-grid-thumb w-img fix mb-30">
      <nuxt-link :href="`/blog-details/${item.id}`">
        <img :src="item.img" alt="blog-img" />
      </nuxt-link>
    </div>
    <div class="tp-blog-grid-content">
      <div class="tp-blog-grid-meta">
        <span>
          <span>
            <svg-date />
          </span>
          {{item.date}}
        </span>
        <span>
          <span>
            <svg-comments />
          </span>
          Comments ({{item.comments}})
        </span>
      </div>
      <h3 class="tp-blog-grid-title">
        <nuxt-link :href="`/blog-details/${item.id}`">{{item.title}}</nuxt-link>
      </h3>
      <p>
        Cursus mattis sociis natoque penatibus et magnis montes,nascetur
        ridiculus.
      </p>

      <div class="tp-blog-grid-btn">
        <nuxt-link :href="`/blog-details/${item.id}`" class="tp-link-btn-3">
          Read More
          <span>
            <svg-right-arrow />
          </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IBlogType } from "@/types/blog-type";

defineProps<{ item: IBlogType;style_2?:boolean }>();
</script>
