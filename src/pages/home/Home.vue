<template>
    <div>
        <Banner />

        <SectionContainer class="md:hidden">
            <FloatingActions />
        </SectionContainer>

        <GameList />

        <Partners />

        <PaymentList />

        <SectionContainer>
            <div class="pt-2 space-y-1 text-center text-gray-500 border-t border-t-gray-300">
                <p>
                    YY24 offers state-of-the-art technology that has innovated, Asia's best gaming products and
                    games
                    that has rapidly become higher in class.
                </p>
                <p>© YY24 All rights reserved.</p>
            </div>
        </SectionContainer>
    </div>

</template>

<script setup lang="ts">
import FloatingActions from '@/components/FloatingActions.vue';
import Banner from './sections/Banner.vue';
import GameList from './sections/GameList.vue';
import Partners from './sections/Partners.vue';
import PaymentList from './sections/PaymentList.vue';
import SectionContainer from '@/components/SectionContainer.vue';
</script>

<style scoped></style>