<template>
  <section class="tp-order-area pb-160">
    <div class="container">
        <div class="tp-order-inner">
          <div class="row gx-0">
              <div class="col-lg-6">
                <div class="tp-order-details" style="background-color: #4F3D97;">
                    <div class="tp-order-details-top text-center mb-70">
                      <div class="tp-order-details-icon">
                          <span>
                            <svg-order-icon/>
                          </span>
                      </div>
                      <div class="tp-order-details-content">
                          <h3 class="tp-order-details-title">Your Order Confirmed</h3>
                          <p>We will send you a shipping confirmation email as soon <br> as your order ships</p>
                      </div>
                    </div>
                    <div class="tp-order-details-item-wrapper">
                      <div class="row">
                          <div class="col-sm-6">
                            <div class="tp-order-details-item">
                                <h4>Order Date:</h4>
                                <p>April 10, 2023</p>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="tp-order-details-item">
                                <h4>Expected Delivery: </h4>
                                <p>April 16, 2023</p>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="tp-order-details-item">
                                <h4>Order Number:</h4>
                                <p>#9641</p>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="tp-order-details-item">
                                <h4>Payment Method:</h4>
                                <p>Credit Card</p>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="tp-order-info-wrapper">
                    <h4 class="tp-order-info-title">Order Details</h4>

                    <div class="tp-order-info-list">
                      <ul>

                          <!-- header -->
                          <li class="tp-order-info-list-header">
                            <h4>Product</h4>
                            <h4>Total</h4>
                          </li>

                          <!-- item list -->
                          <li class="tp-order-info-list-desc">
                            <p>Xiaomi Redmi Note 9 Global V. <span> x 2</span></p>
                            <span>$274:00</span>
                          </li>
                          <li class="tp-order-info-list-desc">
                            <p>Office Chair Multifun <span> x 1</span></p>
                            <span>$74:00</span>
                          </li>
                          <li class="tp-order-info-list-desc">
                            <p>Apple Watch Series 6 Stainless  <span> x 3</span></p>
                            <span>$362:00</span>
                          </li>
                          <li class="tp-order-info-list-desc">
                            <p>Body Works Mens Collection <span> x 1</span></p>
                            <span>$145:00</span>
                          </li>

                          <!-- subtotal -->
                          <li class="tp-order-info-list-subtotal">
                            <span>Subtotal</span>
                            <span>$507.00</span>
                          </li>

                          <!-- shipping -->
                      <!-- shipping -->
                      <li class="tp-order-info-list-shipping">
                          <span>Shipping</span>
                          <div class="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
                            <span>
                                <input id="shipping_info" type="checkbox">
                                <label for="shipping_info">Flat rate: <span>$20.00</span></label>
                            </span>
                          </div>
                      </li>

                          <!-- total -->
                          <li class="tp-order-info-list-total">
                            <span>Total</span>
                            <span>$1,476.00</span>
                          </li>
                      </ul>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>
