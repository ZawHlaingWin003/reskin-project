<template>
    <main>
        <SectionContainer>
            <BackButton
                text="Home"
                :link="{ name: 'home' }"
            />
            <div class="space-y-4 md:space-y-8">
                <img
                    src="@/assets/images/section-banner.gif"
                    alt="Slot"
                    class="object-cover w-full h-40 m-auto rounded-xl md:h-80"
                >

                <div class="md:hidden">
                    <FloatingActions />
                </div>

                <div class="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-6">
                    <template
                        v-for="(level, index) in levels"
                        :key="index"
                    >
                        <RouterLink :to="{ name: 'home' }">
                            <img
                                :src="getImageUrl(level.image, { directory: 'levels' })"
                                alt="Slot Level"
                                class="object-cover game-card"
                            >
                        </RouterLink>
                    </template>
                </div>
            </div>
        </SectionContainer>

        <Partners />

        <PaymentList />
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BackButton from '@/components/BackButton.vue';
import FloatingActions from '@/components/FloatingActions.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import Partners from '../home/sections/Partners.vue';
import PaymentList from '../home/sections/PaymentList.vue';
import { getImageUrl } from '@/helpers/image-helper';

const levels = ref([
    {
        'image': 'level-1.png'
    },
    {
        'image': 'level-2.png'
    },
    {
        'image': 'level-3.png'
    },
    {
        'image': 'level-4.png'
    },
    {
        'image': 'level-5.png'
    },
    {
        'image': 'level-1.png'
    },
])
</script>

<style scoped></style>