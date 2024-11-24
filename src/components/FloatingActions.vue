<template>
    <div class="flex items-center gap-2 md:gap-4">
        <Button
            :label="t('actions.add_money')"
            as="router-link"
            icon="pi pi-plus"
            :to="{ name: 'user.deposit' }"
            class="w-full whitespace-nowrap"
        />
        <Button
            :label="t('actions.withdraw')"
            severity="help"
            as="router-link"
            icon="pi pi-send"
            :to="{ name: 'user.withdraw' }"
            class="w-full whitespace-nowrap"
        />
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>

<style scoped></style>