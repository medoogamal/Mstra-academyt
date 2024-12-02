<script setup>
import Star from 'vue-material-design-icons/Star.vue'
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue'
import profile from 'vue-material-design-icons/Account.vue'
import VLazyImage from 'v-lazy-image'
import { toRefs } from 'vue'
import { useLanguageStore } from '../../stores/store.js'
const languageStore = useLanguageStore()

const props = defineProps({
  title: String,
  image: String,
  price: Number,
  description: String,
  categoryTitle: String,
  slug: String,
  isNew: Boolean
})
const { title, image, price, categoryTitle, isNew, description } = toRefs(props)
</script>

<template>
  <router-link>
    <div class="course-box cursor-pointer border flex flex-col">
      <div class="image relative">
        <img :src="image" class="w-full h-[250px]" alt="" />
        <div class="bg-[#183661] text-white absolute top-[62%] px-8 py-3 right-0 z-10">
          {{ price }} L.E
        </div>
        <p class="bg-[#51be78] hover:bg-[#51976a] w-full mx-auto text-white px-6 -translate-y-6 py-4">
          {{ title }}
        </p>
      </div>
      <div class="text flex-grow w-[90%] mx-auto px-3">
        <h1 class="course-name text-xl mt-2 mb-4">{{ categoryTitle }}</h1>
        <p class="description">{{ description }}</p>
      </div>
      <button
        class="mb-8 block bg-[#51be78] hover:bg-[#51976a] w-fit mx-auto text-white px-6 py-2 mt-4"
      >
        {{ languageStore.lang.home['enroll'] }}
      </button>
    </div>
  </router-link>
</template>

<style scoped>
.description {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.course-box {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.course-name {
  text-align: center;
}
</style>