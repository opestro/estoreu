<template>
  <section class="tp-instagram-area">
    <div class="container-fluid pl-20 pr-20">
      <div class="row row-cols-lg-5 row-cols-sm-2 row-cols-1 gx-2 gy-2 gy-lg-0">
        <div v-for="item in instagram_data" :key="item.id" class="col">
          <div v-if="!item.banner" class="tp-instagram-item-2 w-img">
            <img :src="item.img" alt="insta-img">
            <div class="tp-instagram-icon-2">
              <a :href="item.link" class="popup-image" target="_blank">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div v-if="item.banner" class="tp-instagram-banner text-center">
            <div class="tp-instagram-banner-icon mb-40">
              <a href="#">
                <img :src="item.img" alt="insta-img">
              </a>
            </div>
            <div class="tp-instagram-banner-content">
              <span>Follow Us on</span>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// data type 
type IInstagram = {
    id: number;
    link: string;
    img: string;
    banner?: boolean;
}
// i data
const instagram_data:IInstagram[] = [
  { id: 1, link: "https://www.instagram.com/", img: '/img/instagram/2/insta-1.jpg' },
  { id: 2, link: "https://www.instagram.com/", img: '/img/instagram/2/insta-2.jpg' },
  { id: 3, link: "https://www.instagram.com/", banner: true, img: '/img/instagram/2/insta-icon.png' },
  { id: 4, link: "https://www.instagram.com/", img: '/img/instagram/2/insta-3.jpg' },
  { id: 5, link: "https://www.instagram.com/", img: '/img/instagram/2/insta-4.jpg' },
]
</script>
