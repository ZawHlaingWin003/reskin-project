<template>
    <div
        class="preloader"
        v-if="!finishedLoading"
        :class="{ 'fade-out': !isLoading }"
    >
        <img
            src="/assets/images/lottery.gif"
            alt="Loading"
            class="w-20 h-20 md:w-32 md:h-32 jump"
        >
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isLoading = ref(true);
const finishedLoading = ref(false)

const disableScroll = () => {
    document.body.classList.add('overflow-hidden');
};

const enableScroll = () => {
    document.body.classList.remove('overflow-hidden');
};

onMounted(() => {
    disableScroll();

    setTimeout(() => {
        enableScroll();
        isLoading.value = false;
        setTimeout(() => {
            finishedLoading.value = true
        }, 300)
    }, 3000);
});

onBeforeUnmount(() => {
    enableScroll();
});
</script>

<style scoped>
.preloader {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px) saturate(180%) brightness(120%);
    -webkit-backdrop-filter: blur(10px) saturate(180%) brightness(120%);
    position: fixed;
    inset: 0;
    z-index: 2147483648;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: opacity 0.3s ease;
}

.preloader.remove {
    display: none;
}

.preloader.fade-out {
    opacity: 0;
}
</style>
