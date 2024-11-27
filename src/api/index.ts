import Axios, { type AxiosInstance } from 'axios'
import { BASE_URL } from '@/utils/constants'

export const axios: AxiosInstance = Axios.create({
    baseURL: BASE_URL,
})

export default axios;