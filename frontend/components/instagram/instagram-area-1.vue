<template>
  <div class="tp-instagram-area pb-70">
    <div class="container">
        <div class="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1">
          <div v-for="(item,i) in instagram_data" :key="i" class="col">
              <div class="tp-instagram-item p-relative z-index-1 fix mb-30 w-img">
                <img :src="item.img" alt="image">
                <div class="tp-instagram-icon">
                    <a :href="item.link" target="_blank" class="popup-image">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">

type IInstagram = {
    id: number;
    link: string;
    img: string;
}
// instagram data 
const instagram_data:IInstagram[] = [
  { id: 1, link: 'https://www.instagram.com/', img: '/img/instagram/instagram-1.jpg' },
  { id: 2, link: 'https://www.instagram.com/', img: '/img/instagram/instagram-2.jpg' },
  { id: 3, link: 'https://www.instagram.com/', img: '/img/instagram/instagram-3.jpg' },
  { id: 4, link: 'https://www.instagram.com/', img: '/img/instagram/instagram-4.jpg' },
  { id: 5, link: 'https://www.instagram.com/', img: '/img/instagram/instagram-5.jpg' },
]

</script>
