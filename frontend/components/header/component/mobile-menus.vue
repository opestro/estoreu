<template>
    <nav class="tp-main-menu-content">
      <ul v-for="(menu, i) in mobile_menu" :key="i">
        <li
          v-if="menu.homes"
          :class="`has-dropdown has-mega-menu ${isActiveMenu === menu.title?'dropdown-opened':''}`"
        >
          <a :class="`${isActiveMenu === menu.title?'expanded':''}`">
            Home
            <button
              @click="handleOpenSubMenu(menu.title)"
              :class="`dropdown-toggle-btn ${isActiveMenu === menu.title?'dropdown-opened':''}`"
            >
              <i class="fa-regular fa-angle-right"></i>
            </button>
          </a>
          <div
            :class="`home-menu tp-submenu tp-mega-menu ${isActiveMenu === menu.title ? 'active':''}`"
          >
            <div class="row row-cols-1 row-cols-lg-4 row-cols-xl-5">
              <div v-for="(home, i) in menu.home_pages" :key="i" class="col">
                <div class="home-menu-item">
                  <nuxt-link :to="home.link">
                    <div class="home-menu-thumb p-relative fix">
                      <img :src="home.img" alt="home img" />
                    </div>
                    <div class="home-menu-content">
                      <h5 class="home-menu-title">{{ home.title }}</h5>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li
          v-else-if="menu.sub_menu"
          :key="menu.id"
          :class="`has-dropdown ${isActiveMenu === menu.title?'dropdown-opened':''}`"
        >
          <a :class="`${isActiveMenu === menu.title?'expanded':''}`">
            {{ menu.title }}
            <button
              @click="handleOpenSubMenu(menu.title)"
              :class="`dropdown-toggle-btn ${isActiveMenu === menu.title?'dropdown-opened':''}`"
            >
              <i class="fa-regular fa-angle-right"></i>
            </button>
          </a>
          <ul :class="`tp-submenu ${isActiveMenu === menu.title ? 'active':''}`">
            <li v-for="(subMenu, i) in menu.sub_menus" :key="i">
              <nuxt-link :to="subMenu.link">{{ subMenu.title }}</nuxt-link>
            </li>
          </ul>
        </li>
        <li v-else :key="i">
          <nuxt-link :to="menu.link">{{ menu.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
</template>

<script setup lang="ts">
import { mobile_menu } from "@/data/menu-data";

let isActiveMenu = ref<string>("");

const handleOpenSubMenu = (title: string) => {
  if (title === isActiveMenu.value) {
    isActiveMenu.value = "";
  } else {
    isActiveMenu.value = title;
  }
};
</script>
