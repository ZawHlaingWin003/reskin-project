<template>
    <SectionContainer>
        <SectionTitle text="Payment We Accept" />

        <div class="flex flex-wrap items-center justify-center">
            <template
                v-for="(bank, index) in banks"
                :key="index"
            >
                <img
                    :src="getImageUrl(bank.logo, { directory: 'payments' })"
                    alt="Bank Logo"
                    class="object-cover w-1/6 p-1 rounded-lg md:w-1/12 md:p-4 shadow-card md:rounded-3xl"
                    title="Bank Name"
                >
            </template>
        </div>
    </SectionContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getImageUrl } from '@/helpers/image-helper';
import SectionContainer from '@/components/SectionContainer.vue';

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