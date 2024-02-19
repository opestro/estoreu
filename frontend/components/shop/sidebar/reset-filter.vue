<template>
   <div class="tp-shop-widget mb-50">
      <h3 class="tp-shop-widget-title">Reset Filter</h3>
      <button
        @click="handleFilterReset"
        class="tp-btn"
      >
        Reset Filter
      </button>
    </div>
</template>

<script setup lang="ts">
import { useProductFilterStore } from '@/pinia/useProductFilterStore';
const store = useProductFilterStore();
const router = useRouter();
const props = defineProps<{
  filter_dropdown?: boolean;
  filter_offcanvas?: boolean;
  load_more?: boolean;
  right_side?: boolean;
  shop_full?: boolean;
  shop_1600?: boolean;
}>();

const handleFilterReset = () => {
  store.handleResetFilter()
  if(props.filter_dropdown){
    router.push('/shop-filter-dropdown')
  }
  else if(props.filter_offcanvas){
    router.push('/shop-filter-offcanvas')
  }
  else if(props.load_more){
    router.push('/shop-load-more')
  }
  else if(props.right_side){
    router.push('/shop-right-sidebar')
  }
  else if(props.shop_full){
    router.push('/shop-full-width')
  }
  else if(props.shop_1600){
    router.push('/shop-1600')
  }
  else {
    router.push('/shop')
  }
}

</script>
