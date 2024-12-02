<script setup>
import { ref, computed ,onMounted} from "vue";
import ProfessionalCoursesIcon from "vue-material-design-icons/Briefcase.vue";
import LaptopIcon from "vue-material-design-icons/Laptop.vue";
import MobileIcon from "vue-material-design-icons/Cellphone.vue";
import ArrowBackIcon from "vue-material-design-icons/ArrowLeft.vue";
import EducationIcon from "vue-material-design-icons/School.vue";
import SkillIcon from "vue-material-design-icons/LightbulbOutline.vue";
import InterestIcon from "vue-material-design-icons/Heart.vue";
import MainLayout from "./layouts/MainLayout.vue";
import RocketIcon from "vue-material-design-icons/FireTruck.vue";
import AiIcon from "vue-material-design-icons/LightbulbOutline.vue"; // AI Icon, you can choose any icon.

const isLoading = ref(true); // Track the loading state

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false; // Hide the loader after 3 seconds or when the data is ready
  }, 3000); // Adjust the timing according to your loading process
});
// Questionnaire state
const ageRange = ref("");
const device = ref("");
const laptopAbility = ref("");
const skillLevel = ref("");
const selectedInterests = ref([]);
const educationLevel = ref("");

const recommendations = computed(() => {
  const allRecs = [
    { name: "أساسيات البرمجة", weight: selectedInterests.value.includes("البرمجة") ? 3 : 1 },
    { name: "تصميم الجرافيك", weight: selectedInterests.value.includes("التصميم") ? 3 : 1 },
    { name: "تعلم اللغة الإنجليزية", weight: selectedInterests.value.includes("اللغة الإنجليزية") ? 3 : 1 },
    { name: "استراتيجيات التسويق", weight: selectedInterests.value.includes("التسويق") ? 2 : 1 },
    { name: "أساسيات الأعمال", weight: selectedInterests.value.includes("الأعمال") ? 2 : 1 },
    { name: "الفن والإبداع", weight: selectedInterests.value.includes("الفن") ? 2 : 1 },
    { name: "الذكاء الاصطناعي وتعلم الآلة", weight: selectedInterests.value.includes("الذكاء الاصطناعي") ? 3 : 1 },
    { name: "استكشاف العلوم", weight: selectedInterests.value.includes("العلوم") ? 2 : 1 },
  ];

  return allRecs
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 4)
    .map((rec) => rec.name);
});

// Options for interests
const interests = [
  "البرمجة",
  "التصميم",
  "اللغة الإنجليزية",
  "الفن",
  "العلوم",
  "التسويق",
  "الأعمال",
  "الذكاء الاصطناعي"
];

const resetAfter = (question) => {
  if (question === "device") {
    laptopAbility.value = "";
    skillLevel.value = "";
    selectedInterests.value = [];
    educationLevel.value = "";
  } else if (question === "laptopAbility") {
    skillLevel.value = "";
    selectedInterests.value = [];
    educationLevel.value = "";
  } else if (question === "skillLevel") {
    selectedInterests.value = [];
    educationLevel.value = "";
  }
};
</script>

<template>
 

  <!-- Main content of the page -->
  <MainLayout >
        <!-- Loader that appears before the page content -->
        <div v-if="isLoading" class="loading-screen">
      <AiIcon class="rocket-icon" />
    </div>
    <div v-else class="questionnaire">
      <!-- Age Range Question -->
      <transition v-if="!ageRange" class="question-box" name="fade">
        <div>
          <h3>ما هو عمرك؟</h3>
          <div class="options">
            <button @click="ageRange = '10-18'">10-18</button>
            <button @click="ageRange = '18-23'">18-23</button>
            <button @click="ageRange = '23-40'">23-40</button>
          </div>
        </div>
      </transition>

      <!-- Device Question -->
      <transition v-else-if="!device" class="question-box" name="fade">
        <div>
          <h3>ما هو الجهاز الذي تستخدمه؟</h3>
          <div class="options">
            <button @click="device = 'Mobile'">
              <MobileIcon /> هاتف
            </button>
            <button @click="device = 'Laptop'">
              <LaptopIcon /> لابتوب/جهاز كمبيوتر
            </button>
          </div>
          <button class="back-button" @click="resetAfter('device'); ageRange = ''">
            <ArrowBackIcon /> رجوع
          </button>
        </div>
      </transition>

      <!-- Laptop Capability Question -->
      <transition v-else-if="device === 'Laptop' && !laptopAbility" class="question-box" name="fade">
        <div>
          <h3>ما هي قدرة جهاز اللابتوب الخاص بك؟</h3>
          <div class="options">
            <button @click="laptopAbility = 'ضعيفة'">ضعيفة</button>
            <button @click="laptopAbility = 'متوسطة'">متوسطة</button>
            <button @click="laptopAbility = 'عالية'">عالية</button>
          </div>
          <button class="back-button" @click="resetAfter('device'); device = ''">
            <ArrowBackIcon /> رجوع
          </button>
        </div>
      </transition>

      <!-- Skill Level Question -->
      <transition v-else-if="!skillLevel" class="question-box" name="fade">
        <div>
          <h3>ما هو مستوى مهاراتك؟</h3>
          <div class="options">
            <button @click="skillLevel = 'مبتدئ'">مبتدئ</button>
            <button @click="skillLevel = 'متوسط'">متوسط</button>
            <button @click="skillLevel = 'متقدم'">متقدم</button>
          </div>
          <button class="back-button" @click="resetAfter('laptopAbility'); laptopAbility = ''">
            <ArrowBackIcon /> رجوع
          </button>
        </div>
      </transition>

      <!-- Interests Question -->
      <transition v-else-if="!selectedInterests.length" class="question-box" name="fade">
        <div>
          <h3>ما هي اهتماماتك؟</h3>
          <div class="options">
            <button v-for="interest in interests" :key="interest">
              <input type="checkbox" :value="interest" v-model="selectedInterests" />
              {{ interest }}
            </button>
          </div>
          <button class="back-button" @click="resetAfter('skillLevel'); skillLevel = ''">
            <ArrowBackIcon /> رجوع
          </button>
        </div>
      </transition>

      <!-- Education Level Question -->
      <transition v-else-if="!educationLevel" class="question-box" name="fade">
        <div>
          <h3>ما هو مستواك التعليمي؟</h3>
          <div class="options">
            <button @click="educationLevel = 'ثانوي'">ثانوي</button>
            <button @click="educationLevel = 'جامعي'">جامعي</button>
            <button @click="educationLevel = 'دراسات عليا'">دراسات عليا</button>
          </div>
          <button class="back-button" @click="resetAfter('selectedInterests'); selectedInterests.length = 0">
            <ArrowBackIcon /> رجوع
          </button>
        </div>
      </transition>

      <!-- Recommendations -->
      <transition v-else class="question-box" name="fade">
        <div>
          <h3>شكراً لإتمام الاستبيان!</h3>
          <p>بناءً على إجاباتك، نوصي بـ:</p>
          <div class="recommendations">
            <div
              v-for="(rec, index) in recommendations"
              :key="index"
              class="recommendation-box"
              :class="'animation-' + index"
            >
              {{ rec }}
            </div>
          </div>
          <button class="restart-button" @click="resetAfter('device'); ageRange.value = ''">
            إعادة البدء
          </button>
        </div>
      </transition>
    </div>
  </MainLayout>
</template>


<style scoped>
.questionnaire {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 180px; /* Default padding */
  text-align: center;
  width: 100%; /* Ensure it takes up full width */
}

/* For small screens (phones, tablets, etc.) */
@media (max-width: 768px) {
  .questionnaire {
    padding: 80px; /* Reduced padding for smaller screens */
  }
}

/* For extra small screens (phones in portrait mode) */
@media (max-width: 480px) {
  .questionnaire {
    padding: 40px; /* Further reduced padding for very small screens */
  }
}

/* For very large screens (desktops, large monitors) */
@media (min-width: 1200px) {
  .questionnaire {
    padding: 220px; /* Optional: more padding for larger screens */
  }
}
.question-box {
  width: 80%;
}

.options {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease;
}

button:hover {
  transform: scale(1.05);
  background-color: #0056b3;
}

.back-button {
  margin-top: 20px;
  background-color: #6c757d;
}

.back-button:hover {
  background-color: #5a6268;
}

.restart-button {
  margin-top: 20px;
  background-color: #28a745;
}

.restart-button:hover {
  background-color: #218838;
}

/* Transition effect */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.recommendations {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.recommendation-box {
  padding: 20px;
  font-size: 1.5rem;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, background-color 0.4s ease;
  width: 200px;
  text-align: center;
  opacity: 0;
  transform: scale(0.8);
  color: black;
  cursor: pointer;
}

.recommendation-box:hover {
  transform: scale(1.05);
  background-color: #007bff;
  color: white;
}

.animation-0 {
  animation: fadeInUp 0.5s 0.2s forwards;
}

.animation-1 {
  animation: fadeInUp 0.5s 0.4s forwards;
}

.animation-2 {
  animation: fadeInUp 0.5s 0.6s forwards;
}

.animation-3 {
  animation: fadeInUp 0.5s 0.8s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.loading-screen {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
}

.rocket-icon {
  font-size: 4rem;
  animation: moveUp 3s ease-in-out infinite;
}

@keyframes moveUp {
  0% {
    bottom: 0;
    opacity: 1;
  }
  50% {
    bottom: 80%; /* Rocket moves up 80% of the screen height */
    opacity: 0.7;
  }
  100% {
    bottom: 100%;
    opacity: 0;
  }
}

/* Optional: Smooth fade-out effect for when loading finishes */
.questionnaire {
  transition: opacity 0.5s ease-in;
}
</style>