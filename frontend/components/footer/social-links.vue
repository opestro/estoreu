<template>
  <a v-for="item in social_data" :key="item.id" :href="item.link">
    <i :class="item.icon"></i>
  </a>
</template>

<script setup lang="ts">
const social_data: {
  id: number;
  link: string;
  icon: string;
  title: string;
}[] = [
  {
    id: 1,
    link: "https://www.facebook.com/",
    icon: "fa-brands fa-facebook-f",
    title: "Facebook",
  },
  {
    id: 2,
    link: "https://twitter.com/",
    icon: "fa-brands fa-twitter",
    title: "Twitter",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/",
    icon: "fa-brands fa-linkedin-in",
    title: "Linkedin",
  },
  {
    id: 4,
    link: "https://vimeo.com/",
    icon: "fa-brands fa-vimeo-v",
    title: "Vimeo",
  },
];
</script>
