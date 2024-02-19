<template>
  <div class="profile__password">
      <form @submit.prevent="handleSubmit">
        <div class="row">
            <div class="col-xxl-12">
              <div class="tp-profile-input-box">
                  <div class="tp-contact-input">
                    <input name="old_pass" id="old_pass" type="password">
                  </div>
                  <div class="tp-profile-input-title">
                    <label for="old_pass">Old Password</label>
                  </div>
              </div>
            </div>
            <div class="col-xxl-6 col-md-6">
              <div class="tp-profile-input-box">
                  <div class="tp-profile-input">
                    <input name="new_pass" id="new_pass" type="password">
                  </div>
                  <div class="tp-profile-input-title">
                    <label for="new_pass">New Password</label>
                  </div>
              </div>
            </div>
            <div class="col-xxl-6 col-md-6">
              <div class="tp-profile-input-box">
                  <div class="tp-profile-input">
                    <input name="con_new_pass" id="con_new_pass" type="password">
                  </div>
                  <div class="tp-profile-input-title">
                    <label for="con_new_pass">Confirm Password</label>
                  </div>
              </div>
            </div>
            <div class="col-xxl-6 col-md-6">
              <div class="profile__btn">
                  <button type="submit" class="tp-btn">Update</button>
              </div>
            </div>
        </div>
      </form>
  </div>
</template>

<script setup lang="ts">
const handleSubmit = () => {
  console.log('submitted')
}
</script>
