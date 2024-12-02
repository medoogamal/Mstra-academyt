// store.js
import { defineStore } from 'pinia'

export const useCourseStore = defineStore('coursePage', {
  state: () => ({
    allcourses: null,
    mylerningboard: null,
    my_courses: null,
    singlecourse: null
  }),
  actions: {
    async setcourses(res) {
      this.$state.allcourses = res.data
    },
    async setmylerningboard(res) {
      this.$state.mylerningboard = res.data
    },
    async setmy_courses(res) {
      this.$state.my_courses = res.data
    },
    async setsinglecourse(res) {
      this.$state.singlecourse = res.data
    }
  }
})
 