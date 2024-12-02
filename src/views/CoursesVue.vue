<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from '../axios';
import MainLayout from './layouts/MainLayout.vue';
import { useLanguageStore } from '../stores/store.js';
import PageImage from '@/components/parts/PageImage.vue';
import CourseCard from '@/components/parts/CourseCard.vue';

const languageStore = useLanguageStore();

// State variables
const allCourses = ref([]);
const currentPage = ref(1);
const coursesPerPage = 9;

// Fetch courses from the API
const fetchCourses = async () => {
  try {
    const response = await axios.get('/courses'); // Replace with the actual base URL if needed
    allCourses.value = response.data.map(course => ({
      id: course.id,
      image: course.image ? `/storage/${course.image}` : 'default-image.jpg', // Adjust the path
      categoryTitle: course.categories[0]?.name || 'No Category',
      title: course.name,
      description: course.description,
      price: course.price,
      slug: course.slug,
      isNew: new Date() - new Date(course.created_at) < 30 * 24 * 60 * 60 * 1000, // Mark as new if created in the last 30 days
    }));
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
};

// Calculate paginated courses
const paginatedCourses = computed(() => {
  const startIndex = (currentPage.value - 1) * coursesPerPage;
  return allCourses.value.slice(startIndex, startIndex + coursesPerPage);
});

// Total pages
const totalPages = computed(() => Math.ceil(allCourses.value.length / coursesPerPage));

// Navigate to the previous page
const previousPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

// Navigate to the next page
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

// Fetch courses on component mount
onMounted(fetchCourses);
</script>
<template>
    <MainLayout>
      <PageImage 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwV_VpvlixQHtfhJJR6AkrdPV_s3N3zJDGQ&s" 
        :text="`${languageStore.lang.header['courses']}`" 
        :description="`${languageStore.lang.courses['slogan']}`" 
      />
      <div class="border-b-2 border-gray-300 mb-20">
        <div class="links flex items-center gap-3 p-5 w-[62%] mx-auto">
          <router-link class=" cursor-pointer text-[#999] hover:text-[#51be78]" :to="languageStore.direction == 'ltr'? '/en' :'/ar'">
            <p v-if="languageStore.direction == 'ltr'">Home</p>
            <p v-if="languageStore.direction == 'rtl'">الرئيسه</p>
          </router-link>
          <div>
            <p v-if="languageStore.direction == 'ltr'">></p>
            <p v-if="languageStore.direction == 'rtl'"><</p>
          </div>
          <router-link class=" cursor-pointer text-[#51be78] hover:text-[#518864]" :to="languageStore.direction == 'ltr'? '/en/courses' :'/ar/courses'">
            <p v-if="languageStore.direction == 'ltr'">Courses</p>
            <p v-if="languageStore.direction == 'rtl'">الكورسات</p>
          </router-link>
        </div>
      </div>
      
      <!-- Error Message -->
      <div v-if="errorMessage" class="text-red-500 text-center">
        {{ errorMessage }}
      </div>
      
      <!-- Loading Spinner -->
      <div v-if="isLoading" class="text-center">
        <span>Loading courses...</span>
      </div>

      <!-- Courses Grid -->
      <div v-if="!isLoading && !errorMessage" class="courses grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 lg:w-[82%] 2xl:w-[79%] md:w-[90%] w-[80%] mx-auto">
        <CourseCard
          v-for="course in paginatedCourses"
          :key="course.id"
          class="animate"
          :image="'https://api.mstra.online/' + course.image"
         :categoryTitle="course.categoryTitle"
          :title="course.title"
          :description="course.description"
          :price="course.price"
          :slug="course.slug"
          :isNew="true"
          />
      </div>
  
      <!-- Pagination Controls -->
      <div v-if="!isLoading && !errorMessage" class="pagination flex justify-center gap-4 mt-8">
        <button 
          @click="previousPage" 
          :disabled="currentPage === 1" 
          class="px-4 py-2 bg-[#51be78] hover:bg-[#5fac7a] text-white rounded">
          Previous
        </button>
        <span class="px-4 py-2 text-gray-600">Page {{ currentPage }} of {{ totalPages }}</span>
        <button 
          @click="nextPage" 
          :disabled="currentPage === totalPages" 
          class="px-4 py-2 bg-[#51be78] hover:bg-[#5fac7a] text-white rounded">
          Next
        </button>
      </div>
    </MainLayout>
  </template>
<style scoped>
.animate:nth-child(n+6) {
  /* The rule starts from the 4th element onward */
  animation: fade-in linear;
  animation-timeline: view();
  animation-range: entry;
}
@keyframes fade-in {
  from{
    scale:.5;
    opacity: 0;
  }
  to{
    scale:1;
    opacity: 1;
  }
}
.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

</style>