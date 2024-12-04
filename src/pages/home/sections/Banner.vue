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
import { onMounted, ref, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import BannerCard from '@/components/BannerCard.vue';

const modules = [
    Autoplay,
    EffectFade,
    Pagination
]

interface Banner {
    src: string;
}

const props = defineProps<{
    banners: Banner[];
}>();
</script>

<style scoped>
.banner-card {
    height: 50vh;
}

@media only screen and (max-width: 768px) {
    .banner-card {
        /* height: 20vh; */
        height: 150px;
    }
}
</style>