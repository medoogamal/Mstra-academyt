<script setup>
import { toRefs } from 'vue'
import { useLanguageStore } from '../../stores/store.js'
import MainButton from './MainButton.vue'
const languageStore = useLanguageStore()

const props = defineProps({
  text: String,
  image: String
})
const { text, image } = toRefs(props)
</script>
<template>
  <div
    class="w-fit mx-auto dark:border dark:border-gray-500 dark:rounded-lg overflow-hidden"
    :dir="languageStore.direction"
  >
    <div class="bg-white dark:bg-black rounded-lg flex overflow-hidden">
      <div class="md:w-[360px] h-[310px] overflow-hidden relative cursor-pointer p-2">
        <img :src="image" alt="" class="w-[310px] h-full" />
      </div>
      <div>
        <div>
          <div class="cursor-pointer px-3 mt-8">
            <p class="text-lg hover:text-[#ffc600] font-bold">{{ text }}</p>
          </div>
          <div class="mt-2 cursor-pointer px-3">
            <p class="text-md hover:text-[#ffc600]">
              تاب يتحدث عن .. أهمية الصباح وكيفية الاستعداد ليومك . كما يشرح كيف برنامج مدته ثلاثين
              يوما لجعل صباحك نشط …
            </p>
          </div>
        </div>
        <div class="px-2 py-5 w-full bottom-0">
          <MainButton text="Details" class="rounded-xl md:!w-[30%] w-[50%] mx-2 my-2" />
        </div>
      </div>
    </div>
  </div>
</template>
