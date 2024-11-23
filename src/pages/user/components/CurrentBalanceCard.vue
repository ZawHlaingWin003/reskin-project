<template>
    <div class="px-8 py-6 rounded-lg md:py-8 main-gradient">
        <p>Your Current Balance</p>
        <h1 class="text-3xl font-bold">{{ balance }} MMK</h1>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    balance: {
        type: String,
        required: true
    }
})
</script>

<style scoped></style>