<template>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <template
            v-for="(game, index) in [1, 2]"
            :key="index"
        >
            <RouterLink :to="{ name: 'cards' }">
                <img
                    src="@/assets/images/live-casino.png"
                    alt="Live Casino"
                    class="object-cover rounded-xl"
                >
            </RouterLink>
        </template>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>