<template>
  <div class="back-to-top-wrapper">
    <button id="back_to_top" type="button" class="back-to-top-btn">
      <svg
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 6L6 1L1 6"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
onMounted(() => {
  const result = document.querySelector(".back-to-top-wrapper");
  if (result) {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        result.classList.add("back-to-top-btn-show");
      } else {
        result.classList.remove("back-to-top-btn-show");
      }
    });
    result.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
</script>
