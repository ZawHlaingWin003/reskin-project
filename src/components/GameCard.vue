<template>
    <div class="w-full px-4 py-2 space-y-2 text-center text-white rounded-lg md:space-y-4 md:px-8 md:py-4 bg-slate-500">
        <img
            :src="getImageUrl(game.logo)"
            alt="Game Icon"
            class="object-contain w-12 h-12 mx-auto md:w-24 md:h-24"
        >
        <p class="font-bold">{{ game.name }}</p>
    </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '@/helpers/image-helper';

const props = defineProps({
    game: {
        type: Object,
        required: true
    },
})
</script>

<style scoped></style>