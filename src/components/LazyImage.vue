<template>
    <div class="lazy-image-container">
        <img
            :src="imgSrc"
            :alt="alt"
            :title="title"
            :class="[imgClass, { 'loaded': lazyLoaded }]"
            @load="onLoad"
        >
        <div
            v-if="!lazyLoaded"
            class="progress-overlay"
        >
            <div
                class="progress-circular"
                :style="{ width: loaderSize, height: loaderSize }"
            ></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    imgSrc: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: 'Placeholder'
    },
    title: {
        type: String,
        default: ''
    },
    imgClass: {
        type: String,
        default: ''
    },
    loaderSize: {
        type: String,
        default: '30px'
    }
});

const lazyLoaded = ref(false);
const onLoad = () => {
    lazyLoaded.value = true;
};
</script>

<style scoped>
.lazy-image-container {
    position: relative;
}

.progress-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 1;
}

.progress-circular {
    border: 2px solid #ccc;
    border-top: 2px solid #F9A825;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.loaded {
    opacity: 1;
    transition: opacity 0.3s ease;
}

img {
    opacity: .5;
    transition: opacity 0.3s ease;
}
</style>