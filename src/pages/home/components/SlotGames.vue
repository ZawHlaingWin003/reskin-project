<template>
    <div class="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-4">
        <template
            v-for="a in [1, 2, 3, 4]"
            :key="a"
        >
            <RouterLink :to="{ name: 'slots' }">
                <video
                    autoplay
                    muted
                    loop
                    class="rounded-xl game-card"
                >
                    <source
                        src="@/assets/images/shan-khoe-mhee.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support HTML video.
                </video>
            </RouterLink>
        </template>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>