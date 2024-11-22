<template>
    <div class="px-10 py-10 md:py-20 main-gradient">
        <div class="flex items-center justify-center gap-2 mb-8 text-center">
            <img
                src="@/assets/images/promotion-header-1.png"
                alt="Promotion"
                class="w-10 h-10"
            >
            <h1 class="text-2xl font-bold">Promotion</h1>
            <img
                src="@/assets/images/promotion-header-2.png"
                alt="Promotion"
                class="w-10 h-10"
            >
        </div>
        <div class="flex flex-wrap justify-center">
            <template
                v-for="(promotion, index) in promotions"
                :key="index"
            >
                <img
                    :src="`/src/assets/images/${promotion.logo}`"
                    alt="Promotion Logo"
                    class="w-full md:w-1/3 rounded-3xl"
                >
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const promotions = ref([
    {
        'logo': 'promotion-1.png'
    },
    {
        'logo': 'promotion-2.png'
    },
    {
        'logo': 'promotion-3.png'
    },
    {
        'logo': 'promotion-3.png'
    },
    {
        'logo': 'promotion-3.png'
    },
    {
        'logo': 'promotion-3.png'
    },
    {
        'logo': 'promotion-3.png'
    },
])
</script>

<style scoped></style>