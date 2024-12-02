<script setup>
import { ref, toRefs, watchEffect } from 'vue'
import { useLanguageStore } from '../../stores/store.js'
import VLazyImage from 'v-lazy-image'

const languageStore = useLanguageStore()
const props = defineProps({
  image: String,
  name: String,
  parentName: String,
  parentPath: String
})
const { image, name, parentPath } = toRefs(props)
let url = ref()

watchEffect(() => {
  if (parentPath.value == '') {
    url.value = `/${languageStore.langUrl}/${name.value.toLowerCase()}`
  } else {
    url.value = `/${languageStore.langUrl}/${parentPath.value}/${name.value.toLowerCase()}`
  }
})
</script>

<template>
  <div class="relative">
    <div class="relative w-full md:h-[340px] h-[170px] overflow-hidden img">
      <v-lazy-image src-placeholder="/images/logo.png" :src="image" class="w-full h-full" alt="" />
      <div
        id="text"
        :class="languageStore.direction == 'ltr' ? 'left-10 md:left-20' : 'right-10 md:right-20'"
        class="absolute md:top-[50%] top-[20%] cursor-pointer z-10"
      >
        <h1 class="text-white md:text-5xl text-4xl font-extrabold mb-2">{{ name }}</h1>

        <p class="text-white font-bold md:text-xl">
          <router-link
            class="hover:text-[#ffc600]"
            :to="`/${languageStore.langUrl}/${parentPath}`"
            >{{ parentName }}</router-link
          >
          /
          <router-link class="text-[#ffc600]" :to="`${url}`">{{ name }}</router-link>
        </p>
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
  background-color: rgba(142, 130, 155, 0.8);
  opacity: 0.5;
  z-index: 3;
}
</style>
