<template>
  <section :class="`tp-section-title-area ${center ? 'text-center' : ''} pt-95 pb-80`">
    <div class="container">
      <div class="row">
        <div class="col-xl-8">
          <div class="tp-section-title-wrapper-7">
            <span class="tp-section-title-pre-7">{{ title }}</span>
            <h3 class="tp-section-title-7" v-html="subtitle"></h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{title:string;subtitle:string;center?:boolean}>()
</script>
