<template>
    <main>
        <SectionContainer>
            <BackButton
                text="Home"
                :link="{ name: 'home' }"
            />

            <img
                src="@/assets/images/card.gif"
                alt="Card"
                class="w-20 h-20 m-auto my-8 md:w-40 md:h-40"
            >
            <div class="space-y-8">

                <div class="md:hidden">
                    <FloatingActions />
                </div>

                <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <template
                        v-for="(level, index) in levels"
                        :key="index"
                    >
                        <RouterLink :to="{ name: 'home' }">
                            <img
                                :src="getImageUrl(level.image)"
                                alt="Slot Level"
                                class="object-cover rounded-xl game-card"
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