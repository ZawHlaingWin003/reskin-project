<template>
    <div class="px-8 py-6 rounded-lg md:py-8 main-gradient">
        <p>{{ t('profile.your_current_balance') }}</p>
        <h1 class="text-2xl font-bold md:text-3xl">{{ balance }} MMK</h1>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const props = defineProps({
    balance: {
        type: String,
        required: true
    }
})
</script>

<style scoped></style>