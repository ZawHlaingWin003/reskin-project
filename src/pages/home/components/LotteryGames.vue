<template>
    <div class="space-y-2">
        <img
            src="@/assets/images/lottery.gif"
            alt="Lottery Gif"
            class="w-16 h-16 mx-auto md:h-20 md:w-20"
        >
        <div class="flex flex-col">
            <div class="grid grid-cols-2 gap-2 md:order-2 md:gap-8 md:grid-cols-6">
                <template
                    v-for="(game, index) in columns"
                    :key="index"
                >
                    <RouterLink :to="{ name: 'slots' }">
                        <LazyImage
                            :img-src="`/assets/images/games/${game.image}`"
                            alt="Lottery Game"
                            img-class="rounded-xl game-card"
                        />
                    </RouterLink>
                </template>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2">
                <template
                    v-for="(row, index) in rows"
                    :key="index"
                >
                    <LazyImage
                        :img-src="`/assets/images/games/${row.image}`"
                        alt="2D Live"
                        img-class="object-cover"
                    />
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