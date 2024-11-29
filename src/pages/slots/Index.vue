<template>
    <main>
        <SectionContainer>
            <BackButton
                text="Home"
                :link="{ name: 'home' }"
            />


            <div class="space-y-4 md:space-y-8">
                <LazyImage
                    img-src="/assets/images/section-banner.gif"
                    alt="Section Banner"
                    img-class="object-cover w-full h-40 m-auto rounded-xl md:h-60"
                />

                <div class="md:hidden">
                    <FloatingActions />
                </div>

                <div class="flex items-center justify-center w-full gap-2">
                    <IconField class="w-full">
                        <InputIcon class="pi pi-search" />
                        <InputText
                            v-model="filters.search"
                            placeholder="Search Your Favorite Game"
                            class="w-full"
                        />
                    </IconField>
                    <Select
                        v-model="filters.selectedProvider"
                        :options="providers"
                        placeholder="Select Service Provider"
                        class="w-1/3"
                    />
                </div>

                <div class="grid grid-cols-3 gap-2 md:gap-4 md:grid-cols-6">
                    <template
                        v-for="(game, index) in games"
                        :key="index"
                    >
                        <RouterLink :to="{ name: 'home' }">
                            <LazyImage
                                :img-src="`/assets/images/games/${game.image}`"
                                alt="Slot Game"
                                img-class="object-cover rounded-lg"
                            />
                        </RouterLink>
                    </template>
                </div>
            </div>
        </SectionContainer>

        <Partners />

        <PaymentList />

        <MobileFooter />
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BackButton from '@/components/BackButton.vue';
import FloatingActions from '@/components/FloatingActions.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import LazyImage from '@/components/LazyImage.vue';
import Partners from '../home/sections/Partners.vue';
import PaymentList from '../home/sections/PaymentList.vue';
import MobileFooter from '@/layouts/partials/MobileFooter.vue';

const filters = ref({
    search: '',
    selectedProvider: null
})

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

const providers = ref([
    'SBOBET',
    'PG Soft',
    'Fast Spin'
])
</script>

<style scoped></style>