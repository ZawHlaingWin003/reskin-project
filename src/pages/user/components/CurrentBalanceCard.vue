<template>
    <div class="px-8 pt-8 pb-12 main-gradient rounded-xl">
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