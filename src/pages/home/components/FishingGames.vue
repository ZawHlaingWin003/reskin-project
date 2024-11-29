<template>
    <div class="space-y-2">
        <div class="grid grid-cols-3 gap-2 md:gap-8 md:grid-cols-6">
            <template
                v-for="(game, index) in games"
                :key="index"
            >
                <RouterLink :to="{ name: 'cards' }">
                    <LazyImage
                        :img-src="`/assets/images/games/${game.image}`"
                        alt="Fishing Game"
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