<template>
 <div class="profile__main">
      <div class="profile__main-top pb-80">
        <div class="row align-items-center">
            <div class="col-md-6">
              <div class="profile__main-inner d-flex flex-wrap align-items-center">
                  <div class="profile__main-thumb">
                    <img src="/img/users/user-10.jpg" alt="">
                    <div class="profile__main-thumb-edit">
                        <input id="profile-thumb-input" class="profile-img-popup" type="file">
                        <label for="profile-thumb-input"><i class="fa-light fa-camera"></i></label>
                    </div>
                  </div>
                  <div class="profile__main-content">
                    <h4 class="profile__main-title">Welcome Mr. Admin!</h4>
                    <p>You have <span>08</span> notifications</p>
                  </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile__main-logout text-sm-end">
                  <nuxt-link href="/login" class="tp-logout-btn">Logout</nuxt-link>
              </div>
            </div>
        </div>
      </div>
      <div class="profile__main-info">
        <div class="row gx-3">
            <div class="col-md-3 col-sm-6">
              <div class="profile__main-info-item">
                  <div class="profile__main-info-icon">
                    <span>
                        <span class="profile-icon-count profile-download">2</span>
                        <svg-download/>
                    </span>
                  </div>
                  <h4 class="profile__main-info-title">Downlaods</h4>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="profile__main-info-item">
                  <div class="profile__main-info-icon">
                    <span>
                        <span class="profile-icon-count profile-order">5</span>
                      <svg-orders/>
                    </span>
                  </div>
                  <h4 class="profile__main-info-title">Orders</h4>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="profile__main-info-item">
                  <div class="profile__main-info-icon">
                    <span>
                        <span class="profile-icon-count profile-wishlist">10</span>
                        <svg-wishlist-2/>
                    </span>
                  </div>
                  <h4 class="profile__main-info-title">Wishlist</h4>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="profile__main-info-item">
                  <div class="profile__main-info-icon">
                    <span>
                        <span class="profile-icon-count profile-wishlist">07</span>
                        <svg-gift-box/>
                    </span>
                  </div>
                  <h4 class="profile__main-info-title">Gift Box</h4>
              </div>
            </div>
        </div>
      </div>
 </div>
</template>

<script setup lang="ts">

</script>
