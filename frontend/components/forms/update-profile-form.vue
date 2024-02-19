<template>
  <form @submit.prevent="handleSubmit">
      <div class="row">
        <div class="col-xxl-6 col-md-6">
            <div class="profile__input-box">
              <div class="profile__input">
                  <input type="text" placeholder="Enter your username" value="Shahnewaz Sakil">
                  <span>
                    <svg-user-3/>
                  </span>
              </div>
            </div>
        </div>
        
        <div class="col-xxl-6 col-md-6">
            <div class="profile__input-box">
              <div class="profile__input">
                  <input type="email" placeholder="Enter your email" value="example@mail.com">
                  <span>
                    <svg-email/>                                           
                  </span>
              </div>
            </div>
        </div>
        <div class="col-xxl-6 col-md-6">
            <div class="profile__input-box">
              <div class="profile__input">
                  <input type="text" placeholder="Enter username" value="shahnewzname">
                  <span>
                    <i class="fa-brands fa-facebook-f"></i>
                  </span>
              </div>
            </div>
        </div>
        <div class="col-xxl-6 col-md-6">
            <div class="profile__input-box">
              <div class="profile__input">
                  <input type="text" placeholder="Enter username" value="shahnewzname">
                  <span><i class="fa-brands fa-twitter"></i></span>
              </div>
            </div>
        </div>
        <div class="col-xxl-6 col-md-6">
            <div class="profile__input-box">
              <div class="profile__input">
                  <input type="text" placeholder="Enter your number" value="0123 456 7889">
                  <span>
                    <svg-phone-2/>                                                                                      
                  </span>
              </div>
            </div>
        </div>
        <div class="col-xxl-6 col-md-6">
            <div class="profile__input-box">
              <div class="profile__input">
                  <ui-nice-select
                  :options="[
                    { value: 'Male', text: 'Male' },
                    { value: 'Female', text: 'Female' },
                    { value: 'Others', text: 'Others' }
                  ]"
                  name="Male"
                  :default-current="0"
                  @onChange="changeHandler"
                />
              </div>
            </div>
        </div>
        <div class="col-xxl-12">
            <div class="profile__input-box">
              <div class="profile__input">
                  <input type="text" placeholder="Enter your address" value="3304 Randall Drive">
                  <span>
                    <svg-address/>
                  </span>
              </div>
            </div>
        </div>

        <div class="col-xxl-12">
            <div class="profile__input-box">
              <div class="profile__input">
                  <textarea placeholder="Enter your bio">Hi there, this is my bio...</textarea>
              </div>
            </div>
        </div>
        <div class="col-xxl-12">
            <div class="profile__btn">
              <button type="submit" class="tp-btn">Update Profile</button>
            </div>
        </div>
      </div>
  </form>
</template>

<script setup lang="ts">
const changeHandler = (e: { value: string; text: string }, index: number) => {
  console.log(e);
};
const handleSubmit = () => {
  console.log('submitted')
}
</script>

