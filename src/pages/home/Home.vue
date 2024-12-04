<template>
    <div>
        <Banner :banners="banners" />

        <SectionContainer class="mt-4 mb-2 md:hidden">
            <FloatingActions />
        </SectionContainer>

        <GameList
            class="mt-4"
            @change-tab="changeTab"
        />

        <Partners />

        <PaymentList />

        <MobileFooter />
    </div>

</template>

<script setup lang="ts">
import FloatingActions from '@/components/FloatingActions.vue';
import Banner from './sections/Banner.vue';
import GameList from './sections/GameList.vue';
import Partners from './sections/Partners.vue';
import PaymentList from './sections/PaymentList.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import MobileFooter from '@/layouts/partials/MobileFooter.vue';
import { onMounted, ref } from 'vue';

const activeGameTab = ref(1);

interface Banner {
    src: string;
}
const banners = ref<Banner[]>([])

const changeTab = (id: any) => {
    activeGameTab.value = id
    changeBannerList()
}

onMounted(() => {
    changeBannerList()
})

const changeBannerList = () => {
    if (activeGameTab.value == 1 || activeGameTab.value == 2 || activeGameTab.value == 3 || activeGameTab.value == 5) {
        banners.value = [
            {
                'src': 'Alibaba 549 GIF.gif'
            },
            {
                'src': '300 GIF.gif'
            },
            {
                'src': 'Free 5000 GIF.gif'
            },
        ];
    } else if (activeGameTab.value == 4) {
        banners.value = [
            {
                'src': 'Casino.png'
            },
        ]
    } else if (activeGameTab.value == 6) {
        banners.value = [
            {
                'src': 'Sport.png'
            },
        ]
    } else if (activeGameTab.value == 7) {
        banners.value = [
            {
                'src': 'Cock.png'
            },
        ]
    }
}

</script>

<style scoped></style>