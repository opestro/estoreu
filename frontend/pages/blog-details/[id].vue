<template>
  <div v-if="blog">
    <!-- blog details area start -->
    <blog-details-area :blog="blog" />
    <!-- blog details area end -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import blogData from '@/data/blog-data';
import { type IBlogType } from '@/types/blog-type';

const route = useRoute();
let blog = ref<IBlogType | undefined>();
useSeoMeta({ title: "Blog Details Page" });
onMounted(() => {
  blog.value = blogData.find(b => Number(b.id) === Number(route.params.id));
});
</script>