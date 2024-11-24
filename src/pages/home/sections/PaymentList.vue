<template>
    <SectionContainer>
        <SectionTitle text="Payment We Accept" />

        <div class="flex flex-wrap items-center justify-center">
            <template
                v-for="(bank, index) in banks"
                :key="index"
            >
                <LazyImage
                    class="w-1/6 p-1 md:w-1/12 md:p-4 shadow-card"
                    :img-src="`/assets/images/payments/${bank.logo}`"
                    alt="Bank Logo"
                    img-class="object-cover rounded-lg md:rounded-xl"
                    title="Bank Name"
                />
            </template>
        </div>
    </SectionContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SectionContainer from '@/components/SectionContainer.vue';
import LazyImage from '@/components/LazyImage.vue';

const banks = ref([
    {
        logo: 'bank-1.png'
    },
    {
        logo: 'bank-2.png'
    },
    {
        logo: 'bank-3.png'
    },
    {
        logo: 'bank-4.png'
    },
    {
        logo: 'bank-5.png'
    },
    {
        logo: 'bank-6.png'
    },
    {
        logo: 'bank-7.png'
    },
    {
        logo: 'bank-8.png'
    },
    {
        logo: 'bank-9.png'
    },
    {
        logo: 'bank-1.png'
    },
    {
        logo: 'bank-2.png'
    },
    {
        logo: 'bank-3.png'
    },
    {
        logo: 'bank-4.png'
    },
    {
        logo: 'bank-5.png'
    },
    {
        logo: 'bank-6.png'
    },
])
</script>

<style scoped></style>