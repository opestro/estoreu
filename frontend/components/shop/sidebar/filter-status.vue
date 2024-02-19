<template>
  <div class="tp-shop-widget-content">
    <div class="tp-shop-widget-checkbox">
      <ul class="filter-items filter-checkbox">
        <li v-for="(s, i) in status" :key="i" class="filter-item checkbox">
          <input
            id="on-sale"
            type="checkbox"
            name="on-sale"
          />
          <label @click="handleStatusRoute(s)" :for="s" :class="`${
              activeQuery ===
              s.toLowerCase().replace('&', '').split(' ').join('-')
                ? 'active'
                : ''
            }`"> {{ s }} </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
const route = useRoute();
const router = useRouter();
const status = ref<string[]>(["On sale", "In Stock"]);
const activeQuery = ref<string>("");
const props = defineProps<{
  filter_dropdown?: boolean;
  filter_offcanvas?: boolean;
  load_more?: boolean;
  right_side?: boolean;
  shop_full?: boolean;
  shop_1600?: boolean;
}>();

// handle status route
const handleStatusRoute = (status: string) => {
  const newStatus = status.toLowerCase().replace("&", "").split(" ").join("-");
  if (props.filter_dropdown) {
    router.push(`/shop-filter-dropdown?status=${newStatus}`);
  } else if (props.filter_offcanvas) {
    router.push(`/shop-filter-offcanvas?status=${newStatus}`);
  } else if (props.load_more) {
    router.push(`/shop-load-more?status=${newStatus}`);
  } else if (props.right_side) {
    router.push(`/shop-right-sidebar?status=${newStatus}`);
  } else if (props.shop_full) {
    router.push(`/shop-full-width?status=${newStatus}`);
  } else if (props.shop_1600) {
    router.push(`/shop-1600?status=${newStatus}`);
  } else {
    router.push(`/shop?status=${newStatus}`);
  }
};
watch(
  () => route.query,
  (newStatus) => {
    activeQuery.value = newStatus.status;
  }
);
onMounted(() => {
  activeQuery.value = route.query.status;
});
</script>
