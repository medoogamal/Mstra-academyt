// store.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authUser', {
  state: () => ({
    name: null,
    id: null,
    token: null,
    profile: null
  }),
  actions: {
    async setUserDetails(res) {
      this.$state.name = res.data.user.username
      this.$state.id = res.data.user.id
      this.$state.token = res.data.token
    },
    async setProfile(res) {
      this.$state.profile = res.data
    },
    async clearUserDetails() {
      this.$state.name = null
      this.$state.id = null
      this.$state.token = null
    }
  },
  persist: true
})
