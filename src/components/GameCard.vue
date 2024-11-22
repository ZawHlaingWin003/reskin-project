<template>
    <div class="w-full px-8 py-4 space-y-4 text-center text-white rounded-lg bg-slate-400">
        <img
            :src="`/src/assets/images/${game.logo}`"
            alt="Game Icon"
            class="object-contain w-16 h-16 mx-auto md:w-24 md:h-24"
        >
        <p class="font-bold">{{ game.name }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    game: {
        type: Object,
        required: true
    },
})
</script>

<style scoped></style>