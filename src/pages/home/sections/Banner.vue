<template>
    <Swiper
        :modules="modules"
        :slides-per-view="1"
        :autoplay="{ delay: 1000, disableOnInteraction: false }"
        effect="fade"
        :pagination="{
            clickable: true,
            renderBullet: (index: number, className: string) => {
                return `<span class='${className} swiper-bullet'></span>`
            }
        }"
    >
        <SwiperSlide
            v-for="(banner, index) in banners"
            :key="index"
        >
            <BannerCard
                :banner="banner"
                class="banner-card"
            />
        </SwiperSlide>
    </Swiper>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

const modules = [
    Autoplay,
    EffectFade,
    Pagination
]
import BannerCard from '@/components/BannerCard.vue';

import CardImg from '@/assets/images/banners/Card.png';
import SlotImg from '@/assets/images/banners/Slot.png';
import FishingImg from '@/assets/images/banners/Fishing.png';
import CasinoImg from '@/assets/images/banners/Casino.png';
import SportImg from '@/assets/images/banners/Sport.png';
import CockImg from '@/assets/images/banners/Cock.png';

const banners = ref([
    {
        'src': 'Card.png'
    },
    {
        'src': 'Slot.png'
    },
    {
        'src': 'Fishing.png'
    },
    {
        'src': 'Casino.png'
    },
    {
        'src': 'Sport.png'
    },
    {
        'src': 'Cock.png'
    },
]);
</script>

<style scoped>
.banner-card {
    height: 50vh;
}

@media only screen and (max-width: 768px) {
    .banner-card {
        height: 20vh;
    }
}
</style>