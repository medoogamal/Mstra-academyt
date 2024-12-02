<script setup>
import { toRefs } from 'vue'
import { useLanguageStore } from '../../stores/store.js'
import VLazyImage from 'v-lazy-image'

const languageStore = useLanguageStore()
const props = defineProps({
  image: String,
  text: String,
  subText: String
})
const { image, text, subText } = toRefs(props)
</script>

<template>
  <div class="relative w-full h-full overflow-hidden">
    <div class="img relative">
      <v-lazy-image
        src-placeholder="/images/logo.png"
        :src="image"
        :class=" `home-slider-image bg-[url(${image})] w-full bg-cover relative md:scale-x-100 scale-x-[2.5]`"
        alt=""
      />
    </div>
    <div
      id="text"
      :class="languageStore.direction == 'ltr' ? ' mx-auto text-center left-[50%] -translate-x-[50%]' : ' mx-auto text-center left-[50%]  -translate-x-[50%]'"
      class="absolute top-[50%] -translate-y-[50%]  cursor-pointer w-[60%] z-10"
    >
      <h1 class="text-white sm:text-8xl text-5xl font-extrabold mb-5">{{ text }}</h1>
      <p class="text-[#eedc82] md:text-xl text-xs font-bold mb-3 md:mb-5" v-if="subText">
        {{ subText }}
      </p>

      <div id="join" class="mt-10">
        <router-link
          to=""
          class="bg-[#51be78] text-white px-6 py-2 text-xl"
          >
          Start Trial now</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.img::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 3;
}
.home-slider-image{
height: 100vh;
}
</style>
