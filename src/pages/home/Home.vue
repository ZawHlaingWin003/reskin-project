<template>
    <div>
        <Banner />

        <SectionContainer class="md:hidden">
            <FloatingActions />
        </SectionContainer>

        <GameList />

        <Partners />

        <PaymentList />
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