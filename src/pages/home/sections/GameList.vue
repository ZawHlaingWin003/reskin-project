<template>
    <SectionContainer>
        <ul class="relative flex flex-row w-full space-x-1 overflow-x-auto md:space-x-4">
            <template v-for="(game, index) in games">
                <li
                    class="flex-none cursor-pointer md:flex-auto md:w-full"
                    @click="activeTab = game.id"
                >
                    <GameCard
                        :game="game"
                        :class="{
                            'main-gradient': activeTab == game.id
                        }"
                    />
                </li>
            </template>
        </ul>
        <div class="mt-4">
            <Transition name="fade">
                <Component :is="activeComponent"></Component>
            </Transition>
        </div>
    </SectionContainer>
</template>

<script setup lang="ts">
import { computed, ref, shallowRef } from 'vue';
import GameCard from '@/components/GameCard.vue';
import SectionContainer from '@/components/SectionContainer.vue';
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
        'logo': 'Slot.png',
        'component': SlotGames
    },
    {
        'id': 2,
        'name': 'Card',
        'logo': 'Card.png',
        'component': CardGames
    },
    {
        'id': 3,
        'name': 'Casino',
        'logo': 'Casino.png',
        'component': CasinoGames
    },
    {
        'id': 4,
        'name': 'Lottery',
        'logo': 'Lottery.png',
        'component': LotteryGames
    },
    {
        'id': 5,
        'name': 'Fishing',
        'logo': 'Fish.png',
        'component': FishingGames
    },
    {
        'id': 6,
        'name': 'VS',
        'logo': 'VS.png',
        'component': VSGames
    }
])
const activeComponent = computed(() => {
    const game = games.value.find((g) => g.id === activeTab.value);
    return game ? game.component : null;
});
</script>

<style scoped></style>