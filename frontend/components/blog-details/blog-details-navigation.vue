<template>
  <div
    class="tp-postbox-details-navigation d-none d-md-flex justify-content-between align-items-center"
  >
    <div class="tp-postbox-details-navigation-item d-flex align-items-center">
      <div class="tp-postbox-details-navigation-icon mr-15">
        <span>
          <nuxt-link href="/blog-details">
            <svg-prev-nav />
          </nuxt-link>
        </span>
      </div>
      <div class="tp-postbox-details-navigation-content">
        <span>Previous Post</span>
        <h3 class="tp-postbox-details-navigation-title">
          <nuxt-link href="/blog-details">
            Hiring the Right Sales Team at <br /> the Right Time</nuxt-link>
        </h3>
      </div>
    </div>
    <div
      class="tp-postbox-details-navigation-item d-flex align-items-center text-end"
    >
      <div class="tp-postbox-details-navigation-content">
        <span>Next Post</span>
        <h3 class="tp-postbox-details-navigation-title">
          <nuxt-link href="/blog-details">Fully embrace the return of <br /> 90s fashion</nuxt-link>
        </h3>
      </div>
      <div class="tp-postbox-details-navigation-icon ml-15">
        <span>
          <nuxt-link href="/blog-details">
            <svg-next-nav />
          </nuxt-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
