<template>
  <section class="tp-cart-area pb-120">
    <div class="container">
      <div v-if="cartStore.cart_products.length === 0" className='text-center pt-50'>
        <h3>No Cart Items Found</h3>
        <nuxt-link href="/shop" className="tp-cart-checkout-btn mt-20">Continue Shipping</nuxt-link>
      </div>
      <div v-else class="row">
        <div class="col-xl-9 col-lg-8">
            <div class="tp-cart-list mb-25 mr-30">
              <table>
                  <thead>
                    <tr>
                      <th colspan="2" class="tp-cart-header-product">Product</th>
                      <th class="tp-cart-header-price">Price</th>
                      <th class="tp-cart-header-quantity">Quantity</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- cart item start -->
                    <cart-item v-for="item in cartStore.cart_products" :key="item.id" :item="item" />
                    <!-- cart item end -->
                  </tbody>
                </table>
            </div>
            <div class="tp-cart-bottom mr-30">
              <div class="row align-items-end">
                  <div class="col-xl-6 col-md-8">
                    <div class="tp-cart-coupon">
                        <form @submit.prevent="handleCouponSubmit">
                          <div class="tp-cart-coupon-input-box">
                              <label>Coupon Code:</label>
                              <div class="tp-cart-coupon-input d-flex align-items-center">
                                <input type="text" placeholder="Enter Coupon Code" v-model="couponCode">
                                <button type="submit">Apply</button>
                              </div>
                          </div>
                        </form>
                    </div>
                  </div>
                  <div class="col-xl-6 col-md-4">
                    <div class="tp-cart-update text-md-end">
                        <button @click="cartStore.clear_cart()" type="button" class="tp-cart-update-btn">Clear Cart</button>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="tp-cart-checkout-wrapper">
              <div class="tp-cart-checkout-top d-flex align-items-center justify-content-between">
                  <span class="tp-cart-checkout-top-title">Subtotal</span>
                  <span class="tp-cart-checkout-top-price">
                    ${{cartStore.totalPriceQuantity.total.toFixed(2)}}
                  </span>
              </div>
              <div class="tp-cart-checkout-shipping">
                  <h4 class="tp-cart-checkout-shipping-title">Shipping</h4>
                  <div class="tp-cart-checkout-shipping-option-wrapper">
                    <div class="tp-cart-checkout-shipping-option">
                        <input id="flat_rate" type="radio" name="shipping">
                        <label @click="handleShippingCost(20)" for="flat_rate">Flat rate: <span>$20.00</span></label>
                    </div>
                    <div class="tp-cart-checkout-shipping-option">
                        <input id="local_pickup" type="radio" name="shipping">
                        <label @click="handleShippingCost(25)" for="local_pickup">Local pickup: <span> $25.00</span></label>
                    </div>
                    <div class="tp-cart-checkout-shipping-option">
                        <input id="free_shipping" type="radio" name="shipping">
                        <label @click="handleShippingCost('free')" for="free_shipping">Free shipping</label>
                    </div>
                  </div>
              </div>
              <div class="tp-cart-checkout-total d-flex align-items-center justify-content-between">
                  <span>Total</span>
                  <span>${{(cartStore.totalPriceQuantity.total + shipCost).toFixed(2)}}</span>
              </div>
              <div class="tp-cart-checkout-proceed">
                  <nuxt-link href="/checkout" class="tp-cart-checkout-btn w-100">Proceed to Checkout</nuxt-link>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCartStore } from "@/pinia/useCartStore";
const cartStore = useCartStore();
let shipCost = ref<number>(0);
let couponCode = ref<string>('');

// handleCouponSubmit
const handleCouponSubmit = () => {
  console.log(couponCode.value)
}

// handle shipping cost 
const handleShippingCost = (value:number | string) => {
    if(value === 'free'){
      shipCost.value = 0;
    }
    else {
      shipCost.value = value as number;
    }
}
</script>
