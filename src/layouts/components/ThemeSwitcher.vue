<template>
    <div>
        <Button
            :icon="`pi ${isDarkTheme ? 'pi-moon' : 'pi-sun'}`"
            @click="switchTheme"
        />
    </div>
</template>

<script setup lang="ts">
import { THEME_KEY } from '@/utils/constants';
import { onMounted, ref } from 'vue';

let isDarkTheme = ref<boolean>(false);

const switchTheme = () => {

    isDarkTheme.value = !isDarkTheme.value;
    // updateThemeAttribute();
    localStorage.setItem(THEME_KEY, isDarkTheme.value.toString());
};

onMounted(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    isDarkTheme.value = savedTheme === 'true';
    // updateThemeAttribute();
});
</script>

<style scoped></style>