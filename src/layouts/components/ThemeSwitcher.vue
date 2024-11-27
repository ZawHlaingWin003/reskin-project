<template>
    <div>
        <Button
            :icon="`pi ${isDarkTheme ? 'pi-moon' : 'pi-sun'}`"
            @click="switchTheme"
        />
    </div>
</template>

<script setup lang="ts">
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';
import { onMounted, ref } from 'vue';

let isDarkTheme = ref<boolean>(false);

const switchTheme = () => {
    isDarkTheme.value = !isDarkTheme.value;
    updateThemeAttribute();
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME_KEY, isDarkTheme.value.toString());
};

const updateThemeAttribute = () => {
    if (isDarkTheme.value) {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }
};

onMounted(() => {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.THEME_KEY);
    isDarkTheme.value = savedTheme === 'true';
    updateThemeAttribute();
});
</script>

<style scoped></style>