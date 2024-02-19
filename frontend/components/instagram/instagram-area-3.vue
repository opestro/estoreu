<template>
  <section class="tp-instagram-area tp-instagram-style-3">
      <div class="container-fluid pl-20 pr-20">
          <div class="row row-cols-lg-6 row-cols-sm-2 row-cols-1 gx-2 gy-2 gy-lg-0">
            <div v-for="item in instagram_data" :key="item.id" class="col">
                <div class="tp-instagram-item-2 w-img">
                  <img :src="item.img" alt="image">
                  <div class="tp-instagram-icon-2">
                      <a :href="item.link" class="popup-image">
                        <i class="fa-brands fa-instagram"></i>
                     </a>
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
}
// instagram data
const instagram_data:IInstagram[] = [
  { id: 1, link: "https://www.instagram.com/", img: '/img/instagram/3/instagram-1.jpg' },
  { id: 2, link: "https://www.instagram.com/", img: '/img/instagram/3/instagram-2.jpg' },
  { id: 3, link: "https://www.instagram.com/", img: '/img/instagram/3/instagram-3.jpg' },
  { id: 4, link: "https://www.instagram.com/", img: '/img/instagram/3/instagram-4.jpg' },
  { id: 5, link: "https://www.instagram.com/", img: '/img/instagram/3/instagram-5.jpg' },
  { id: 6, link: "https://www.instagram.com/", img: '/img/instagram/3/instagram-6.jpg' },
]
</script>
