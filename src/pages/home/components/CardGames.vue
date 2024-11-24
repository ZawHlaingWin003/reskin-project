<template>
    <div class="space-y-2">
        <img
            src="@/assets/images/card.gif"
            alt="Card Gif"
            class="w-16 h-16 mx-auto md:h-20 md:w-20"
        >
        <div class="grid grid-cols-2 gap-2 md:gap-8 md:grid-cols-6">
            <template
                v-for="(game, index) in games"
                :key="index"
            >
                <RouterLink :to="{ name: 'cards' }">
                    <LazyImage
                        :img-src="`/assets/images/games/${game.image}`"
                        alt="Card Game"
                        img-class="object-cover rounded-xl"
                    />
                </RouterLink>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import LazyImage from '@/components/LazyImage.vue';
import { ref } from 'vue';

const games = ref([
    {
        'image': 'Shan Koe Mee.gif'
    },
    {
        'image': 'Bu Gyii.gif'
    }
])
</script>

<style scoped></style>