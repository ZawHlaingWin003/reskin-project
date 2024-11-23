<template>
    <div class="space-y-2">
        <img
            src="@/assets/images/fishing.gif"
            alt="Fishing Gif"
            class="w-16 h-16 mx-auto md:h-20 md:w-20"
        >
        <div class="grid grid-cols-2 gap-2 md:gap-8 md:grid-cols-6">
            <template
                v-for="(game, index) in games"
                :key="index"
            >
                <RouterLink :to="{ name: 'cards' }">
                    <img
                        :src="getImageUrl(game.image, { directory: 'games' })"
                        alt="Fishing Game"
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
        'image': 'Fishing - Joker.gif'
    },
    {
        'image': 'Fishing - Jili.gif'
    },
    {
        'image': 'Fishing - JDB.gif'
    },
    {
        'image': 'Fishing - FaChai.gif'
    }
])
</script>

<style scoped></style>