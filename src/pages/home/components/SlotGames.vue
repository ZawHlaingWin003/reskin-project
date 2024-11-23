<template>
    <div class="grid grid-cols-2 gap-2 md:gap-8 md:grid-cols-4">
        <template
            v-for="(game, index) in games"
            :key="index"
        >
            <RouterLink :to="{ name: 'slots' }">
                <img
                    :src="getImageUrl(game.image, { directory: 'games' })"
                    alt="Shan Koe Mee"
                    class="rounded-xl game-card"
                >
            </RouterLink>
        </template>
    </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '@/helpers/image-helper';
import { ref } from 'vue';

const games = ref([
    {
        'image': 'Slot - PP.gif'
    },
    {
        'image': 'Slot - Jili.gif'
    },
    {
        'image': 'Saba Sport Betting.gif'
    },
    {
        'image': 'Slot - FaChai.gif'
    },
    {
        'image': 'Slot - JDB.gif'
    },
    {
        'image': 'Slot - Joker.gif'
    },
    {
        'image': 'Slot - PG.gif'
    }
])
</script>

<style scoped></style>