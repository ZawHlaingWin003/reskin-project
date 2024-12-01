<template>
    <button
        class="flex items-center w-full gap-4 p-2 transition-all bg-transparent rounded-md cursor-pointer select-none text-color hover:bg-slate-600 active:bg-slate-700 dark:bg-slate-800"
        @click="onClick()"
    >
        <slot name="image"></slot>

        <div class="flex-1 leading-normal text-left text-white">
            <slot>{{ t(text) }}</slot>
        </div>

        <slot name="icon"></slot>
    </button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
const props = defineProps({
    text: {
        type: String,
        default: "",
    },
    onClick: {
        type: Function,
        default: null,
    },
})
</script>

<style scoped></style>