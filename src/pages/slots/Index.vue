<template>
    <SectionContainer>
        <BackButton
            text="Home"
            :link="{ name: 'home' }"
        />

        <img
            src="@/assets/images/slot.gif"
            alt="Slot"
            class="m-auto my-8"
        >
        <div class="space-y-8">

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

            <div class="grid grid-cols-3 gap-4 md:grid-cols-6">
                <template
                    v-for="(game, index) in games"
                    :key="index"
                >
                    <RouterLink :to="{ name: 'home' }">
                        <img
                            :src="getImageUrl(game.image)"
                            alt="Slot Game"
                            class="object-cover rounded-xl"
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