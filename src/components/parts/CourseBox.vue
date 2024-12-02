<script setup>
import Star from 'vue-material-design-icons/Star.vue'
import { toRefs } from 'vue'
import { useLanguageStore } from '../../stores/store.js'
import VLazyImage from 'v-lazy-image'
const languageStore = useLanguageStore()

const props = defineProps({
  text_ar: String,
  text_en: String,
  image: String,
  price: Number,
  author: String,
  authImage: String,
  reviews: Number,
  slug: String
})
const { text_ar, text_en, image, price, author, authImage } = toRefs(props)
</script>
<template>
  <router-link :to="{ name: 'courses.single', params: { slug: `${slug}` } }">
  <div class="w-fit mx-auto" :dir="languageStore.direction">
    <div class="relative w-[290px] h-[300px]">
      <v-lazy-image src-placeholder="/images/logo.png" :src="image" alt="" class="w-full h-full" />
      <div
        id="price"
        :class="languageStore.direction == 'ltr' ? 'right-6' : 'left-6'"
        class="text-white bg-[#ffc600] absolute p-3 rounded-full bottom-10 z-10 cursor-pointer hover:bg-[#fc5600]"
      >
        ${{ price }}
      </div>
      <div
        id="by"
        class="flex items-center justify-between px-2 py-3 bg-black opacity-70 absolute w-full bottom-0"
      >
        <div class="flex items-center gap-3 cursor-pointer">
          <img class="rounded-full w-[40px] h-[40px]" :src="authImage" alt="" />
          <span class="text-white hover:text-[#ffc600]">{{ author }}</span>
        </div>
        <Star fillColor="#ffc600" />
      </div>
    </div>
    <p class="text-lg mt-2 cursor-pointer hover:text-[#ffc600]">
      <span class="mr-2">({{ reviews }} Reviews)</span>
      <span v-if="languageStore.langUrl == 'ar'">{{ text_ar }}</span>
      <span v-else>{{ text_en }}</span>
    </p>
  </div>
</router-link>
</template>
