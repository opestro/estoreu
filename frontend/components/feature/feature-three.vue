<template>
  <section class="tp-featured-product-area pt-70 pb-150">
    <div class="container">
      <div class="row gx-0">
        <div v-for="item in featured_data" :key="item.id" class="col-lg-4 col-md-6">
          <div class="tp-featured-item-3 text-center">
            <div class="tp-featured-thumb-3 d-flex align-items-end justify-content-center">
              <img :src="item.img" alt="image">
            </div>
            <div class="tp-featured-content-3">
              <h3 class="tp-featured-title-3">
                <nuxt-link href="/shop">
                  <span v-html="item.title"></span>
                </nuxt-link>
              </h3>
              <p>{{item.subtitle}}</p>
              <div class="tp-featured-price-3">
                <span>Save ${{item.save.toFixed(2)}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// data type 
type IFeature = {
    id: number;
    img: string;
    title: string;
    subtitle: string;
    save: number;
}
// slider data 
const featured_data:IFeature[] = [
  {
    id: 1,
    img: '/img/product/featured/featured-1.png',
    title: 'Matte Liquid <br /> Lipstick & Lip Liner',
    subtitle: 'Molestias internos et commodi tempora dolores sapiente sed iste.',
    save: 72,
  },
  {
    id: 2,
    img: '/img/product/featured/featured-2.png',
    title: 'Crushed Liquid <br /> Lip  - Cherry Crush',
    subtitle: 'Molestias internos et commodi tempora dolores sapiente sed iste.',
    save: 98,
  },
  {
    id: 3,
    img: '/img/product/featured/featured-3.png',
    title: 'Mega Waterproof <br /> Concealer  - 125 Bisque',
    subtitle: 'Molestias internos et commodi tempora dolores sapiente sed iste.',
    save: 133,
  },
]
</script>
