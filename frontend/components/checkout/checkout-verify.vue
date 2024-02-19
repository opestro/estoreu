<template>
  <div class="tp-checkout-verify">
    <div class="tp-checkout-verify-item">
      <p class="tp-checkout-verify-reveal">
        Returning customer?
        <button
          @click="openLogin = !openLogin"
          type="button"
          class="tp-checkout-login-form-reveal-btn"
        >
          Click here to login
        </button>
      </p>

      <div
        v-if="openLogin"
        id="tpReturnCustomerLoginForm"
        class="tp-return-customer"
      >
        <forms-login-form />
      </div>
    </div>
    <div class="tp-checkout-verify-item">
      <p class="tp-checkout-verify-reveal">
        Have a coupon?
        <button
          @click="openCoupon = !openCoupon"
          type="button"
          class="tp-checkout-coupon-form-reveal-btn"
        >
          Click here to enter your code
        </button>
      </p>

      <div
        v-if="openCoupon"
        id="tpCheckoutCouponForm"
        class="tp-return-customer"
      >
        <form @submit.prevent="handleSubmit">
          <div class="tp-return-customer-input">
            <label>Coupon Code :</label>
            <input type="text" placeholder="Coupon" />
          </div>
          <button type="submit" class="tp-return-customer-btn tp-checkout-btn">
            Apply
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const openLogin = ref<boolean>(false);
const openCoupon = ref<boolean>(false);

const handleSubmit = () => {
  console.log("submitted");
};
</script>
