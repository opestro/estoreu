<template>
  <div class="tp-sidebar-wrapper tp-sidebar-ml--24">
    <div class="tp-sidebar-widget mb-35">
        <div class="tp-sidebar-search">
          <form action="#">
              <div class="tp-sidebar-search-input">
                <input type="text" placeholder="Search...">
                <button type="submit">
                    <svg-search/>
                </button>
              </div>
          </form>
        </div>
    </div>

    <!-- about -->
    <div class="tp-sidebar-widget mb-35">
        <h3 class="tp-sidebar-widget-title">About me</h3>
        <div class="tp-sidebar-widget-content">
          <div class="tp-sidebar-about">
              <div class="tp-sidebar-about-thumb mb-25">
                <a href="#">
                    <img src="/img/users/user-11.jpg" alt="">
                </a>
              </div>
              <div class="tp-sidebar-about-content">
                <h3 class="tp-sidebar-about-title">
                    <a href="#">Ravi O'Leigh</a>
                </h3>
                <span class="tp-sidebar-about-designation">Photographer & Blogger</span>
                <p>Lorem ligula eget dolor. Aenean massa. Cum sociis que penatibus magnis dis parturient</p>
                <div class="tp-sidebar-about-signature">
                    <img src="/img/blog/signature/signature.png" alt="signature">
                </div>
              </div>
          </div>
        </div>
    </div>
    <!-- about end -->

    <!-- latest post start -->
    <div class="tp-sidebar-widget mb-35">
        <h3 class="tp-sidebar-widget-title">Latest Posts</h3>
        <div class="tp-sidebar-widget-content">
          <div class="tp-sidebar-blog-item-wrapper">
              <div v-for="item in recent_post" :key="item.id" class="tp-sidebar-blog-item d-flex align-items-center">
                <div class="tp-sidebar-blog-thumb">
                    <nuxt-link :href="`/blog-details/${item.id}`">
                      <img :src="item.img" alt="blog-img">
                    </nuxt-link>
                </div>
                <div class="tp-sidebar-blog-content">
                    <div class="tp-sidebar-blog-meta">
                      <span>{{ item.date }}</span>
                    </div>
                    <h3 class="tp-sidebar-blog-title">
                      <nuxt-link :href="`/blog-details/${item.id}`">{{item.title}}</nuxt-link>
                    </h3>
                </div>
              </div>
          </div>
        </div>
    </div>
    <!-- latest post end -->

    <!-- categories start -->
    <div class="tp-sidebar-widget widget_categories mb-35">
        <h3 class="tp-sidebar-widget-title">Categories</h3>
        <div class="tp-sidebar-widget-content">
          <ul>
              <li><nuxt-link href="/blog">Farming <span>(12)</span></nuxt-link></li>
              <li><nuxt-link href="/blog">Crisp Bread & Cake <span>(6)</span></nuxt-link></li>
              <li><nuxt-link href="/blog">Milk & Meat <span>(2)</span></nuxt-link></li>
              <li><nuxt-link href="/blog">Organic Fruits <span>(8)</span></nuxt-link></li>
              <li><nuxt-link href="/blog">Sea Foods <span>(0)</span></nuxt-link></li>
              <li><nuxt-link href="/blog">Vegetable <span>(3)</span></nuxt-link></li>
          </ul>
        </div>
    </div>
    <!-- categories end -->

    <!-- tag cloud start -->
    <div class="tp-sidebar-widget mb-35">
        <h3 class="tp-sidebar-widget-title">Popular Tags</h3>
        <div class="tp-sidebar-widget-content tagcloud">
          <a href="#">Summer</a>
          <a href="#">Vintage</a>
          <a href="#">Sunglasses</a>
          <a href="#">Organic Food</a>
          <a href="#">Lifesttyle</a>
          <a href="#">Nature</a>
        </div>
    </div>
    <!-- tag cloud end -->

  </div>
</template>

<script setup lang="ts">
import blogData from '@/data/blog-data';
const recent_post = blogData.slice(0,3)
</script>
