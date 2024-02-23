<template>
  <div>
    <nuxt-layout name="layout-one">
      <!-- hero banner start -->
      <hero-banner-one />
      <!-- hero banner end -->

      <!-- category start -->
      <categories-electronic />
      <!-- category end -->
     
      
      <!-- feature area start -->
      <feature-one />
      <!-- feature area end -->

      <!-- product area start -->
      <product-electronics-top-items :productsData="tanentP.attributes.products.data" />
      <!-- product area end -->

      <!-- banner area start -->
      <banner-area />
      <!-- banner area en -->

      <!-- offer product start -->
    <!--  <product-electronics-offer-items /> -->
      <!-- offer product end -->

      <!-- product gadget area start -->
    <!--  <product-electronics-gadget-items /> -->
      <!-- product gadget area end -->

      <!-- product banner start -->
     <!-- <banner-area-2 /> -->
      <!-- product banner end -->

      <!-- product new arrivals area start -->
     <!-- <product-electronics-new-arrivals /> -->
      <!-- product new arrivals area end -->

      <!-- product sm items start -->
     <!-- <product-electronics-sm-items /> -->
      <!-- product sm items end -->

      <!-- blog item start -->
      <!-- <blog-electronic/> -->
      <!-- blog item end -->

      <!-- instagram area start -->
      <instagram-area-1/>
      <!-- instagram area end -->

      <!-- subscribe area start -->
     <!-- <subscribe-1/> -->
      <!-- subscribe area end -->
    </nuxt-layout>
  </div>
</template>

<script setup >


definePageMeta({
  layout: false,
});
const tenant = "mahdi"
let tanentP = ref({})

async  function getProducts(){
 const {data} = await useLazyFetch('http://localhost:1337/api/tenants?filters[slug][$eq]='+tenant+'&&populate=*')
 const result =  JSON.stringify(data.value.data[0])  
 tanentP.value = JSON.parse(result)

return {tanentP, products}
}

  getProducts()

watch(tanentP)


useSeoMeta({ title: "Shofy - Multipurpose eCommerce Vue Nuxt 3 Template" });
</script>
