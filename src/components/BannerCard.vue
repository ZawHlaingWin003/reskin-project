<template>
    <div class="w-full h-full">
        <LazyImage
            :img-src="`/assets/images/${banner.src}`"
            img-class="object-cover w-full h-full"
            class="w-full h-full"
        />
    </div>
</template>

<script setup lang="ts">
import LazyImage from './LazyImage.vue';

const props = defineProps({
    banner: {
        type: Object,
        required: true
    },
})
</script>

<style scoped></style>