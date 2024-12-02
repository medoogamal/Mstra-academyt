<script setup>
import EmailOutline from 'vue-material-design-icons/EmailOutline.vue'
import FaceAgent from 'vue-material-design-icons/FaceAgent.vue'
import { useLanguageStore } from '../../stores/store.js'
import Register from 'vue-material-design-icons/AccountBadge.vue'
import Login from 'vue-material-design-icons/Lock.vue'

const languageStore = useLanguageStore()
</script>

<template>
  <div
    id="header"
    class="w-full h-[63px] bg-[#f8f9fa] dark:bg-[#221616] py-2 text-[#51be78]  md:block hidden"
  >
    <div class="flex items-center justify-around container mx-auto">
      <!-- Email Section -->
      <div class="items-center gap-3 text-sm lg:flex hidden">
        <EmailOutline :size="23" fillColor="#51be78" />
        <p>mstra@mstra.online</p>
          <!-- Contact Section -->
      <div class="flex items-center gap-3 text-sm ml-2">
        <FaceAgent :size="23" fillColor="#51be78" />
        <div>
          <p >{{ languageStore.lang.header['callUs'] }}</p>
          <span class="text-[#51be78]">01121034599</span>
        </div>
      </div>
      </div>

      <!-- Ticker Section -->
      <div class="relative overflow-hidden w-full max-w-[300px] h-[25px] flex items-center cursor-pointer" >
        <div class="ticker-content whitespace-nowrap">
          ⏳ خصم 50% علي كورس التغزيه العلاجية اضغط هنا واستمتع بالكورس⏳
        </div>
      </div>

      <div class="flex items-center gap-4 text-sm">
        <div class="flex items-center cursor-pointer">
          <Login :size="20" fillColor="#51be78"/>
          <p class="">{{ languageStore.lang.header['login'] }}</p>
        </div>
        <div class="flex items-center cursor-pointer bg-[#51be78] text-white px-6 py-2 ">
        <Register :size="22" fillColor="#fff"/>
        <p class="ml-1">{{ languageStore.lang.header['register'] }}</p>
      </div>
      </div>

    
    </div>
  </div>
</template>

<style scoped>
/* Container to hide overflowing content */
.overflow-hidden {
  overflow: hidden;
  position: relative;
}

/* Ticker content with animation */
.ticker-content {
  display: inline-block;
  position: absolute;
  white-space: nowrap;
  animation: ticker-scroll 10s linear infinite;
}

/* Keyframes for smooth scrolling effect */
@keyframes ticker-scroll {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

</style>