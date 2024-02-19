<template>
    <div class="tp-shop-top-select text-md-end">
      <ui-nice-select
        :options="[
          { value: 'default-sorting', text: 'Default Sorting' },
          { value: 'low-to-high', text: 'Low to Hight' },
          { value: 'high-to-low', text: 'High to Low' },
          { value: 'new-added', text: 'New Added' },
          { value: 'on-sale', text: 'On Sale' },
        ]"
        name="Select Category"
        :default-current="0"
        @onChange="handleSelect"
      />
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['handleSelectFilter'])
const handleSelect = (e: { value: string; text: string }) => {
  emit('handleSelectFilter', e);
};
</script>
