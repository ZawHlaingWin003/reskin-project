<template>
    <div class="space-y-2">
        <img
            src="@/assets/images/casino.gif"
            alt="Casino Gif"
            class="w-16 h-16 mx-auto md:h-20 md:w-20"
        >
        <RouterLink :to="{ name: 'cards' }">
            <img
                src="@/assets/images/games/live-casino.png"
                alt="Live Casino"
                class="object-cover rounded-xl md:hidden"
            >
        </RouterLink>
        <div class="grid grid-cols-2 gap-2 md:gap-8 md:grid-cols-6">
            <template
                v-for="(game, index) in games"
                :key="index"
            >
                <RouterLink :to="{ name: 'cards' }">
                    <img
                        :src="getImageUrl(game.image, { directory: 'games' })"
                        alt="Live Casino"
                        class="object-cover rounded-xl"
                    >
                </RouterLink>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '@/helpers/image-helper';
import { ref } from 'vue';

const games = ref([
    {
        'image': 'Live Casino - PP.gif'
    },
    {
        'image': 'Live Casino - WM.gif'
    },
    {
        'image': 'Live Casino - BG.gif'
    },
    {
        'image': 'Live Casino - Sexy.gif'
    }
])
</script>

<style scoped></style>