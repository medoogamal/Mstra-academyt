<script setup>
import Search from 'vue-material-design-icons/Magnify.vue'
import Shopping from 'vue-material-design-icons/Shopping.vue'
// import Earth from 'vue-material-design-icons/Earth.vue'
import User from 'vue-material-design-icons/Account.vue'
import light from 'vue-material-design-icons/WeatherSunny.vue'
import dark from 'vue-material-design-icons/WeatherNight.vue'
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue'
import Menu from 'vue-material-design-icons/Menu.vue'
import Logout from 'vue-material-design-icons/Logout.vue'
import SideNav from './SideNav.vue'
import { useAuthStore } from '../../stores/auth-store'
import Swal from 'sweetalert2'
const AuthStore = useAuthStore()

import { onBeforeUnmount, onMounted, onUnmounted, ref, watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useLanguageStore } from '../../stores/store.js'
import { useDark, useToggle } from '@vueuse/core'

import en from '../../en'
import ar from '../../ar'
import axios from 'axios'
import Facebook from 'vue-material-design-icons/Facebook.vue'
import Instagram from 'vue-material-design-icons/Instagram.vue'
import Linkedin from 'vue-material-design-icons/Linkedin.vue'

let token = AuthStore.token

const isDark = useDark()
const toggleDark = useToggle(isDark)
const languageStore = useLanguageStore()
const router = useRouter()
const selectedLanguage = ref('en') // Default language is English
const lang = ref(en)
const direction = ref('ltr')
const isScroll = ref(false)
let openSideNav = ref(false)
let openServises = ref(false)
let openUser = ref(false)

const currentRoute = ref(`/${router.currentRoute.value.path.slice(1)}`)

watchEffect(() => {
  const langPrefix = `/${router.currentRoute.value.params.lang}`
  if (router.currentRoute.value.path.startsWith(langPrefix)) {
    currentRoute.value = router.currentRoute.value.path.slice(langPrefix.length)
  } else {
    currentRoute.value = router.currentRoute.value.path
  }
})

function changeLanguage() {
  if (selectedLanguage.value === 'ar') {
    router.push(`/ar${currentRoute.value}`)
  } else {
    router.push(`/en${currentRoute.value}`)
  }
}

// This will update the selectedLanguage value based on the URL when the page loads
watch(
  () => router.currentRoute.value.params,
  (params) => {
    if (params.lang === 'ar') {
      selectedLanguage.value = 'ar'
      lang.value = ar
      direction.value = 'rtl'
      languageStore.changeLanguage('ar')
    } else {
      selectedLanguage.value = 'en'
      lang.value = en
      direction.value = 'ltr'
      languageStore.changeLanguage('en')
    }
  },
  { immediate: true }
)
const handleScroll = () => {
  isScroll.value = window.scrollY > 0
}
const upPage = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
const progressBarWidth = ref('0%')

const updateProgressBar = () => {
  const scrollPercentage =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  progressBarWidth.value = `${scrollPercentage}%`
}

onMounted(() => {
  window.addEventListener('scroll', updateProgressBar)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgressBar)
})

const logout = async () => {
  try {
    axios.post('/profile/api/logout/', {
      headers: {
        token: AuthStore.token
      }
    })

    AuthStore.clearUserDetails()

    Swal.fire({
      title: `Louged Out`,
      text: 'You are succesfully Loged out',
      icon: 'success',
      confirmButtonText: 'Go To Login page'
    }).then(() => {
      router.push(`/${languageStore.langUrl}/profile/login`)
    })
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div
    id="navigation"
    :class="isScroll ? 'top-0' : 'md:top-auto top-0'"
    class="fixed w-full h-[68px] py-auto border-b border-gray-300 dark:border-gray-800 bg-white dark:bg-[#1a1a1a] dark:text-white z-30"
  >
    <div class="items-center justify-around px-4 md:flex hidden">
      <div id="logo">
        <router-link to="/"><img src="https://mstra.online/assets/mstara_logo2-ILv1m-7L.png" alt="" class="w-[106px]" /></router-link>
      </div>
      <div id="links" class="flex items-center gap-3">
        <ul class="flex gap-2 lg:gap-4">
          <li class="cursor-pointer hover:text-[#51be78]">
            <router-link :to="`/${selectedLanguage}`">{{ lang.header['home'] }}</router-link>
          </li>
          <router-link :to="`/${selectedLanguage}/courses`" >
            <li class="cursor-pointer hover:text-[#51be78]">{{ lang.header['courses'] }}</li>
          </router-link>
          <router-link >
            <li
              class="cursor-pointer hover:text-[#51be78]"
              :class="currentRoute.includes('library') ? 'router-link-active' : ''"
            >
              {{ lang.header['categories'] }}
            </li>
          </router-link>
          <div class="relative">
            <li
              @click="openServises = !openServises"
              class="select-none cursor-pointer hover:text-[#51be78]"
              :class="currentRoute.includes('services') ? 'router-link-active' : ''"
            >
              {{ lang.header['service'] }}
            </li>
            <ul
              v-if="openServises"
              class="absolute z-20 bg-[#51be78] w-[150px] p-3 rounded text-white -left-2 top-8"
            >
              <div class="relative" id="subLinks">
                <router-link >
                  <li
                    class="mb-1 text-sm cursor-pointer transition-all duration-500 hover:text-[#fff] hover:translate-x-3"
                  >
                    pricing
                  </li>
                </router-link>
                <router-link :to="`/${selectedLanguage}/findmypassion`" >
                  <li
                    class="mb-1 text-sm cursor-pointer transition-all duration-500 hover:text-[#fff] hover:translate-x-3"
                  >
                    {{ lang.footer['FindMy'] }} & AI
                  </li>
                </router-link>
                <router-link >
                  <li
                    class="mb-1 text-sm cursor-pointer transition-all duration-500 hover:text-[#fff] hover:translate-x-3"
                  >
                    {{ lang.footer['contact'] }}
                  </li>
                </router-link>
                <li
                  class="mb-1 text-sm cursor-pointer transition-all duration-500 hover:text-[#fff] hover:translate-x-3"
                >
                  {{ lang.footer['faqs'] }}
                </li>
                <router-link>
                  <li
                    class="mb-1 text-sm cursor-pointer transition-all duration-500 hover:text-[#fff] hover:translate-x-3"
                  >
                    {{ lang.footer['aboutUs'] }}
                  </li>
                </router-link>
              </div>
            </ul>
          </div>
        </ul>
        <div id="icons" class="items-center gap-3 md:flex hidden">
          <Search :size="22" class="cursor-pointer hover:text-[#51be78]" />

          <select
            class="relative text-center mb-10 dark:bg-[#1a1a1a] dark:text-white top-5 ring-0 focus:ring-0 focus:border-none focus:outline-none"
            v-model="selectedLanguage"
            @change="changeLanguage"
          >
            <option value="ar" :selected="selectedLanguage === 'ar'">{{ lang.lang['ar'] }}</option>
            <option value="en" :selected="selectedLanguage === 'en'">{{ lang.lang['en'] }}</option>
          </select>

          <div class="relative">
            <User
              :size="22"
              class="cursor-pointer hover:text-[#51be78]"
              @click="openUser = !openUser"
            />
            <ul
              v-if="openUser"
              class="absolute z-20 bg-[#51be78] w-[150px] p-3 rounded text-white -left-[18px] top-8"
            >
              <div class="relative" id="subLinks">
                <router-link :to="`/dashboard`">
                  <div class="flex items-center gap-2">
                    <User :size="20" class="-mt-[1px]" />
                    <li
                      class="mb-1 text-sm cursor-pointer transition-all duration-500 hover:text-[#fff] hover:scale-105"
                    >
                      {{ lang.header['myacount'] }}
                    </li>
                  </div>
                </router-link>
                <router-link v-if="token" to="" @click="logout">
                  <div class="flex items-center gap-2">
                    <Logout :size="20" class="-mt-[1px]" />
                    <li
                      class="mb-1 text-sm cursor-pointer transition-all duration-500 hover:text-[#51be78] hover:translate-x-3"
                    >
                      {{ lang.header['logout'] }}
                    </li>
                  </div>
                </router-link>
              </div>
            </ul>
          </div>
          <dark
            v-if="!isDark"
            @click="toggleDark()"
            :size="22"
            class="cursor-pointer hover:text-[#51be78]"
          />
          <light
            v-if="isDark"
            @click="toggleDark()"
            :size="22"
            class="cursor-pointer hover:text-[#51be78]"
          />
        </div>
      </div>
      <div id="icons" class="lg:flex hidden items-center gap-1">
        <div class="bg-[#51be78] text-white px-2 py-2">
          <a href="https://www.facebook.com/p/%D9%85%D8%B3%D8%B7%D8%B1%D8%A9-Mstra-academy-61564176680664">
          <Facebook :size="23" fillColor="#fff" />
        </a>
        </div>
        <div class="bg-[#51be78] text-white px-2 py-2">
          <Instagram :size="23" fillColor="#fff" />
        </div>
        <div class="bg-[#51be78] text-white px-2 py-2">
          <Linkedin :size="23" fillColor="#fff" />
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between px-4 md:hidden">
      <div id="logo">
        <router-link to="/"><img src="https://mstra.online/assets/mstara_logo2-ILv1m-7L.png" alt="" class="w-[100px]" /></router-link>
      </div>

      <div
        id="join"
        class=""
        v-if="
          router.currentRoute.value.path !== `/${selectedLanguage}/profile/login` &&
          router.currentRoute.value.path !== `/${selectedLanguage}/profile/register`
        "
      >
        <router-link
          class="bg-[#51be78] text-white px-6 py-2 hover:bg-[#69be87]"
          >{{ lang.header['joinUs'] }}</router-link
        >
      </div>

      <div id="icons" class="items-center gap-3 flex">
        <select
          class="relative text-center mb-10 dark:bg-[#1a1a1a] dark:text-white top-5 ring-0 focus:ring-0 focus:border-none focus:outline-none"
          v-model="selectedLanguage"
          @change="changeLanguage"
        >
          <option value="ar" :selected="selectedLanguage === 'ar'">{{ lang.lang['ar'] }}</option>
          <option value="en" :selected="selectedLanguage === 'en'">{{ lang.lang['en'] }}</option>
        </select>
        <Menu @click="openSideNav = true" :size="27" class="cursor-pointer" />
      </div>
    </div>
   
  </div>
  <div class="filled" ></div>
   <!-- <div class="category-div">

   </div> -->
    
    

  <SideNav v-if="openSideNav" @closeSideNav="openSideNav = false" />

  <div
    @click="upPage"
    v-if="isScroll"
    class="bg-black fixed z-30 bottom-5 rounded-xl left-4 cursor-pointer hover:bg-slate-600"
  >
    <ChevronUp fillColor="#fff" :size="50" />
  </div>
</template>

<style scoped>
li {
  text-transform: uppercase;
}
/* .router-link-active {
  color: #51be78;
} */

.filled {
  height: 4px;
  position: fixed;
  top: 68px;
  z-index: 13;
  background-color: #51be78;
  width: 100%;
  scale: 0 1;
  transform-origin: left;
 animation: scroll-watcher linear;
 animation-timeline:scroll()
}

@keyframes scroll-watcher {
  to {scale: 1 1;}
}
#subLinks::before {
  content: '';
  position: absolute;
  top: -32px;
  left: 7px;
  border: 10px solid;
  border-color: transparent transparent #51be78 transparent;
}
/* .category-div{
  background-color: white;
  z-index: 10000;
  position: relative;
  height: 60vh;
  margin-top: 80px;
} */
</style>
