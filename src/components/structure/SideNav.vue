<script setup>
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import CloseBox from 'vue-material-design-icons/CloseBox.vue'
import Search from 'vue-material-design-icons/Magnify.vue'
import Shopping from 'vue-material-design-icons/Shopping.vue'
// import Earth from 'vue-material-design-icons/Earth.vue'
import User from 'vue-material-design-icons/Account.vue'
import light from 'vue-material-design-icons/WeatherSunny.vue'
import dark from 'vue-material-design-icons/WeatherNight.vue'

import { useLanguageStore } from '../../stores/store.js'
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const languageStore = useLanguageStore()

const emit = defineEmits(['closeSideNav'])
let openServises = ref(false)
const router = useRouter()

const currentRoute = ref(`/${router.currentRoute.value.path.slice(1)}`)
</script>

<template>
  <div id="overlay" class="fixed top-0 right-0 w-full h-full z-40 bg-black opacity-60"></div>
  <div>
    <CloseBox
      class="fixed top-0 right-[280px] cursor-pointer z-50"
      :size="40"
      @click="emit('closeSideNav')"
    />
    <div
      :dir="languageStore.direction"
      class="fixed top-0 right-0 bg-white dark:bg-[#0e0b0b] dark:text-white z-50 w-[280px] h-full text-right"
    >
      <ul class="">
        <router-link :to="`/${languageStore.langUrl}`">
          <div id="link" class="flex items-center justify-between hover:text-orange-300">
            <ChevronLeft />
            <li class="cursor-pointer hover:text-[#fea555]">
              {{ languageStore.lang.header['home'] }}
            </li>
          </div>
        </router-link>
        <router-link :to="`/${languageStore.langUrl}/courses`">
          <div id="link" class="flex items-center justify-between hover:text-orange-300">
            <ChevronLeft />
            <li class="cursor-pointer hover:text-[#fea555]">
              {{ languageStore.lang.header['courses'] }}
            </li>
          </div>
        </router-link>
        <router-link :to="`/${languageStore.langUrl}/events`">
          <div id="link" class="flex items-center justify-between hover:text-orange-300">
            <ChevronLeft />
            <li class="cursor-pointer hover:text-[#fea555]">
              {{ languageStore.lang.header['events'] }}
            </li>
          </div>
        </router-link>
        <router-link :to="`/${languageStore.langUrl}/library`">
          <div id="link" class="flex items-center justify-between hover:text-orange-300">
            <ChevronLeft />
            <li
              class="cursor-pointer hover:text-[#fea555]"
              :class="currentRoute.includes('library') ? 'router-link-active' : ''"
            >
              {{ languageStore.lang.header['library'] }}
            </li>
          </div>
        </router-link>
        <router-link :to="`/${languageStore.langUrl}/blogs`">
          <div id="link" class="flex items-center justify-between hover:text-orange-300">
            <ChevronLeft />
            <li class="cursor-pointer hover:text-[#fea555]">
              {{ languageStore.lang.header['article'] }}
            </li>
          </div>
        </router-link>
        <router-link :to="`/${languageStore.langUrl}/consultant`">
          <div id="link" class="flex items-center justify-between hover:text-orange-300">
            <ChevronLeft />
            <li class="cursor-pointer hover:text-[#fea555]">
              {{ languageStore.lang.header['mentor'] }}
            </li>
          </div>
        </router-link>
        <div
          @click="openServises = !openServises"
          id="link"
          class="flex items-center justify-between hover:text-orange-300"
          :class="currentRoute.includes('services') ? 'router-link-active' : ''"
        >
          <ChevronLeft :class="openServises ? ' -rotate-90 ' : 'rotate-0'" />
          <li class="transition-all duration-500 cursor-pointer hover:text-[#fea555]">
            {{ languageStore.lang.header['service'] }}
          </li>
        </div>

        <ul
          v-if="openServises"
          class="z-20 px-3 py-2 dark:bg-[#07294d] bg-[#f7f5f5] rounded dark:text-white mx-2 my-1"
        >
          <div class="relative" id="subLinks">
            <router-link :to="`/${languageStore.langUrl}/blogs/pricing`">
              <li
                class="mb-1.5 text-sm cursor-pointer transition-all duration-500 hover:text-[#fea555] hover:-translate-x-3"
              >
                pricing
              </li>
            </router-link>
            <router-link :to="`/${languageStore.langUrl}/services/teachers`">
              <li
                class="mb-1.5 text-sm cursor-pointer transition-all duration-500 hover:text-[#fea555] hover:-translate-x-3"
              >
                {{ languageStore.lang.footer['teachers'] }}
              </li>
            </router-link>
            <router-link :to="`/${languageStore.langUrl}/services/contact-us`">
              <li
                class="mb-1.5 text-sm cursor-pointer transition-all duration-500 hover:text-[#fea555] hover:-translate-x-3"
              >
                {{ languageStore.lang.footer['contact'] }}
              </li>
            </router-link>
            <li
              class="mb-1.5 text-sm cursor-pointer transition-all duration-500 hover:text-[#fea555] hover:-translate-x-3"
            >
              {{ languageStore.lang.footer['faqs'] }}
            </li>
            <router-link :to="`/${languageStore.langUrl}/services/about-us`">
              <li
                class="mb-1.5 text-sm cursor-pointer transition-all duration-500 hover:text-[#fea555] hover:-translate-x-3"
              >
                {{ languageStore.lang.footer['aboutUs'] }}
              </li>
            </router-link>
          </div>
        </ul>
      </ul>

      <div id="icons" class="items-center gap-3 flex justify-center mt-4">
        <Search :size="22" class="cursor-pointer hover:text-[#fea555]" />
        <Shopping :size="22" class="cursor-pointer hover:text-[#fea555]" />

        <User :size="22" class="cursor-pointer hover:text-[#fea555]" />
        <dark
          v-if="!isDark"
          @click="toggleDark()"
          :size="22"
          class="cursor-pointer hover:text-[#fea555]"
        />
        <light
          v-if="isDark"
          @click="toggleDark()"
          :size="22"
          class="cursor-pointer hover:text-[#fea555]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
#link {
  padding: 10px 15px;
  border-bottom: 1px solid rgba(243, 237, 237, 0.1);
  cursor: pointer;
  position: relative;
}
#link::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 0%;
  background-color: #ddd;
  opacity: 0.15;
  z-index: -1;
  transition: 0.5s ease-in-out;
}
#link:hover:before {
  width: 100%;
}
</style>
<style scoped>
li {
  text-transform: uppercase;
}
.router-link-active {
  color: #ffc600;
}
</style>
