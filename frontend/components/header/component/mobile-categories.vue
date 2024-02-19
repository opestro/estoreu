<template>
  <div class="offcanvas__category pb-40">
    <button @click="toggleCategoryActive" class="tp-offcanvas-category-toggle">
      <i class="fa-solid fa-bars"></i>
      All Categories
    </button>
    <div class="tp-category-mobile-menu">
      <nav
        :class="`tp-category-menu-content ${isCategoryActive ? 'active' : ''}`"
      >
        <ul :class="isCategoryActive ? 'active' : ''">
          <li
            v-for="(item, i) in filterCategories"
            :key="i"
            class="has-dropdown"
          >
            <a class="cursor-pointer">
              <span v-if="item.img">
                <img
                  :src="item.img"
                  alt="cate img"
                  style="width: 50px; height: 50px; object-fit: contain"
                />
              </span>
              <span>{{ item.parent }}</span>
              <button
                v-if="item.children"
                @click="handleOpenSubMenu(item.parent)"
                class="dropdown-toggle-btn"
              >
                <i class="fa-regular fa-angle-right"></i>
              </button>
            </a>

            <ul
              v-if="item.children"
              :class="`tp-submenu ${openCategory === item.parent ? 'active' : ''}`"
            >
              <li v-for="(child, i) in item.children" :key="i">
                <a class="cursor-pointer">{{ child }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import category_data from "@/data/category-data";
const props = defineProps<{ productType: string }>();
let isCategoryActive = ref<boolean>(false);

const filterCategories = computed(() => {
  return category_data.filter(
    (c) => c.productType.toLowerCase() === props.productType.toLowerCase()
  );
});

let openCategory = ref<string>("");

const handleOpenSubMenu = (title: string) => {
  if (title === openCategory.value) {
    openCategory.value = "";
  } else {
    openCategory.value = title;
  }
};

const toggleCategoryActive = () => {
  isCategoryActive.value = !isCategoryActive.value;
};
</script>

