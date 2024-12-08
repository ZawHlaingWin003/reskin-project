<template>
    <main class="relative flex flex-col min-h-screen dark:bg-slate-900">
        <FixedDial />

        <Header />

        <div
            class="fixed z-10 hidden p-4 transition-opacity duration-500 bg-gray-200 rounded-lg top-32 right-24 md:block dark:bg-slate-800"
            :class="{
                'opacity-0 pointer-events-none': hideFloatingActions,
                'opacity-100 pointer-events-auto': !hideFloatingActions
            }"
        >
            <FloatingActions />
        </div>

        <div class="pt-16 pb-10 md:pt-24 md:pb-0 bg-gray-50 dark:bg-slate-900">
            <RouterView v-slot="{ Component }">
                <transition
                    name="slide"
                    mode="out-in"
                >
                    <component
                        :is="Component"
                        :key="$route.path"
                    ></component>
                </transition>
            </RouterView>
        </div>

        <Footer class="hidden md:block" />

        <div class="md:hidden">
            <BottomNavigationBar />
        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import Header from './partials/Header.vue';
import Footer from './partials/Footer.vue';
import FloatingActions from '@/components/FloatingActions.vue';
import BottomNavigationBar from './components/BottomNavigationBar.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import FixedDial from './components/FixedDial.vue';

const hideFloatingActions = ref(false);
const lastScrollY = ref(0);

const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY.value) {
        hideFloatingActions.value = false;
    } else if (currentScrollY > lastScrollY.value) {
        hideFloatingActions.value = true;
    }

    lastScrollY.value = currentScrollY;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped></style>