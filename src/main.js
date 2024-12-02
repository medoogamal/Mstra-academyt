import './assets/main.css'
import './style.css'
import './axios'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
const pinia = createPinia()
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'

const globalOptions = {
  autoFormat: true,
  mode: 'international',
  dropdownOptions: {
    showSearchBox: true
  }
}

pinia.use(piniaPluginPersistedstate)


import App from './App.vue'
import router from './router'
import './axios.js'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
