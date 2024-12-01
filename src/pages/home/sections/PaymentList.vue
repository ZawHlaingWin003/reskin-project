<template>
    <SectionContainer>
        <SectionTitle text="title.payment_we_accept" />

        <Swiper
            :modules="modules"
            :breakpoints="swiperOptions.breakpoints"
            :loop="true"
            :autoplay="{ delay: 1000, disableOnInteraction: false }"
            :slides-per-group="3"
        >
            <SwiperSlide
                v-for="(bank, index) in banks"
                :key="index"
            >
                <LazyImage
                    :img-src="`/assets/images/payments/${bank.logo}`"
                    alt="Bank Logo"
                    img-class="object-cover rounded-lg md:rounded-xl"
                    title="Bank Name"
                />
            </SwiperSlide>
        </Swiper>
    </SectionContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SectionContainer from '@/components/SectionContainer.vue';
import LazyImage from '@/components/LazyImage.vue';

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/vue';

const modules = [
    Autoplay
]
const swiperOptions = {
    breakpoints: {
        0: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 8,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 12,
            spaceBetween: 20
        }
    },
}

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