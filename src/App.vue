<template>
    <Toast />

    <PageLoader />

    <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import PageLoader from './components/PageLoader.vue';
import { LOCAL_STORAGE_KEYS } from './utils/constants';

onMounted(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME_KEY, 'true');
})
</script>

<style scoped></style>