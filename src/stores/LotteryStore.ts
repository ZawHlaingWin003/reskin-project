import axios from "@/api"
import apiRoutes from "@/api/apiRoutes"
import type { Dream } from "@/types/common"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useLotteryStore = defineStore('LotteryStore', () => {
    const twoDDreams = ref<Dream[]>([])
    const threeDDreams = ref<Dream[]>([])

    const getAllTwoDDreams = async () => {
        const { data } = await axios.get(apiRoutes.lottery.getAllTwoDDreams);
        twoDDreams.value = data.data;
        return data.data;
    }

    const getAllThreeDDreams = async () => {
        const { data } = await axios.get(apiRoutes.lottery.getAllThreeDDreams);
        console.log("RESPONSE", data)
        threeDDreams.value = data.data
        return data.data;
    }

    return {
        twoDDreams,
        threeDDreams,
        getAllTwoDDreams,
        getAllThreeDDreams
    }
})