<template>
  <div class="tp-blog-list-item d-md-flex d-lg-block d-xl-flex">
    <div class="tp-blog-list-thumb">
      <nuxt-link :href="`/blog-details/${item.id}`">
        <img :src="item.img" alt="blog-img" />
      </nuxt-link>
    </div>
    <div class="tp-blog-list-content">
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
            ({{item.comments}})
          </span>
        </div>
        <h3 class="tp-blog-grid-title">
          <nuxt-link :href="`/blog-details/${item.id}`">Sweeten your Summer Wardrobes</nuxt-link>
        </h3>
        <p>
          Cursus mattis sociis natoque penatibus et magnis dis Parturient
          montes,nascetur ridiculus.!
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
  </div>
</template>

<script setup lang="ts">
import { type IBlogType } from '@/types/blog-type';

defineProps<{ item: IBlogType }>();
</script>
