<template>
    <div class="mb-2 text-center text-gray-700 md:mb-8">
        <slot v-if="$slots.default"></slot>
        <h2
            class="text-lg font-bold text-transparent bg-clip-text main-gradient md:text-3xl"
            v-else
        >{{ t(text) }}</h2>
        <div class="w-20 mx-auto md:w-40">
            <img
                class="w-100 dark:invert"
                src="/assets/images/title-underline.png"
                alt="Title Bar"
            >
        </div>
    </div>

</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const props = defineProps({
    text: {
        type: String,
        default: "",
    },
})
</script>

<style scoped></style>