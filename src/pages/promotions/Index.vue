<template>
    <div class="py-5 md:px-10 md:py-20 main-gradient">
        <div class="flex items-center justify-center gap-2 mb-2 text-center md:mb-8">
            <img
                src="@/assets/images/promotion-header-1.png"
                alt="Promotion"
                class="w-6 h-6 md:w-10 md:h-10"
            >
            <h1 class="text-xl font-bold md:text-2xl">Promotion</h1>
            <img
                src="@/assets/images/promotion-header-2.png"
                alt="Promotion"
                class="w-6 h-6 md:w-10 md:h-10"
            >
        </div>
        <div class="flex flex-wrap justify-center">
            <template
                v-for="(promotion, index) in promotions"
                :key="index"
            >
                <img
                    :src="getImageUrl(promotion.logo, { directory: 'promotions' })"
                    alt="Promotion Logo"
                    class="w-full md:w-1/3 rounded-xl"
                >
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '@/helpers/image-helper';
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