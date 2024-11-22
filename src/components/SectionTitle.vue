<template>
    <div class="mb-2 text-center text-gray-700 md:mb-8">
        <slot v-if="$slots.default"></slot>
        <h2
            class="text-xl font-bold md:text-3xl"
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