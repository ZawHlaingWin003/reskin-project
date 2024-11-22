<template>
    <SectionContainer>
        <SectionTitle text="Payment We Accept" />

        <div class="grid grid-cols-3 gap-4 md:gap-8 md:grid-cols-6">
            <template
                v-for="(bank, index) in banks"
                :key="index"
            >
                <img
                    :src="`/src/assets/images/${bank.logo}`"
                    alt="Bank Logo"
                    class="rounded-3xl"
                >
            </template>
        </div>
    </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/SectionContainer.vue';
import { ref } from 'vue';


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
        logo: 'bank-1.png'
    },
    {
        logo: 'bank-2.png'
    },
])
</script>

<style scoped></style>