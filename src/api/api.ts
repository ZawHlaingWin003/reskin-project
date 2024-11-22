import axios, { type AxiosInstance } from 'axios'
import { BASE_URL } from '@/utils/constants'

export const api: AxiosInstance = axios.create({
    baseURL: BASE_URL,
})
