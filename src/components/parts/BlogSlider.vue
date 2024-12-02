<script setup>
import { toRefs } from 'vue'
import { useLanguageStore } from '../../stores/store.js'
import Calendar from 'vue-material-design-icons/Calendar.vue'
import Comments from 'vue-material-design-icons/Comment.vue'
import eye from 'vue-material-design-icons/Eye.vue'
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
  <div class="relative w-full md:h-[450px] h-[190px] overflow-hidden">
    <div class="img relative">
      <v-lazy-image
        src-placeholder="/images/logo.png"
        :src="image"
        class="w-full md:h-[450px] h-[190px]"
        alt=""
      />
    </div>
    <div
      id="text"
      :class="languageStore.direction == 'ltr' ? 'left-10 md:left-20' : 'right-10 md:right-20'"
      class="absolute md:top-[40%] top-[15%] cursor-pointer w-[60%] z-10"
    >
      <h1 class="text-white md:text-3xl text-sm font-extrabold mb-5 hover:text-red-300">
        {{ text }}
      </h1>
      <p class="text-[#eedc82] md:text-xl text-xs font-extrabold mb-3 md:mb-5" v-if="subText">
        {{ subText }}
      </p>
    </div>
    <div id="box" class="text-black flex gap-3 items-center">
      <div class="flex gap-3 items-center">
        <calendar />
        <span>Aug 16, 2023</span>
      </div>
      <div class="flex gap-3 items-center">
        <comments />
        <span>comments</span>
      </div>
      <div class="flex gap-3 items-center">
        <eye />
        <span>1</span>
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
  opacity: 0.5;
  z-index: 3;
}
#box {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 130px 30% 80px 80px;
  background: -webkit-linear-gradient(transparent, rgba(232, 232, 232, 0.9) 70%);
  background: linear-gradient(transparent, rgba(232, 232, 232, 0.9) 70%);
  box-sizing: border-box;
  z-index: 5;
}
</style>
