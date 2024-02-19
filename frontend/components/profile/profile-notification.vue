<template>
  <div class="profile__notification">
      <div class="profile__notification-top mb-30">
        <h3 class="profile__notification-title">My activity settings</h3>
        <p>Stay up to date with notification on activity that involves you including mentions, messages, replies to your bids, new items, sale and administrative updates </p>
      </div>
      <div class="profile__notification-wrapper">
        <div class="profile__notification-item mb-20">
            <div class="form-check form-switch d-flex align-items-center">
              <input class="form-check-input" type="checkbox" role="switch" id="like" checked>
              <label class="form-check-label" for="like">Like & Follows Notifications</label>
            </div>
        </div>
        <div class="profile__notification-item mb-20">
            <div class="form-check form-switch d-flex align-items-center">
              <input class="form-check-input" type="checkbox" role="switch" id="post" checked>
              <label class="form-check-label" for="post">Post, Comments & Replies Notifications</label>
            </div>
        </div>
        <div class="profile__notification-item mb-20">
            <div class="form-check form-switch d-flex align-items-center">
              <input class="form-check-input" type="checkbox" role="switch" id="new" checked>
              <label class="form-check-label" for="new">New Product Notifications</label>
            </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">

</script>

