<template>
  <form @submit="onSubmit">
    <div class="tp-postbox-details-form">
      <h3 class="tp-postbox-details-form-title">Leave a Reply</h3>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>

      <div class="tp-postbox-details-form-wrapper">
        <div class="tp-postbox-details-form-inner">
          <div class="tp-postbox-details-input-box">
            <div class="tp-contact-input">
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Shahnewaz Sakil"
                v-bind="name"
              />
            </div>
            <div class="tp-postbox-details-input-title">
              <label for="name">Your Name</label>
            </div>
            <err-message :msg="errors.name" />
          </div>

          <div class="tp-postbox-details-input-box">
            <div class="tp-contact-input">
              <input
                name="email"
                id="email"
                type="email"
                placeholder="shofy@mail.com"
                v-bind="email"
              />
            </div>
            <div class="tp-postbox-details-input-title">
              <label for="email">Your Email</label>
            </div>
            <err-message :msg="errors.email" />
          </div>

          <div class="tp-postbox-details-input-box">
            <div class="tp-contact-input">
              <Field name="message" v-slot="{ field }">
                <textarea v-bind="field" id="message" name="message" placeholder="Write your message here..."></textarea>
              </Field>
            </div>
            <div class="tp-postbox-details-input-title">
              <label for="msg">Your Message</label>
            </div>
            <err-message :msg="errors.message" />
          </div>
        </div>
        <div class="tp-postbox-details-suggetions mb-20">
          <div class="tp-postbox-details-remeber">
            <input id="remeber" type="checkbox" />
            <label for="remeber">Save my name, email, and website in this browser for the next
              time I comment.
            </label>
          </div>
        </div>
        <div class="tp-postbox-details-input-box">
          <button class="tp-postbox-details-input-btn" type="submit">
            Post Comment
          </button>
        </div>
      </div>
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
