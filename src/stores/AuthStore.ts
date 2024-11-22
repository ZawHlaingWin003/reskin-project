import { defineStore } from "pinia"
import { ref } from "vue"

export const useAuthStore = defineStore('AuthStore', () => {
    const isLoggedIn = ref(false)

    return { isLoggedIn }
})