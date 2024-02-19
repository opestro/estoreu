<template>
  <div class="tp-checkout-place white-bg">
    <h3 class="tp-checkout-place-title">Your Order</h3>
    <div class="tp-order-info-list">
        <ul>
          <!-- header -->
          <li class="tp-order-info-list-header">
              <h4>Product</h4>
              <h4>Total</h4>
          </li>
          <!-- item list -->
          <li v-for="item in cartStore.cart_products" :key="item.id" class="tp-order-info-list-desc">
              <p>{{item.title}} <span> x {{item.orderQuantity}}</span></p>
              <span>${{item.price.toFixed(2)}}</span>
          </li>

          <!-- subtotal -->
          <li class="tp-order-info-list-subtotal">
              <span>Subtotal</span>
              <span>${{cartStore.totalPriceQuantity.total.toFixed(2)}}</span>
          </li>

          <!-- shipping -->
          <li class="tp-order-info-list-shipping">
              <span>Shipping</span>
              <div class="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
                <span>
                    <input id="flat_rate" type="radio" name="shipping">
                    <label @click="handleShippingCost(20)" for="flat_rate">Flat rate: <span>$20.00</span></label>
                </span>
                <span>
                    <input id="local_pickup" type="radio" name="shipping">
                    <label @click="handleShippingCost(25)" for="local_pickup">Local pickup: <span>$25.00</span></label>
                </span>
                <span>
                    <input id="free_shipping" type="radio" name="shipping">
                    <label @click="handleShippingCost('free')" for="free_shipping">Free shipping</label>
                </span>
              </div>
          </li>

          <!-- total -->
          <li class="tp-order-info-list-total">
              <span>Total</span>
              <span>${{(cartStore.totalPriceQuantity.total + shipCost).toFixed(2)}}</span>
          </li>
        </ul>
    </div>
    <div class="tp-checkout-payment">
        <div class="tp-checkout-payment-item">
          <input type="radio" id="back_transfer" name="payment">
          <label @click="handlePayment('bank')" for="back_transfer" data-bs-toggle="direct-bank-transfer">Direct Bank Transfer</label>
          <div v-if="payment_name === 'bank'" class="tp-checkout-payment-desc direct-bank-transfer">
              <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          </div>
        </div>
        <div class="tp-checkout-payment-item">
          <input type="radio" id="cheque_payment" name="payment">
          <label @click="handlePayment('cheque_payment')" for="cheque_payment">Cheque Payment</label>
          <div v-if="payment_name === 'cheque_payment'" class="tp-checkout-payment-desc cheque-payment">
              <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          </div>
        </div>
    </div>
    <div class="tp-checkout-agree">
        <div class="tp-checkout-option">
          <input id="read_all" type="checkbox">
          <label for="read_all">I have read and agree to the website.</label>
        </div>
    </div>
    <div class="tp-checkout-btn-wrapper">
        <button type="submit" class="tp-checkout-btn w-100">Place Order</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useCartStore} from '@/pinia/useCartStore';
let shipCost = ref<number>(0);
let payment_name = ref<string>('');

const cartStore = useCartStore();

// handle shipping cost 
const handleShippingCost = (value:number | string) => {
    if(value === 'free'){
      shipCost.value = 0;
    }
    else {
      shipCost.value = value as number;
    }
}

// handle payment item
const handlePayment = (value:string) => {
    payment_name.value = value
}
</script>
