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
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

const modules = [
    Autoplay,
    EffectFade,
    Pagination
]
import { ref } from 'vue';
import BannerCard from '@/components/BannerCard.vue';

const banners = ref([
    {
        'src': 'section-banner.gif'
    },
    {
        'src': 'banner-lg-2.jpg'
    },
    {
        'src': 'banner-lg-3.jpg'
    }
]);
</script>

<style scoped>
.banner-card {
    height: 50vh;
}

@media only screen and (max-width: 768px) {
    .banner-card {
        height: 30vh;
    }
}
</style>