<template>
  <section class="tp-instagram-area tp-instagram-style-4 pt-110 pb-10">
    <div class="container-fluid pl-20 pr-20">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-section-title-wrapper-4 mb-50 text-center">
            <h3 class="tp-section-title-4">Trends on image feed</h3>
            <p>
              After many months design and development of a modern online
              retailer
            </p>
          </div>
        </div>
      </div>
      <div class="row row-cols-lg-6 row-cols-sm-2 row-cols-1 gx-2 gy-2 gy-lg-0">
        <div v-for="item in instagram_data" :key="item.id" class="col">
          <div class="tp-instagram-item-2 w-img">
            <img :src="item.img" alt="instagram-img" />
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
};
// instagram data
const instagram_data: IInstagram[] = [
  {
    id: 1,
    link: "https://www.instagram.com/",
    img: "/img/instagram/4/instagram-1.jpg",
  },
  {
    id: 2,
    link: "https://www.instagram.com/",
    img: "/img/instagram/4/instagram-2.jpg",
  },
  {
    id: 3,
    link: "https://www.instagram.com/",
    img: "/img/instagram/4/instagram-3.jpg",
  },
  {
    id: 4,
    link: "https://www.instagram.com/",
    img: "/img/instagram/4/instagram-4.jpg",
  },
  {
    id: 5,
    link: "https://www.instagram.com/",
    img: "/img/instagram/4/instagram-5.jpg",
  },
  {
    id: 6,
    link: "https://www.instagram.com/",
    img: "/img/instagram/4/instagram-6.jpg",
  },
];
</script>
