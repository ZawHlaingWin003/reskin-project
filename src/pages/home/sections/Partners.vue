<template>
    <SectionContainer>
        <SectionTitle
            text="Our Partners"
            class="mb-0"
        />
        <Swiper
            :modules="modules"
            :breakpoints="swiperOptions.breakpoints"
            :loop="true"
            :autoplay="{ delay: 1500, disableOnInteraction: false }"
            :slides-per-group="3"
        >
            <SwiperSlide
                v-for="(partner, index) in ([...partners, ...partners, ...partners])"
                :key="index"
            >
                <LazyImage
                    :img-src="`/assets/images/partners/${partner.logo}`"
                    alt="Partner Logo"
                />
            </SwiperSlide>
        </Swiper>
    </SectionContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LazyImage from '@/components/LazyImage.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Autoplay } from "swiper/modules";

const modules = [
    Autoplay
]
const swiperOptions = {
    breakpoints: {
        0: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 8,
            spaceBetween: 20
        }
    },
}

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