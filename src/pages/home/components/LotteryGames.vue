<template>
    <div class="space-y-2">
        <div class="flex flex-col">
            <div class="grid grid-cols-3 gap-2 md:order-2 md:gap-8 md:grid-cols-6">
                <template
                    v-for="(game, index) in columns"
                    :key="index"
                >
                    <RouterLink :to="game.to">
                        <LazyImage
                            :img-src="`/assets/images/games/${game.image}`"
                            alt="Lottery Game"
                            img-class="rounded-xl game-card"
                        />
                    </RouterLink>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LazyImage from '@/components/LazyImage.vue';
import { ref } from 'vue';

const columns = ref([
    {
        'image': '2D Lottery.gif',
        'to': { name: '2D' }
    },
    {
        'image': '3D Lottery.gif',
        'to': '3D'
    }
])

</script>

<style scoped></style>