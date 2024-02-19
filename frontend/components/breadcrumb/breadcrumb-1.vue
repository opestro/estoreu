<template>
  <section :class="`breadcrumb__area include-bg pt-100 pb-50 ${full_width?'breadcrumb__padding':''}`">
    <div :class="`${full_width?'container-fluid':shop_1600 ?'container-shop':'container'}`">
      <div class="row">
        <div class="col-xxl-12">
          <div class="breadcrumb__content p-relative z-index-1">
            <h3 class="breadcrumb__title">{{title}}</h3>
            <div class="breadcrumb__list">
              <span><nuxt-link href="/">Home</nuxt-link></span>
              <span>{{subtitle}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  full_width?: boolean;
  shop_1600?: boolean;
}>();
</script>

