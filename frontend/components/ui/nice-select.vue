<template>
  <div
    :class="[`nice-select ${className}`, { open: open }]"
    tabindex="0"
    @click.prevent="open = !open"
    role="button"
    ref=""
  >
    <span class="current">{{ current?.text || placeholder }}</span>
    <ul class="list" role="menubar" @click.prevent="$event.stopPropagation()">
      <li
        :class="[`option`, { 'selected focus': item.value === current.value }]"
        v-for="(item, index) in options"
        :key="`option-${index}`"
        @click.prevent="currentHandler(item, index)"
        role="menuitem"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent ({
  props: {
    options: {
      type: Array as () => {value:string;text:string}[],
      required: true,
    },
    defaultCurrent: {
      type:Number,
      required: true,
    },
    placeholder: String,
    className: String,
    name: String,
  },
  name: "NiceSelect",
  data() {
    return {
      open: false,
      current: this.options[this.defaultCurrent],
    };
  },
  methods: {
    onClose() {
      this.open = false;
    },
    currentHandler(item:{value:string;text:string}, index:number) {
      this.current = this.options[index];
      this.$emit("onChange", item);
      this.onClose();
    },
  },
});
</script>
