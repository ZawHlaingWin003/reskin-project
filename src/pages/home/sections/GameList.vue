<template>
    <SectionContainer>
        <ul class="relative flex flex-row w-full space-x-1 overflow-x-auto md:space-x-4">
            <template v-for="(game, index) in games">
                <li
                    class="flex-none cursor-pointer md:flex-auto md:w-full"
                    @click="changeGameTab(game)"
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
import SportGames from '../components/SportGames.vue';

const emit = defineEmits(['changeTab'])

const activeTab = ref(1);
const games = shallowRef([
    {
        'id': 1,
        'name': 'games.card',
        'logo': 'Card.png',
        'component': CardGames
    },
    {
        'id': 2,
        'name': 'games.slot',
        'logo': 'Slot.png',
        'component': SlotGames
    },
    {
        'id': 3,
        'name': 'games.fishing',
        'logo': 'Fish.png',
        'component': FishingGames
    },
    {
        'id': 4,
        'name': 'games.casino',
        'logo': 'Casino.png',
        'component': CasinoGames
    },
    {
        'id': 5,
        'name': 'games.lottery',
        'logo': '2D3D.png',
        'component': LotteryGames
    },
    {
        'id': 6,
        'name': 'games.sport',
        'logo': 'Sport.png',
        'component': SportGames
    },
    {
        'id': 7,
        'name': 'games.vs',
        'logo': 'VS.png',
        'component': VSGames
    }
])

const changeGameTab = (game: any) => {
    activeTab.value = game.id
    emit('changeTab', activeTab.value)
}
const activeComponent = computed(() => {
    const game = games.value.find((g) => g.id === activeTab.value);
    return game ? game.component : null;
});
</script>

<style scoped></style>