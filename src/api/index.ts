import Axios, { type AxiosInstance } from 'axios'
import { BASE_URL, LOCAL_STORAGE_KEYS } from '@/utils/constants'

const axios: AxiosInstance = Axios.create({
    baseURL: BASE_URL,
})

axios.interceptors.request.use(config => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN_KEY);
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
})

export default axios;