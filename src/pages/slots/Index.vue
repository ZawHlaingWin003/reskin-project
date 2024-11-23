<template>
    <SectionContainer>
        <BackButton
            text="Home"
            :link="{ name: 'home' }"
        />


        <div class="space-y-4 md:space-y-8">
            <img
                src="@/assets/images/section-banner.gif"
                alt="Slot"
                class="object-cover w-full h-40 m-auto rounded-xl md:h-60"
            >

            <div class="md:hidden">
                <FloatingActions />
            </div>

            <div class="flex justify-center w-full">
                <IconField class="w-full md:w-1/3">
                    <InputIcon class="pi pi-search" />
                    <InputText
                        v-model="search"
                        placeholder="Search Your Favorite Game"
                        class="w-full"
                    />
                </IconField>
            </div>

            <div class="grid grid-cols-3 gap-2 md:gap-4 md:grid-cols-6">
                <template
                    v-for="(game, index) in games"
                    :key="index"
                >
                    <RouterLink :to="{ name: 'home' }">
                        <img
                            :src="getImageUrl(game.image, { directory: 'games' })"
                            alt="Slot Game"
                            class="object-cover rounded-lg"
                        >
                    </RouterLink>
                </template>
            </div>
        </div>
    </SectionContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BackButton from '@/components/BackButton.vue';
import FloatingActions from '@/components/FloatingActions.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import { getImageUrl } from '@/helpers/image-helper';

const search = ref('')

const games = ref([
    {
        'image': 'game-1.png'
    },
    {
        'image': 'game-2.png'
    },
    {
        'image': 'game-3.png'
    },
    {
        'image': 'game-1.png'
    },
    {
        'image': 'game-2.png'
    },
    {
        'image': 'game-3.png'
    },
    {
        'image': 'game-2.png'
    },
    {
        'image': 'game-3.png'
    },
    {
        'image': 'game-1.png'
    },
    {
        'image': 'game-2.png'
    },
    {
        'image': 'game-3.png'
    },
    {
        'image': 'game-3.png'
    },
])
</script>

<style scoped></style>