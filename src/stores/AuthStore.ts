import axios from "@/api";
import apiRoutes from "@/api/apiRoutes";
import { type UserInfo, type User } from "@/types/common";
import { LOCAL_STORAGE_KEYS } from "@/utils/constants";
import { defineStore } from "pinia"
import { useToast } from "primevue";
import { reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router";

export const useAuthStore = defineStore('AuthStore', () => {
    const errors: any = ref(null);
    const router = useRouter()
    const route = useRoute()
    const toast = useToast()

    const isLoginButtonLoading = ref(false)

    const authToken = ref('');
    const userInfo = ref<UserInfo | null>();
    const isLoggedIn = ref(false)

    const loadUserFromLocalStorage = () => {
        const token = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN_KEY)
        const user = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_USER_INFO)

        if (token !== null) {
            isLoggedIn.value = true;
            authToken.value = token;
        }

        if (user !== null) {
            userInfo.value = JSON.parse(user)
        }
    }

    loadUserFromLocalStorage()

    async function getAuthUser() {
        try {
            const { data } = await axios.get(apiRoutes.auth.getAuthUser);

            if (data.status == "success") {
                userInfo.value = data.data;
                localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH_USER_INFO, JSON.stringify(data.data))

                return true;
            }

            return false;
        } catch (error: any) {
            errors.value = error.response.data.error;
            return false;
        }
    }

    async function login(user: User) {
        try {
            isLoginButtonLoading.value = true;
            const { data } = await axios.post(apiRoutes.auth.login, user);
            if (data.status == "success") {
                authToken.value = data.token
                isLoggedIn.value = true;
                localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN_KEY, data.token)

                const response = await getAuthUser();
                if (response) {
                    router.push({
                        path: route.query.to?.toString() || '/'
                    })
                }
            } else {
                throw new Error('Invalid response from the server');
            }
        } catch (error: any) {
            errors.value = error.response.data?.error || 'Unknown error occurred';

            toast.add({
                severity: 'error',
                summary: 'Failed',
                detail: 'Something Went Wrong!',
                life: 3000,
                styleClass: "w-3/4 ml-auto"
            });
        } finally {
            isLoginButtonLoading.value = false;
        }
    }

    async function logout(redirect: boolean = true) {
        try {
            const { data } = await axios.post(apiRoutes.auth.logout);
            if (data.status == "success") {
                clientLogout()

                if (redirect) {
                    router.push({
                        name: 'home'
                    })
                }
            }
        } catch (error) {

        }
    }

    const clientLogout = () => {
        isLoggedIn.value = false;
        userInfo.value = null;
        authToken.value = '';

        localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN_KEY);
        localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_USER_INFO);
    }

    return {
        isLoginButtonLoading,
        isLoggedIn,
        userInfo,
        getAuthUser,
        login,
        logout
    }
})