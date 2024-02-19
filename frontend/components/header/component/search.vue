<template>
  <div class="tp-header-search pl-70">
    <form @submit.prevent="handleSubmit">
      <div class="tp-header-search-wrapper d-flex align-items-center">
        <div class="tp-header-search-box">
          <input type="text" placeholder="Search for Products..." v-model="searchText" />
        </div>
        <div class="tp-header-search-category">
          <ui-nice-select
            :options="[
              { value: 'select-category', text: 'Select Category' },
              { value: 'electronics', text: 'Electronics' },
              { value: 'fashion', text: 'Fashion' },
              { value: 'beauty', text: 'Beauty' },
              { value: 'jewelry', text: 'Jewelry' },
            ]"
            name="Select Category"
            :default-current="0"
            @onChange="changeHandler"
          />
        </div>
        <div class="tp-header-search-btn">
          <button type="submit">
            <SvgSearch />
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
let searchText = ref<string>('');
let productType = ref<string>('');

const changeHandler = (e: { value: string; text: string }) => {
  productType.value = e.value;
};
// handleSubmit
const handleSubmit = () => {
  if(!searchText.value && !productType.value){
    return
  }
  else if(searchText.value && productType.value){
    router.push(`/search?searchText=${searchText.value}&productType=${productType.value}`)
  }
  else if(searchText.value && !productType.value){
    router.push(`/search?searchText=${searchText.value}`)
  }
  else if(!searchText.value && productType.value){
    router.push(`/search?productType=${productType.value}`)
  }
  else{
    router.push(`/search`)
  }
}
</script>
