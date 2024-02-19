<template>
  <div
    class="tp-coupon-item mb-30 p-relative d-md-flex justify-content-between align-items-center"
  >
    <span class="tp-coupon-border"></span>
    <div class="tp-coupon-item-left d-sm-flex align-items-center">
      <div class="tp-coupon-thumb">
        <a href="#">
          <img
            alt="logo"
            :src="coupon.logo"
            style="background-color: #f2f3f5"
          />
        </a>
      </div>
      <div class="tp-coupon-content">
        <h3 class="tp-coupon-title">{{ coupon.title }}</h3>
        <p class="tp-coupon-offer mb-15">
          <span>{{ coupon.discountPercentage }}%</span>Off
        </p>
        <div class="tp-coupon-countdown">
          <div class="tp-coupon-countdown-inner">
            <ul>
              <li>
                <span>{{ timer.days }}</span> Day
              </li>
              <li>
                <span>{{ timer.hours }}</span> Hrs
              </li>
              <li>
                <span>{{ timer.minutes }}</span> Min
              </li>
              <li>
                <span>{{ timer.seconds }}</span> Sec
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="tp-coupon-item-right pl-20">
      <div class="tp-coupon-status mb-10 d-flex align-items-center">
        <h4>
          Coupon
          <span
            :class="`${dayjs().isAfter(dayjs(coupon.endTime)) ? 'in-active' : 'active'}`"
          >
            {{ dayjs().isAfter(dayjs(coupon.endTime)) ? "Inactive" : "Active" }}
          </span>
        </h4>
        <div class="tp-coupon-info-details">
          <span>
            <svg-info-icon />
          </span>
          <div class="tp-coupon-info-tooltip transition-3">
            <p>
              *This coupon code will apply on
              <span class="text-capitalize">{{coupon.productType}}</span> and when you shopping more than
              <span>${{ coupon.minimumAmount }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="tp-coupon-date">
        <button @click="copy" ref="text">
          <span>{{ copiedMessage || coupon.couponCode }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ICoupon } from "@/types/coupon-type";
import { useTimer, type UseTimer } from "vue-timer-hook";
import dayjs from "dayjs";
import useClipboard from 'vue-clipboard3/dist/esm'
const props = defineProps<{ coupon: ICoupon }>();
const { toClipboard } = useClipboard()
const text = ref<string>('');
const copiedMessage = ref<string>('');

let timer: UseTimer;
if (props.coupon.endTime) {
  const endTime = new Date(props.coupon.endTime);
  const endTimeMs = endTime.getTime();
  timer = useTimer(endTimeMs);
}

const copy = async () => {
  try {
    await toClipboard(text.value);
    copiedMessage.value = 'Copied';
    setTimeout(() => {
      copiedMessage.value = '';
    }, 6000);
  } catch (e) {
    console.error(e);
  }
}
</script>
