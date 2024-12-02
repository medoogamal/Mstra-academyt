// store.js
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('homePage', {
  state: () => ({
    categories: null,
    teachers: null,
    courses: null,
    events: null,
    blogs: null
  }),
  actions: {
    async setcategories(res) {
      this.$state.categories = res.data.categories
    },
    async setteachers(res) {
      this.$state.teachers = res.data.teachers
    },
    async setcourses(res) {
      this.$state.courses = res.data.courses
    },
    async setevents(res) {
      this.$state.events = res.data.events
    },
    async setblogs(res) {
      this.$state.blogs = res.data.blogs
    }
  }
})
