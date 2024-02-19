<template>
  <div>
    <section class="tp-error-area pt-110 pb-110">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-8 col-md-10">
            <div class="tp-error-content text-center">
              <div class="tp-error-thumb">
                <img src="/img/error/error.png" alt="" />
              </div>

              <h5 class="tp-error-title">Oops! Page not found</h5>
              <p>
                Whoops, this is embarassing. Looks like the page you were
                looking for wasn't found.
              </p>
              <nuxt-link href="/" class="tp-error-btn">Back to Home</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "404 Page" });
</script>
