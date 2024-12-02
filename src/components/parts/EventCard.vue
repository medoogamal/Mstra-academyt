<script setup>
import { computed } from 'vue'
import Calender from 'vue-material-design-icons/Calendar.vue'
import Clock from 'vue-material-design-icons/Clock.vue'
import VLazyImage from 'v-lazy-image'
import { toRefs } from 'vue'
import { useLanguageStore } from '../../stores/store.js'
import Map from 'vue-material-design-icons/Map.vue'

const languageStore = useLanguageStore()

const props = defineProps({
  text: String,
  place: String,
  start_time: String,
  end_time: String,
  date: String,
  author: String,
  slug: String,
  students: Number,
  image: String
})
const { text, image, place, start_time, end_time, date, author, slug, students } = toRefs(props)

function convertTo12Hour(time) {
  let [hours, minutes] = time.split(':');
  hours = parseInt(hours);
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes ? minutes.padStart(2, '0') : '00';
  return `${hours}:${minutes} ${ampm}`;
}

const startTime12Hour = computed(() => convertTo12Hour(start_time.value));
const endTime12Hour = computed(() => convertTo12Hour(end_time.value));
</script>

<template>
  <router-link :to="{ name: 'events.single', params: { slug: `${slug}` } }">
    <div class="container mx-auto p-4" :dir="languageStore.direction">
      <div class="box bg-white dark:bg-black rounded-lg flex overflow-hidden items-center">
        <div class="image-container relative cursor-pointer">
          <v-lazy-image
            src-placeholder="/images/logo.png"
            :src="image"
            alt=""
            class="image"
          />
        </div>
        <div class="content">
          <div class="text-content mt-2 cursor-pointer px-3">
            <div class="flex items-center gap-2 text-xs">
              <Calender :size="15" fillColor="#ffc600" />
              <span>{{ date }}</span>
            </div>
            <p class="text-lg hover:text-[#ffc600]">{{ text }}</p>
          </div>
          <div class="details px-2 py-5 w-full bottom-0">
            <div class="flex items-center gap-2 text-xs py-1">
              <Clock :size="15" fillColor="#ffc600" />
              <span>{{ startTime12Hour }} - {{ endTime12Hour }}</span>
            </div>
            <div class="flex items-center gap-2 text-xs py-1">
              <Map :size="15" fillColor="#ffc600" />
              <span>{{ place }}</span>
            </div>
            <!-- <h4 class="text-lg">Public Event</h4> -->
          </div>
        </div>
      </div>
    </div>
</router-link>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.box {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin: 10px;
}

.image-container {
  width: 100%;
  height: 210px;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.text-content {
  flex: 1;
}

.details {
  flex-shrink: 0;
}
</style>