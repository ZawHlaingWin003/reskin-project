<template>
    <div>
        <ul
            class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavItem
                v-for="(item, index) in items"
                :key="index"
                :to="item.to"
                :text="i18n.global.t(item.text)"
            />
        </ul>
    </div>
</template>

<script setup lang="ts">
import i18n from '@/i18n';

const props = defineProps({
    items: {
        type: Array as any,
        required: true
    }
})
</script>

<style scoped></style>