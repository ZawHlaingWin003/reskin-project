<template>
    <SectionContainer>
        <Tabs
            :value="activeTab"
            scrollable
        >
            <TabList>
                <template v-for="(game, index) in games">
                    <Tab
                        :value="game.id"
                        as="div"
                        class="px-2 md:px-5 md:w-1/6"
                        @click="activeTab = game.id"
                    >
                        <GameCard
                            :game="game"
                            :class="{
                                'main-gradient': activeTab == game.id
                            }"
                        />
                    </Tab>
                </template>
            </TabList>
            <TabPanels>
                <template v-for="(game, index) in games">
                    <TabPanel :value="game.id">
                        <Component :is="game.component"></Component>
                    </TabPanel>
                </template>
            </TabPanels>
        </Tabs>
    </SectionContainer>
</template>

<script setup lang="ts">
import GameCard from '@/components/GameCard.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import { ref, shallowRef } from 'vue';
import CardGames from '../components/CardGames.vue';
import SlotGames from '../components/SlotGames.vue';
import CasinoGames from '../components/CasinoGames.vue';
import FishingGames from '../components/FishingGames.vue';
import VSGames from '../components/VSGames.vue';
import LotteryGames from '../components/LotteryGames.vue';

const activeTab = ref(1);
const games = shallowRef([
    {
        'id': 1,
        'name': 'Slot',
        'logo': 'poker.png',
        'component': SlotGames
    },
    {
        'id': 2,
        'name': 'Card',
        'logo': 'poker.png',
        'component': CardGames
    },
    {
        'id': 3,
        'name': 'Casino',
        'logo': 'dice.png',
        'component': CasinoGames
    },
    {
        'id': 4,
        'name': 'Lottery',
        'logo': 'dice.png',
        'component': LotteryGames
    },
    {
        'id': 5,
        'name': 'Fishing',
        'logo': 'fishing.png',
        'component': FishingGames
    },
    {
        'id': 6,
        'name': 'VS',
        'logo': 'chicken.png',
        'component': VSGames
    }
])
</script>

<style scoped></style>