<template>
    <div class="mb-2 text-center text-gray-700 md:mb-8">
        <slot v-if="$slots.default"></slot>
        <h2
            class="text-lg font-bold text-transparent bg-clip-text main-gradient md:text-3xl"
            v-else
        >{{ text }}</h2>
        <div class="w-20 mx-auto">
            <img
                class="w-100"
                src="/assets/images/title-underline.png"
                alt="Title Bar"
            >
        </div>
        <!-- style="filter: invert(100%);" -->
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