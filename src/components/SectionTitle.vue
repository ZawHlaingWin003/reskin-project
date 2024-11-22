<template>
    <div class="mb-8 text-center text-gray-700">
        <slot v-if="$slots.default"></slot>
        <h2
            class="text-3xl font-bold"
            v-else
        >{{ text }}</h2>
    </div>

</template>

<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        default: "",
    },
})
</script>

<style scoped></style>