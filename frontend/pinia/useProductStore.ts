import product_data from '@/data/product-data';
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {

  let activeImg = ref<string>(product_data[0].img);
  let openFilterDropdown = ref<boolean>(false);
  let openFilterOffcanvas = ref<boolean>(false);

  // handle image active
  const handleImageActive = (img: string) => {
    activeImg.value = img;
  };

  // handle image active
  const handleOpenFilterDropdown = () => {
    openFilterDropdown.value = !openFilterDropdown.value
  };

  // handle image active
  const handleOpenFilterOffcanvas = () => {
    openFilterOffcanvas.value = !openFilterOffcanvas.value
  };

  return {
    activeImg,
    handleImageActive,
    handleOpenFilterDropdown,
    openFilterDropdown,
    openFilterOffcanvas,
    handleOpenFilterOffcanvas,
  };
});
