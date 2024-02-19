<template>
  <div class="tp-shop-widget-content">
    <div class="tp-shop-widget-categories">
      <ul>
        <li v-for="category in category_data" :key="category.id">
          <a
            @click.prevent="handleCategoryRoute(category.parent)"
            :class="`cursor-pointer ${
              activeQuery ===
              category.parent
                .toLowerCase()
                .replace('&', '')
                .split(' ')
                .join('-')
                ? 'active'
                : ''
            }`"
          >
            {{ category.parent }}
            <span>{{ category.products.length }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, onMounted } from "vue";
import category_data from "@/data/category-data";
const router = useRouter();
const route = useRoute();
const activeQuery = ref<string>("");
const props = defineProps<{
  filter_dropdown?: boolean;
  filter_offcanvas?: boolean;
  load_more?: boolean;
  right_side?: boolean;
  shop_full?: boolean;
  shop_1600?: boolean;
}>();

// handle category route
const handleCategoryRoute = (value: string) => {
  const newCategory = value.toLowerCase().replace("&", "").split(" ").join("-");
  if (props.filter_dropdown) {
    router.push(`/shop-filter-dropdown?category=${newCategory}`);
  } else if (props.filter_offcanvas) {
    router.push(`/shop-filter-offcanvas?category=${newCategory}`);
  } else if (props.load_more) {
    router.push(`/shop-load-more?category=${newCategory}`);
  } else if (props.right_side) {
    router.push(`/shop-right-sidebar?category=${newCategory}`);
  } else if (props.shop_full) {
    router.push(`/shop-full-width?category=${newCategory}`);
  } else if (props.shop_1600) {
    router.push(`/shop-1600?category=${newCategory}`);
  } else {
    router.push(`/shop?category=${newCategory}`);
  }
};
watch(
  () => route.query,
  (newStatus) => {
    activeQuery.value = newStatus.category;
  }
);
onMounted(() => {
  activeQuery.value = route.query.category;
});
</script>
