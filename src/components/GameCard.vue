<template>
    <div
        class="px-3 py-2 space-y-1 text-center text-white rounded-lg md:space-y-2 md:p-4 bg-slate-500 dark:bg-slate-800">
        <LazyImage
            :img-src="`/assets/images/icons/${game.logo}`"
            img-class="object-contain w-10 h-10 mx-auto md:w-16 md:h-16"
        />
        <p class="font-bold">{{ t(game.name) }}</p>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import LazyImage from './LazyImage.vue';
const { t } = useI18n()

const props = defineProps({
    game: {
        type: Object,
        required: true
    },
})
</script>

<style scoped></style>