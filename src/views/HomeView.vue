<script setup>
import MainLayout from './layouts/MainLayout.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules'
const modules = [Autoplay, Navigation, Pagination, A11y]
import { useLanguageStore } from '../stores/store.js'
import HomeSlider from '@/components/parts/HomeSlider.vue';
const languageStore = useLanguageStore()
import Graduate from 'vue-material-design-icons/School.vue'
import ProfessionalCoursesIcon from 'vue-material-design-icons/Briefcase.vue';
import DiplomasIcon from 'vue-material-design-icons/Certificate.vue';
import { onMounted, ref } from 'vue';
import CourseCard from '@/components/parts/CourseCard.vue';
// Function to update swiper slides per view based on screen size
let swiperSlidesPerView = ref(3)
let swiperSlidesPerView2 = ref(2)
const updateSlidesPerView2 = () => {
  if (window.innerWidth >= 768 && window.innerWidth < 1400) {
    swiperSlidesPerView2.value = 2
  } else if (window.innerWidth >= 1400) {
    swiperSlidesPerView2.value = 2
  } else if (window.innerWidth >= 600 && window.innerWidth < 768) {
    swiperSlidesPerView2.value = 2
  } else {
    swiperSlidesPerView2.value = 1
  }
}
const updateSlidesPerView = () => {
  if (window.innerWidth >= 768 && window.innerWidth < 1400) {
    swiperSlidesPerView.value = 3
  } else if (window.innerWidth >= 1400) {
    swiperSlidesPerView.value = 3
  } else if (window.innerWidth >= 600 && window.innerWidth < 768) {
    swiperSlidesPerView.value = 2
  } else {
    swiperSlidesPerView.value = 1
  }
}
onMounted(() => {
  window.addEventListener('resize', updateSlidesPerView)
})
onMounted(() => {
  updateSlidesPerView()
})
onMounted(() => {
  window.addEventListener('resize', updateSlidesPerView2)
})
onMounted(() => {
  updateSlidesPerView2()
})
const isExpanded = ref(false);

// Function to toggle the text visibility for both sections
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <MainLayout>
    <main class="dark:text-white dark:bg-transparent">
      <!-- start slider -->
      <swiper
      class="swiper-1"
        dir="ltr"
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false
        }"
      >
        
        <swiper-slide
          ><HomeSlider
            :dir="languageStore.direction"
            image="https://plus.unsplash.com/premium_photo-1683887033886-6c45d4b659f3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNhZGVteXxlbnwwfHwwfHx8MA%3D%3D"
            text="You Can Learn Anything"
        /></swiper-slide>
        <swiper-slide
          ><HomeSlider
            :dir="languageStore.direction"
            image="https://plus.unsplash.com/premium_photo-1683887033886-6c45d4b659f3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNhZGVteXxlbnwwfHwwfHx8MA%3D%3D"
            text="You Can Learn Anything"
        /></swiper-slide>
        <swiper-slide
          ><HomeSlider
            :dir="languageStore.direction"
            image="https://plus.unsplash.com/premium_photo-1683887033886-6c45d4b659f3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNhZGVteXxlbnwwfHwwfHx8MA%3D%3D"
            text="You Can Learn Anything"
        /></swiper-slide>
        ...
      </swiper>
      <!-- end slider -->
      <div class="w-full ">
        <!-- start metion  -->
         <div class="mx-auto container">
        <div id="metion" class="img mx-atuo text-center py-20 ">
          <div class="mb-24 title w-fit mx-auto">
            <h1 class=" text-3xl">{{ languageStore.lang.home['lookingfor'] }}..</h1>
            <div class="bg-[#51be78] h-1 mt-1"></div>
          </div>
          <div class="boxes flex lg:flex-nowrap flex-wrap w-[80%] mx-auto gap-16 lg:gap-3">
            <div class="box relative h-[250px] border border-gray-300 xl:w-1/3 hover:border-[#51be78] hover:-translate-y-3 hover:scale-105 hover:border-2 cursor-pointer transition-all duration-200 p-3 mx-auto flex flex-col justify-between ">
              <div class="icon w-fit mx-auto hexogenal">
                <ProfessionalCoursesIcon class="icon absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" :size="45" fillColor="#fff" />
              </div>
              <div class="text mt-auto">
                <h2 class="font-bold text-lg">{{ languageStore.lang.home['professional_courses'] }}</h2>
                <p class="mx-auto">{{ languageStore.lang.home['professional_courses_desc'] }}</p>
              </div>
              <button class="bg-[#51be78] hover:bg-[#51976a] w-fit mx-auto text-white px-6 py-2 mt-auto">Learn More</button>
            </div>
            <div class="box relative h-[250px] border border-gray-300 xl:w-1/3 hover:border-[#51be78] hover:-translate-y-3 hover:scale-105 hover:border-2 cursor-pointer transition-all duration-200 p-3 mx-auto flex flex-col justify-between ">
              <div class="icon w-fit mx-auto hexogenal">
                <Graduate class="icon absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" :size="45" fillColor="#fff" />
              </div>
              <div class="text mt-auto">
                <h2 class="font-bold text-lg">{{ languageStore.lang.home['acadimic_courses'] }}</h2>
                <p class="mx-auto">{{ languageStore.lang.home['acadimic_courses_desc'] }}</p>
              </div>
              <button class="bg-[#51be78] hover:bg-[#51976a] w-fit mx-auto text-white px-6 py-2 mt-auto">Learn More</button>
            </div>
            <div class="box relative h-[250px] border border-gray-300 xl:w-1/3 hover:border-[#51be78] hover:-translate-y-3 hover:scale-105 hover:border-2 cursor-pointer transition-all duration-200 p-3 mx-auto flex flex-col justify-between ">
              <div class="icon w-fit mx-auto hexogenal">
                <DiplomasIcon class="icon absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" :size="45" fillColor="#fff" />
              </div>
              <div class="text mt-auto">
                <h2 class="font-bold text-lg">{{ languageStore.lang.home['diplomes'] }}</h2>
                <p class="mx-auto">{{ languageStore.lang.home['diplomes_desc'] }}</p>
              </div>
              <button class="bg-[#51be78] hover:bg-[#51976a] w-fit mx-auto text-white px-6 py-2 mt-auto">Learn More</button>
            </div>



          </div>
        </div>
      </div>
        <!-- end metion  -->
         <!-- start populat courses  -->
         <div id="popular-corses" class="container mx-auto text-center pb-20">
         <div class="mb-16 title w-fit mx-auto">
            <h1 class=" text-3xl">{{ languageStore.lang.home['popularcourses'] }}</h1>
            <div class="bg-[#51be78] h-1 mt-1"></div>
            <router-link :to="languageStore.direction == 'ltr'?'/en/courses':'/ar/courses'">
            <button class="bg-[#51be78] hover:bg-[#51976a] w-fit block mx-auto text-white px-6 py-2 mt-4">{{ languageStore.lang.home['allcourses'] }}</button>
            </router-link>
         </div>
         <div class="lg:w-[65%] w-[80%] mx-auto">
         <swiper
        class=""
        dir="ltr"
        :modules="modules"
        :slides-per-view="swiperSlidesPerView"
        :space-between="10"
        navigation
        :pagination="{ clickable: true }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false
        }"
      >
        
        <swiper-slide
          >
        <CourseCard image="https://www.consciocentric.com/Images/Articles/1059/400/einstein-equation-emc2.jpg"
                    categoryTitle="Arthimetics"
                    title="How To Create Mobile App Using Logic and Mathmatics"
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat temporibus, magnam inventore officia veniam delectus itaque repellendus natus perspiciatis recusandae minus id eum expedita aliquid! Nostrum reprehenderit illo eos nihil!"
                    price="300"
                    slug="how-to-make-mobile"
                    :isNew="true"
                     />
         </swiper-slide>
        <swiper-slide
          >
        <CourseCard image="https://www.consciocentric.com/Images/Articles/1059/400/einstein-equation-emc2.jpg"
                    categoryTitle="Arthimetics"
                    title="How To Create Mobile App Using Logic and Mathmatics"
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat temporibus, magnam inventore officia veniam delectus itaque repellendus natus perspiciatis recusandae minus id eum expedita aliquid! Nostrum reprehenderit illo eos nihil!"
                    price="300"
                    slug="how-to-make-mobile"
                    :isNew="true"
                     />
         </swiper-slide>
        <swiper-slide
          >
        <CourseCard image="https://www.consciocentric.com/Images/Articles/1059/400/einstein-equation-emc2.jpg"
                    categoryTitle="Arthimetics"
                    title="How To Create Mobile App Using Logic and Mathmatics"
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat temporibus, magnam inventore officia veniam delectus itaque repellendus natus perspiciatis recusandae minus id eum expedita aliquid! Nostrum reprehenderit illo eos nihil!"
                    price="300"
                    slug="how-to-make-mobile"
                    :isNew="true"
                     />
         </swiper-slide>
        <swiper-slide
          >
        <CourseCard image="https://www.consciocentric.com/Images/Articles/1059/400/einstein-equation-emc2.jpg"
                    categoryTitle="Arthimetics"
                    title="How To Create Mobile App Using Logic and Mathmatics"
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat temporibus, magnam inventore officia veniam delectus itaque repellendus natus perspiciatis recusandae minus id eum expedita aliquid! Nostrum reprehenderit illo eos nihil!"
                    price="300"
                    slug="how-to-make-mobile"
                    :isNew="true"
                     />
         </swiper-slide>

        ...
        </swiper>
        </div>
        </div>
         <!-- end populat courses  -->
          <!-- start aobut our company -->
           <div id="about" class="bg-[#183661] text-white py-20 mb-10">
            <div class="container lg:flex-nowrap flex-wrap flex items-start justify-evenly lg:w-[80%] mx-auto">
              <div class="abouttitle">
                <div class="mb-24 title w-fit mx-auto">
                  <h1 class=" text-3xl">{{ languageStore.lang.home['aboutOutCompany'] }}..</h1>
                  <div class="bg-[#51be78] h-1 mt-1"></div>
                </div>
              </div>
              <div class="lg:w-1/2 w-[90%]">
                <div class="bg-transparent  rounded-lg">
    <p class="text-lg font-semibold text-white mb-2">
      شركة <span class="font-bold">مسطرة</span> هي شركة متخصصة في تقديم خدمات تعليمية وتدريبية عبر الإنترنت، حيث تُركز على تسهيل الوصول إلى المعرفة والدورات التدريبية في مجالات متعددة. تُعتبر الشركة منصة تعليمية تهدف إلى تعزيز التعليم الرقمي من خلال تقديم محتوى تعليمي متميز يتناسب مع احتياجات الأفراد والمؤسسات.
    </p>

    <ul v-show="isExpanded" class="list-disc pl-5 text-base text-white mb-4">
      <!-- Services Section with Show More -->
      <p class="text-base text-white mb-4 ">
        <span class="font-semibold">أبرز الخدمات التي تقدمها:</span>
      </p>
      <li><span class="font-medium">دورات تدريبية</span>: مجموعة متنوعة من الدورات التدريبية في مجالات مختلفة.</li>
      <li><span class="font-medium">إدارة المحتوى التعليمي</span>: تمكين المستخدمين من إنشاء وإدارة دوراتهم التعليمية.</li>
      <li><span class="font-medium">التعلم الإلكتروني</span>: توفير تقنيات حديثة لتسهيل تجربة التعلم عبر الإنترنت.</li>
      <li><span class="font-medium">أنظمة الدفع الإلكتروني</span>: دعم خيارات الدفع مثل فودافون كاش والحسابات البنكية لتسهيل الاشتراكات.</li>
    </ul>

    <!-- Company Goals Section with Show More -->
    <ul v-show="isExpanded" class="list-disc pl-5 text-base text-white mb-4">
      <p class="text-base text-white  mb-4">
        <span class="font-semibold">أهداف الشركة:</span>
      </p>
      <li>تعزيز التعليم الذاتي.</li>
      <li>توفير محتوى تعليمي عالي الجودة.</li>
      <li>تمكين المتعلمين من اكتساب مهارات جديدة بطريقة مرنة وسهلة.</li>
    </ul>

    <!-- Toggle Show More Button -->
    <button
      @click="toggleExpand"
      class="mt-4 text-blue-500 hover:text-blue-700 font-medium transition-all duration-300"
    >
      {{ isExpanded ? 'عرض أقل' : 'عرض المزيد' }}
    </button>
  </div>
              </div>
            </div>
           </div>
          <!-- end aobut our company -->

          <!-- start People's comments  -->
           <div class="container w-[70%] mx-auto mb-16">
          <div class="mb-24 title w-fit ">
                  <h1 class=" text-3xl">{{ languageStore.lang.home['peoplecoments'] }}..</h1>
                  <div class="bg-[#51be78] h-1 mt-1"></div>
            </div>
          <div>
            <swiper
        class=""
        dir="ltr"
        :modules="modules"
        :slides-per-view="swiperSlidesPerView2"
        :space-between="10"
        :pagination="{ clickable: true }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false
        }"
      >
        
        <swiper-slide
          >
          <div>
            <div class="flex items-center gap-2 " :class="languageStore.direction == 'rtl' ? 'justify-start flex-row-reverse text-right':''">
              <img class="w-[50px] h-[50px] rounded-full border b-2 " src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="">
              <div>
                <h1>mohamed gamal</h1>
                <h4 class=" text-[#666]">User</h4>
              </div>
            </div>
            <div class="lg:w-[80%] text-[#888] mt-4 " :class="languageStore.direction == 'rtl' ? 'text-right ml-auto':''">
              <p>"أهلاً شباب مسطرة وليجيل أكاديمي 
علشان أنتم معانا على المنصة وشاطرين وان شاء الله نكمل سوا وتكون مسطرة وليجيل أكاديمي بتحاول تساعدكم انكم تكونو متميزين بنجهزلكم كورسات برا المجال و حابين نقدم لكم خصومات على مجموعة من كورسات التطوير الذاتي اللي هتفيدكم زي التسويق، جرافيك ديزاين، إنجليزي وألماني، Excel وأوفيس، وكمان تطريز وكروشيه.
الكورسات دي هتكون جاهزة قريب.
الخصم هيكون ان شاءالله لطلاب ليجيل أكاديمي بس عشان انتو حبايبنا😅❤️❤️"</p>
            </div>
          </div>
         </swiper-slide>
        <swiper-slide
          >
          <div>
            <div class="flex items-center gap-2 " :class="languageStore.direction == 'rtl' ? 'justify-start flex-row-reverse text-right':''">
              <img class="w-[50px] h-[50px] rounded-full border b-2 " src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="">
              <div>
                <h1>mohamed gamal</h1>
                <h4 class=" text-[#666]">User</h4>
              </div>
            </div>
            <div class="lg:w-[80%] text-[#888] mt-4 " :class="languageStore.direction == 'rtl' ? 'text-right ml-auto':''">
              <p>"أهلاً شباب مسطرة وليجيل أكاديمي 
علشان أنتم معانا على المنصة وشاطرين وان شاء الله نكمل سوا وتكون مسطرة وليجيل أكاديمي بتحاول تساعدكم انكم تكونو متميزين بنجهزلكم كورسات برا المجال و حابين نقدم لكم خصومات على مجموعة من كورسات التطوير الذاتي اللي هتفيدكم زي التسويق، جرافيك ديزاين، إنجليزي وألماني، Excel وأوفيس، وكمان تطريز وكروشيه.
الكورسات دي هتكون جاهزة قريب.
الخصم هيكون ان شاءالله لطلاب ليجيل أكاديمي بس عشان انتو حبايبنا😅❤️❤️"</p>
            </div>
          </div>
         </swiper-slide>
        <swiper-slide
          >
          <div>
            <div class="flex items-center gap-2 " :class="languageStore.direction == 'rtl' ? 'justify-start flex-row-reverse text-right':''">
              <img class="w-[50px] h-[50px] rounded-full border b-2 " src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="">
              <div>
                <h1>mohamed gamal</h1>
                <h4 class=" text-[#666]">User</h4>
              </div>
            </div>
            <div class="lg:w-[80%] text-[#888] mt-4 " :class="languageStore.direction == 'rtl' ? 'text-right ml-auto':''">
              <p>"أهلاً شباب مسطرة وليجيل أكاديمي 
علشان أنتم معانا على المنصة وشاطرين وان شاء الله نكمل سوا وتكون مسطرة وليجيل أكاديمي بتحاول تساعدكم انكم تكونو متميزين بنجهزلكم كورسات برا المجال و حابين نقدم لكم خصومات على مجموعة من كورسات التطوير الذاتي اللي هتفيدكم زي التسويق، جرافيك ديزاين، إنجليزي وألماني، Excel وأوفيس، وكمان تطريز وكروشيه.
الكورسات دي هتكون جاهزة قريب.
الخصم هيكون ان شاءالله لطلاب ليجيل أكاديمي بس عشان انتو حبايبنا😅❤️❤️"</p>
            </div>
          </div>
         </swiper-slide>
        <swiper-slide
          >
          <div>
            <div class="flex items-center gap-2 " :class="languageStore.direction == 'rtl' ? 'justify-start flex-row-reverse text-right':''">
              <img class="w-[50px] h-[50px] rounded-full border b-2 " src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="">
              <div>
                <h1>mohamed gamal</h1>
                <h4 class=" text-[#666]">User</h4>
              </div>
            </div>
            <div class="lg:w-[80%] text-[#888] mt-4 " :class="languageStore.direction == 'rtl' ? 'text-right ml-auto':''">
              <p>"أهلاً شباب مسطرة وليجيل أكاديمي 
علشان أنتم معانا على المنصة وشاطرين وان شاء الله نكمل سوا وتكون مسطرة وليجيل أكاديمي بتحاول تساعدكم انكم تكونو متميزين بنجهزلكم كورسات برا المجال و حابين نقدم لكم خصومات على مجموعة من كورسات التطوير الذاتي اللي هتفيدكم زي التسويق، جرافيك ديزاين، إنجليزي وألماني، Excel وأوفيس، وكمان تطريز وكروشيه.
الكورسات دي هتكون جاهزة قريب.
الخصم هيكون ان شاءالله لطلاب ليجيل أكاديمي بس عشان انتو حبايبنا😅❤️❤️"</p>
            </div>
          </div>
         </swiper-slide>

        ...
        </swiper>
          </div>
          </div>
          <!-- end People's comments  -->

      </div>
    </main>
  </MainLayout>
</template>
<style scoped>
.swiper-1{
  height: 100vh;
}
.hexogenal{
  width: 96px;
    height: 45px;
    text-align: center;
    font-size: 3rem;
    line-height: 96px;
    display: inline-block;
    position: absolute;
    top: -33px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #51be78;
}
.hexogenal::before{
  content: "";
    position: absolute;
    z-index: -1;
    width: 67.88px;
    height: 67.88px;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background-color: inherit;
    left: 14.06px;
    top: -34px;
}
.hexogenal::after{
  content: "";
    position: absolute;
    z-index: -1;
    width: 67.88px;
    height: 67.88px;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background-color: inherit;
    left: 14.06px;
    bottom: -34px;
}
.description{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* Animation for fading in and out */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.bg-transparent {
  background-color: transparent;
}

/* Optional: Fade in and out effect for smooth transitions */
.transition-opacity {
  transition: opacity 0.5s ease;
}
.img {
  animation: fade-in linear ;
  animation-timeline: view();
  animation-range: entry ;
}
@keyframes fade-in {
  from{
    scale:.3;
    opacity: 0;
  }
  to{
    scale:1;
    opacity: 1;
  }
}
</style>
