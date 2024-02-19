<template>
  <form @submit="onSubmit">
    <div class="tp-login-input-wrapper">
      <div class="tp-login-input-box">
        <div class="tp-login-input">
          <input
            id="email"
            type="email"
            placeholder="shofy@mail.com"
            v-bind="email"
          />
        </div>
        <div class="tp-login-input-title">
          <label for="email">Your Email</label>
        </div>
        <err-message :msg="errors.email" />
      </div>
      <div class="tp-login-input-box">
        <div class="p-relative">
          <div class="tp-login-input">
            <input
              id="tp_password"
              :type="showPass ? 'text' : 'password'"
              name="password"
              placeholder="Min. 6 character"
              v-bind="password"
            />
          </div>
          <div class="tp-login-input-eye" id="password-show-toggle">
            <span class="open-eye" @click="togglePasswordVisibility">
              <template v-if="showPass">
                <svg-open-eye />
              </template>
              <template v-else>
                <svg-close-eye />
              </template>
            </span>
          </div>
          <div class="tp-login-input-title">
            <label for="tp_password">Password</label>
          </div>
        </div>
        <err-message :msg="errors.password" />
      </div>
    </div>
    <div
      class="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20"
    >
      <div class="tp-login-remeber">
        <input id="remeber" type="checkbox" />
        <label for="remeber">Remember me</label>
      </div>
      <div class="tp-login-forgot">
        <nuxt-link href="/forgot">Forgot Password?</nuxt-link>
      </div>
    </div>
    <div class="tp-login-bottom">
      <button type="submit" class="tp-login-btn w-100">Login</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";

let showPass = ref<boolean>(false);

interface IFormValues {
  email?: string | null;
  password?: string | null;
}
const { errors, handleSubmit, defineInputBinds, resetForm } =
  useForm<IFormValues>({
    validationSchema: yup.object({
      email: yup.string().required().email().label("Email"),
      password: yup.string().required().min(6).label("Password"),
    }),
  });

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
  resetForm();
});

const togglePasswordVisibility = () => {
  showPass.value = !showPass.value;
};

const email = defineInputBinds("email");
const password = defineInputBinds("password");
</script>
