<template>
  <form id="contact-form" @submit="onSubmit">
      <div class="tp-contact-input-wrapper">
        <div class="tp-contact-input-box">
            <div class="tp-contact-input">
              <input name="name" id="name" type="text" placeholder="Shahnewaz Sakil" v-bind="name">
            </div>
            <div class="tp-contact-input-title">
              <label for="name">Your Name</label>
            </div>
            <err-message :msg="errors.name" />
        </div>
        <div class="tp-contact-input-box">
            <div class="tp-contact-input">
              <input name="email" id="email" type="email" placeholder="shofy@mail.com" v-bind="email">
            </div>
            <div class="tp-contact-input-title">
              <label for="email">Your Email</label>
            </div>
            <err-message :msg="errors.email" />
        </div>
        <div class="tp-contact-input-box">
            <div class="tp-contact-input">
              <input name="subject" id="subject" type="text" placeholder="Write your subject" v-bind="subject">
            </div>
            <div class="tp-contact-input-title">
              <label for="subject">Subject</label>
            </div>
            <err-message :msg="errors.subject" />
        </div>
        <div class="tp-contact-input-box">
            <div class="tp-contact-input">
              <Field name="message" v-slot="{ field }">
                <textarea v-bind="field" id="message" name="message" placeholder="Write your message here..."></textarea>
              </Field>
            </div>
            <div class="tp-contact-input-title">
              <label for="message">Your Message</label>
            </div>
            <err-message :msg="errors.message" />
        </div>
      </div>
      <div class="tp-contact-suggetions mb-20">
        <div class="tp-contact-remeber">
            <input id="remeber" type="checkbox">
            <label for="remeber">Save my name, email, and website in this browser for the next time I comment.</label>
        </div>
      </div>
      <div class="tp-contact-btn">
        <button type="submit">Send Message</button>
      </div>
  </form>
</template>

<script setup lang="ts"> 
import { useForm,Field } from 'vee-validate';
import * as yup from 'yup';

interface IFormValues {
  name?: string | null;
  email?: string | null;
  subject?: string | null;
  message?: string | null;
}
const { errors, handleSubmit, defineInputBinds,resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    subject: yup.string().required().label("Subject"),
    message: yup.string().required().label("Message")
  }),
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
  resetForm()
});

const name = defineInputBinds('name');
const email = defineInputBinds('email');
const subject = defineInputBinds('subject');
</script>
