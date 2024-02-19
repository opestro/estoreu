<template>
  <div
    class="tp-product-details-countdown d-flex align-items-center justify-content-between flex-wrap mt-25 mb-25"
  >
    <h4 class="tp-product-details-countdown-title">
      <i class="fa-solid fa-fire-flame-curved"></i> Flash Sale end in:
    </h4>
    <div
      class="tp-product-details-countdown-time"
    >
      <ul>
        <li><span data-days>{{timer.days}}</span>D</li>
        <li><span data-hours>{{timer.hours}}</span>H</li>
        <li><span data-minutes>{{timer.minutes}}</span>M</li>
        <li><span data-seconds>{{timer.seconds}}</span>S</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IProduct } from "@/types/product-type";
import { useTimer, type UseTimer } from "vue-timer-hook";
const props = defineProps<{ product: IProduct }>();

let timer: UseTimer;
if (props.product.offerDate?.endDate) {
  const endTime = new Date(props.product.offerDate.endDate);
  const endTimeMs = endTime.getTime();
  timer = useTimer(endTimeMs);
}
</script>
