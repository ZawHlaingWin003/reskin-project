<template>
    <div class="w-full h-full">
        <img
            :src="getImageUrl(banner.src)"
            alt="Banner"
            class="object-cover w-full h-full"
        >
    </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '@/helpers/image-helper';

const props = defineProps({
    banner: {
        type: Object,
        required: true
    },
})
</script>

<style scoped></style>