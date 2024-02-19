<template>
  <form @submit="onSubmit">
    <div
      class="tp-product-details-review-form-rating d-flex align-items-center"
    >
      <p>Your Rating :</p>
      <div
        class="tp-product-details-review-form-rating-icon d-flex align-items-center"
      >
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
        <span><i class="fa-solid fa-star"></i></span>
      </div>
    </div>
    <div class="tp-product-details-review-input-wrapper">
      <div class="tp-product-details-review-input-box">
        <div class="tp-product-details-review-input">
          <Field name="message" v-slot="{ field }">
            <textarea v-bind="field" id="message" name="message" placeholder="Write your message here..."></textarea>
          </Field>
        </div>
        <div class="tp-product-details-review-input-title">
          <label for="message">Write Review</label>
        </div>
        <err-message :msg="errors.message" />
      </div>
      <div class="tp-product-details-review-input-box">
        <div class="tp-product-details-review-input">
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Shahnewaz Sakil"
            v-bind="name"
          />
        </div>
        <div class="tp-product-details-review-input-title">
          <label for="name">Your Name</label>
        </div>
        <err-message :msg="errors.name" />
      </div>
      <div class="tp-product-details-review-input-box">
        <div class="tp-product-details-review-input">
          <input
            name="email"
            id="email"
            type="email"
            placeholder="shofy@mail.com"
            v-bind="email"
          />
        </div>
        <div class="tp-product-details-review-input-title">
          <label for="email">Your Email</label>
        </div>
        <err-message :msg="errors.email" />
      </div>
    </div>
    <div class="tp-product-details-review-suggetions mb-20">
      <div class="tp-product-details-review-remeber">
        <input id="remeber" type="checkbox" />
        <label for="remeber">Save my name, email, and website in this browser for the next time I
          comment.
        </label>
      </div>
    </div>
    <div class="tp-product-details-review-btn-wrapper">
      <button type="submit" class="tp-product-details-review-btn">Submit</button>
    </div>
  </form>
</template>

<script setup lang="ts"> 
import { useForm,Field } from 'vee-validate';
import * as yup from 'yup';

interface IFormValues {
  name?: string | null;
  email?: string | null;
  message?: string | null;
}
const { errors, handleSubmit, defineInputBinds,resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    message: yup.string().required().label("Message")
  }),
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
  resetForm()
});

const name = defineInputBinds('name');
const email = defineInputBinds('email');
</script>