<script setup>
import Star from 'vue-material-design-icons/Star.vue'
import VLazyImage from 'v-lazy-image'
import { toRefs } from 'vue'
import { useLanguageStore } from '../../stores/store.js'
import MainButton from './MainButton.vue'
const languageStore = useLanguageStore()

const props = defineProps({
  text: String,
  image: String,
  price: String,
  author: String,
  reviews: String
})
const { text, image, price, author } = toRefs(props)
</script>
<template>
  <div class="w-fit mx-auto" :dir="languageStore.direction">
    <div class="bg-white dark:bg-black rounded-lg">
      <div class="w-[300px] h-[300px] overflow-hidden relative rounded-t-lg cursor-pointer">
        <v-lazy-image
          src-placeholder="/images/logo.png"
          :src="image"
          alt=""
          class="w-[300px] h-[280px]"
        />
        <div
          id="price"
          :class="languageStore.direction == 'ltr' ? 'right-6' : 'left-6'"
          class="flex items-center text-white bg-[#ffc600] absolute p-3 rounded-full bottom-0 z-10 cursor-pointer hover:bg-[#fc5600]"
        >
          <div v-if="price.toLocaleLowerCase() !== 'free'">$</div>
          {{ price }}
        </div>
      </div>

      <div>
        <div class="mt-2 cursor-pointer px-3">
          <div class="flex items-center gap-2 text-xs">
            <Star :size="15" fillColor="#ffc600" />
            <span class="">({{ reviews }} Reviews)</span>
          </div>
          <p class="text-lg hover:text-[#ffc600]">{{ text }}</p>
        </div>
      </div>
      <div id="by" class="flex items-center justify-between px-2 py-5 w-full bottom-0">
        <div class="flex items-center gap-3 cursor-pointer">
          <span class="dark:text-white hover:text-[#ffc600]">{{ author }}</span>
        </div>
      </div>
      <div class="cursor-pointer flex items-center gap-2">
        <MainButton text="Details" class="rounded-xl md:!w-[30%] w-[50%] mx-2 my-2" />
      </div>
    </div>
  </div>
</template>
