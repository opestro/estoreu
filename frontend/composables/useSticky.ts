import { ref, onMounted } from 'vue'

export function useSticky() {
  let isSticky = ref<boolean>(false);
  const handleSticky = () => {
    if (window.scrollY > 80) {
      isSticky.value = true;
    } else {
      isSticky.value = false;
    }
  }
  onMounted(() => window.addEventListener("scroll", handleSticky))
  return { isSticky }
}