<template>
    <div
        class="preloader"
        v-if="!isLoaded"
    >
        <!-- :class="{ 'fade-out': !isLoading }" -->
        <!-- <img
            src="/assets/images/lottery.gif"
            alt="Loading"
            class="w-20 h-20 md:w-32 md:h-32 jump"
        > -->
        <div class="custom-loader"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isLoading = ref(true);
const isLoaded = ref(false);
const finishedLoading = ref(false)

const disableScroll = () => {
    document.body.classList.add('overflow-hidden');
};

const enableScroll = () => {
    document.body.classList.remove('overflow-hidden');
};

const hideLoader = () => {
    isLoading.value = false;
    setTimeout(() => isLoaded.value = true, 300);
};

onMounted(() => {
    // disableScroll();
    console.log("DOC", document.readyState)
    document.onreadystatechange = () => {
        if (document.readyState == "complete") {
            // enableScroll();
            // hideLoader()
            isLoaded.value = true;
        }
    };
});

onBeforeUnmount(() => {
    // enableScroll();
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


.custom-loader {
    --R: 30px;
    --g1: #17B37D 96%, #0000;
    --g2: #E4E4ED 96%, #0000;
    width: calc(2*var(--R));
    height: calc(2*var(--R));
    border-radius: 50%;
    display: grid;
    mask: linear-gradient(#000 0 0);
    -webkit-mask: linear-gradient(#000 0 0);
    animation: s10 2s infinite linear;
}

.custom-loader::before,
.custom-loader::after {
    content: "";
    grid-area: 1/1;
    width: 50%;
    background:
        radial-gradient(farthest-side, var(--g1)) calc(var(--R) + 0.866*var(--R) - var(--R)) calc(var(--R) - 0.5*var(--R) - var(--R)),
        radial-gradient(farthest-side, var(--g1)) calc(var(--R) + 0.866*var(--R) - var(--R)) calc(var(--R) - 0.5*var(--R) - var(--R)),
        radial-gradient(farthest-side, var(--g2)) calc(var(--R) + 0.5*var(--R) - var(--R)) calc(var(--R) - 0.866*var(--R) - var(--R)),
        radial-gradient(farthest-side, var(--g1)) 0 calc(-1*var(--R)),
        radial-gradient(farthest-side, var(--g2)) calc(var(--R) - 0.5*var(--R) - var(--R)) calc(var(--R) - 0.866*var(--R) - var(--R)),
        radial-gradient(farthest-side, var(--g1)) calc(var(--R) - 0.866*var(--R) - var(--R)) calc(var(--R) - 0.5*var(--R) - var(--R)),
        radial-gradient(farthest-side, var(--g2)) calc(-1*var(--R)) 0,
        radial-gradient(farthest-side, var(--g1)) calc(var(--R) - 0.866*var(--R) - var(--R)) calc(var(--R) + 0.5*var(--R) - var(--R));
    background-size: calc(2*var(--R)) calc(2*var(--R));
    background-repeat: no-repeat;
}

.custom-loader::after {
    transform: rotate(180deg);
    transform-origin: right;
}

@keyframes s10 {
    100% {
        transform: rotate(-1turn)
    }
}
</style>
