<script setup>
import MainLayout from '../../views/layouts/MainLayout.vue';
import { useLanguageStore } from '../../stores/store.js'
const languageStore = useLanguageStore()
import { toRefs } from 'vue'
const props = defineProps({
  text: String,
  image: String,
  description: String,

})
const { text, image, description} = toRefs(props)

</script>
<template>
        <div class="img-section h-[170px] relative overflow-hidden">
            <img :src="`${image}`" class=" w-full" alt="">
            <div :class="languageStore.direction == 'ltr'? 'absolute text-white z-10 top-[50%] left-[20%] -translate-y-[50%]':'absolute text-white z-10 top-[50%] right-[20%] -translate-y-[50%]'">
                <h1 class="text-5xl ">{{ text }}</h1>
                <p class="mt-3">{{ description }}</p>
            </div>
        </div>
</template>
<style scoped>
.img-section::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.65;
  z-index: 3;
}
</style>