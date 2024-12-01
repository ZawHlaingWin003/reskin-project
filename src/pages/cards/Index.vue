<template>
    <main>
        <SectionContainer>
            <BackButton
                text="nav.home"
                :link="{ name: 'home' }"
            />
            <div class="space-y-4 md:space-y-8">
                <LazyImage
                    img-src="/assets/images/section-banner.gif"
                    alt="Section Banner"
                    img-class="object-cover w-full h-40 m-auto rounded-xl md:h-80"
                />

                <div class="md:hidden">
                    <FloatingActions />
                </div>

                <div class="grid grid-cols-3 md:gap-2 md:grid-cols-6">
                    <template
                        v-for="(level, index) in levels"
                        :key="index"
                    >
                        <RouterLink :to="{ name: 'home' }">
                            <LazyImage
                                :img-src="`/assets/images/levels/${level.image}`"
                                alt="Level"
                                img-class="object-cover game-card"
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
import Partners from '../home/sections/Partners.vue';
import PaymentList from '../home/sections/PaymentList.vue';
import LazyImage from '@/components/LazyImage.vue';
import MobileFooter from '@/layouts/partials/MobileFooter.vue';

const levels = ref([
    {
        'image': 'လူသစ်.png'
    },
    {
        'image': 'ဂျူနီယာ.png'
    },
    {
        'image': 'စီနီယာ.png'
    },
    {
        'image': 'ဘော့စ်.png'
    },
    {
        'image': 'မီလီယံနာ.png'
    },
    {
        'image': 'ဘီလီယံနာ.png'
    },
])
</script>

<style scoped></style>