<template>
    <div class="grid grid-cols-2 gap-2 md:gap-8 md:grid-cols-6">
        <template
            v-for="(game, index) in games"
            :key="index"
        >
            <RouterLink :to="{ name: 'slots' }">
                <LazyImage
                    :img-src="`/assets/images/games/${game.image}`"
                    img-class="rounded-xl game-card"
                />
            </RouterLink>
        </template>
    </div>
</template>

<script setup lang="ts">
import LazyImage from '@/components/LazyImage.vue';
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