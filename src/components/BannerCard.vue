<template>
    <div class="w-full h-full">
        <img
            :src="`/src/assets/images/${banner.src}`"
            alt="Banner"
            class="object-cover w-full h-full"
        >
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    banner: {
        type: Object,
        required: true
    },
})
</script>

<style scoped></style>