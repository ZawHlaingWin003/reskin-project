<template>
    <SectionContainer>
        <SectionTitle text="Our Partners" />
        <div class="flex flex-wrap items-center justify-center">
            <template
                v-for="(partner, index) in ([...partners, ...partners])"
                :key="index"
            >
                <img
                    :src="getImageUrl(partner.logo)"
                    alt="Partner Logo"
                    class="w-1/3 p-1 shadow-card md:w-1/6"
                >
            </template>
        </div>
    </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/SectionContainer.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import { getImageUrl } from '@/helpers/image-helper';
import { ref } from 'vue';

const partners = ref([
    {
        'logo': 'partner-1.png'
    },
    {
        'logo': 'partner-3.png'
    },
    {
        'logo': 'partner-4.png'
    },
    {
        'logo': 'partner-5.png'
    },
    {
        'logo': 'partner-3.png'
    },
    {
        'logo': 'partner-4.png'
    },
    {
        'logo': 'partner-5.png'
    },
])

</script>

<style scoped></style>