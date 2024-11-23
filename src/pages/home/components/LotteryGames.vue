<template>
    <div class="space-y-2">
        <img
            src="@/assets/images/lottery.gif"
            alt="Lottery Gif"
            class="w-16 h-16 mx-auto"
        >
        <div class="grid grid-cols-2 gap-2 md:gap-8 md:grid-cols-4">
            <template
                v-for="(game, index) in columns"
                :key="index"
            >
                <RouterLink :to="{ name: 'slots' }">
                    <img
                        :src="getImageUrl(game.image, { directory: 'games' })"
                        alt="Lottery Game"
                        class="rounded-xl game-card"
                    >
                </RouterLink>
            </template>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2">
            <template
                v-for="(row, index) in rows"
                :key="index"
            >
                <img
                    :src="getImageUrl(row.image, { directory: 'games' })"
                    alt="2D Live"
                    class="object-cover"
                >
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '@/helpers/image-helper';
import { ref } from 'vue';

const columns = ref([
    {
        'image': '2D Lottery.gif'
    },
    {
        'image': '3D Lottery.gif'
    }
])
const rows = ref([
    {
        'image': '2dlive.png',
    },
    {
        'image': '3dlive.png'
    }
])

</script>

<style scoped></style>