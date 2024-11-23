<template>
    <RouterLink
        :to="link"
        class="flex items-center gap-2 mb-4 text-gray-500 md:gap-4"
    >
        <i class=" pi pi-chevron-circle-left md:text-xl"></i>
        <p class="text-base md:text-xl">{{ text }}</p>
    </RouterLink>
</template>

<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    link: {
        type: [String, Object],
        required: true,
    },
})
</script>

<style scoped></style>