<template>
    <div class="flex flex-col overflow-hidden rounded">
        <div class="flex justify-between p-2 main-gradient">
            <p>{{ dream.num_1 }}</p>
            <p>{{ dream.num_2 }}</p>
        </div>
        <LazyImage
            :img-src="`https://cdn.gold549.com/build/assets/img/dreamBook/${is2D ? 'twod_dreamBook' : ''}${is3D ? 'threed_dreamBook' : ''}_${dream.dreamBookId}.png`"
            :alt="dream.title_en"
            class="flex-1"
            img-class="object-contain"
        />
        <div class="p-2 text-center main-gradient">
            <p class="font-semibold capitalize">{{ dream.title_en }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import LazyImage from '@/components/LazyImage.vue';

const props = defineProps({
    dream: {
        type: Object,
        required: true
    },
    is2D: {
        type: Boolean
    },
    is3D: {
        type: Boolean
    },
})
</script>

<style scoped></style>