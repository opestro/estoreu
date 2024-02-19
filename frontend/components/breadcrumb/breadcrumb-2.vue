<template>
  <section
    class="breadcrumb__area include-bg pt-150 pb-150 breadcrumb__overlay breadcrumb__style-3"
    style="background-image: url(/img/breadcrumb/breadcrumb-bg-1.jpg);"
    data-background="assets/img/breadcrumb/breadcrumb-bg-1.jpg"
  >
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="breadcrumb__content text-center p-relative z-index-1">
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
defineProps<{title:string;subtitle:string}>()
</script>
