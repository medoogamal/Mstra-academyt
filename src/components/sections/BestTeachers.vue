<script setup>
import MainTitle from '../../components/parts/MainTitle.vue'
import Book from 'vue-material-design-icons/BookOutline.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules'
import VLazyImage from 'v-lazy-image'

const modules = [Autoplay, Navigation, Pagination, A11y]
import { useLanguageStore } from '../../stores/store.js'
import { toRefs } from 'vue'
const languageStore = useLanguageStore()

const props = defineProps({
  teachers: Array
})
const { teachers } = toRefs(props)
</script>

<template>
  <div id="best-teachers">
    <div class="md:mx-10 mx-5 flex gap-5 lg:flex-row flex-col">
      <div class="">
        <MainTitle
          text="Best Teachers"
          :class="languageStore.direction == 'ltr' ? 'lg:!ml-8' : 'lg:!mr-8'"
          class="lg:!mb-8"
        />
        <div class="flex flex-wrap w-full gap-3">
          <div
            v-for="teacher in teachers"
            :key="teacher"
            class="box mx-2 w-full md:w-[40%] md:mx-0 flex gap-3 items-center dark:bg-black bg-white p-8 rounded-lg"
          >
            <v-lazy-image
              src-placeholder="/images/logo.png"
              :src="teacher.account_image"
              class="w-[50px] h-[50px] rounded-full"
              alt=""
            />
            <div>
              <h3 class="font-bold text-lg hover:text-[#ffc600] cursor-pointer">
                {{ teacher.full_name}} 
              </h3>
              <div class="flex gap-2 items-center">
                <Book :size="18" fillColor="#ffc600" />
                <p>{{ teacher.course_count }} Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#07294d] lg:w-[800px] h-[500px] p-10 relative rounded-lg overflow-hidden">
        <div>
          <h1 class="text-white text-4xl font-extrabold">Student's Opinion</h1>

          <!-- start slider -->
          <swiper
            dir="ltr"
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            :autoplay="{
              delay: 9000,
              disableOnInteraction: false
            }"
            class="w-[400px] absolute top-[100px] left-[13px]"
          >
            <swiper-slide
              ><div class="w-[70%] mt-8 text-white cursor-pointer">
                <img src="/images/quotation.png" class="w-[70px] mb-2" alt="" />
                <p class="mb-8">
                  الرحلات و اتمنى الاكثار منها و زيارة جميع الاماكن المميزة مثل وادى الحيتان و سانت
                  كاترين و الطور و الاقصر غيرهم
                </p>
                <div>
                  <h6>Heba Ali ibrahim</h6>
                  <span>طالب</span>
                </div>
              </div></swiper-slide
            >
            <swiper-slide
              ><div class="w-[70%] mt-8 text-white cursor-pointer">
                <img src="/images/quotation.png" class="w-[70px] mb-2" alt="" />
                <p class="mb-8">
                  الرحلات و اتمنى الاكثار منها و زيارة جميع الاماكن المميزة مثل وادى الحيتان
                </p>
                <div>
                  <h6>Heba Ali ibrahim</h6>
                  <span>طالب</span>
                </div>
              </div></swiper-slide
            >
            <swiper-slide
              ><div class="w-[70%] mt-8 text-white cursor-pointer">
                <img src="/images/quotation.png" class="w-[70px] mb-2" alt="" />
                <p class="mb-8">الرحلات و اتمنى الاكثار منها و زيارة جميع الاماكن المميزة</p>
                <div>
                  <h6>Heba Ali ibrahim</h6>
                  <span>طالب</span>
                </div>
              </div></swiper-slide
            >
            ...
          </swiper>
          <!-- end slider -->
          <img src="/images/happy.png" class="absolute bottom-0 -right-1" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
