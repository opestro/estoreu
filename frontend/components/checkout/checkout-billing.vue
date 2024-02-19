<template>
  <div class="tp-checkout-bill-form">
      <div class="tp-checkout-bill-inner">
          <div class="row">
            <div class="col-md-6">
                <div class="tp-checkout-input">
                  <label>First Name <span>*</span></label>
                  <input type="text" placeholder="First Name">
                </div>
            </div>
            <div class="col-md-6">
                <div class="tp-checkout-input">
                  <label>Last Name <span>*</span></label>
                  <input type="text" placeholder="Last Name">
                </div>
            </div>
            <div class="col-md-12">
                <div class="tp-checkout-input">
                  <label>Company name (optional)</label>
                  <input type="text" placeholder="Example LTD.">
                </div>
            </div>
            <div class="col-md-12">
                <div class="tp-checkout-input">
                  <label>Country / Region </label>
                  <input type="text" placeholder="United States (US)">
                </div>
            </div>
            <div class="col-md-12">
                <div class="tp-checkout-input">
                  <label>Street address</label>
                  <input type="text" placeholder="House number and street name">
                </div>

                <div class="tp-checkout-input">
                  <input type="text" placeholder="Apartment, suite, unit, etc. (optional)">
                </div>
            </div>
            <div class="col-md-12">
                <div class="tp-checkout-input">
                  <label>Town / City</label>
                  <input type="text" placeholder="">
                </div>
            </div>
            <div class="col-md-6">
                <div class="tp-checkout-input">
                  <label>State / County</label>
                  <ui-nice-select
                    :options="[
                      { value: 'new-york-us', text: 'New York US' },
                      { value: 'berlin-germany', text: 'Berlin Germany' },
                      { value: 'paris-france', text: 'Paris France' },
                      { value: 'tokiyo-japan', text: 'Tokiyo Japan' }
                    ]"
                    name="New York US"
                    :default-current="0"
                    @onChange="changeHandler"
                  />
                </div>
            </div>
            <div class="col-md-6">
                <div class="tp-checkout-input">
                  <label>Postcode ZIP</label>
                  <input type="text" placeholder="">
                </div>
            </div>
            <div class="col-md-12">
                <div class="tp-checkout-input">
                  <label>Phone <span>*</span></label>
                  <input type="text" placeholder="">
                </div>
            </div>
            <div class="col-md-12">
                <div class="tp-checkout-input">
                  <label>Email address <span>*</span></label>
                  <input type="email" placeholder="">
                </div>
            </div>
            <div class="col-md-12">
                <div class="tp-checkout-input">
                  <label>Order notes (optional)</label>
                  <textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const changeHandler = (e: { value: string; text: string }, index: number) => {
  console.log(e);
};
</script>
