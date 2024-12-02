import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'




import { useAuthStore } from '../stores/auth-store'
import { useLanguageStore } from '../stores/store'
import CoursesVue from '@/views/CoursesVue.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import FindmyPassion from '@/views/FindmyPassion.vue'
const supportedLanguages = ['en', 'ar']  

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/en' // Redirect the root path to the English version by default
    },
    {
      path: '/:lang',
      component: HomeView,
      meta: { title: 'Mstra Academy' },
      beforeEnter: (to, from, next) => {
        const langParam = to.params.lang
        if (supportedLanguages.includes(langParam)) {
          next()
        } else {
          // Redirect to the 404 page if the provided language is unsupported
          next({ name: 'NotFound', params: { lang: 'en' }, component: NotFoundView })
        }
      }
    },
    {
      path: '/:lang/courses',
      component: CoursesVue,
      meta: { title: 'Mstra Academy | courses' }
    },
    {
      path: '/:lang/findmypassion',
      component: FindmyPassion,
      meta: { title: 'Mstra Academy | Find My Passion' }
    },
    {
      // Define the 404 page route
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Get the page title from the route meta data that we have defined
  // See further down below for how we setup this data
  const title = to.meta.title
  // If the route has a title, set it as the page title of the document/page
  if (title) {
    document.title = title
  }
  // Continue resolving the route
  next()
})

export default router
