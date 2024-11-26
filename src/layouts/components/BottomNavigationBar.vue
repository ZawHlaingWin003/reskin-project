<template>
    <div>
        <RingBottomNavigation
            border-color='#10b981'
            title-color='#10b981'
            badge-color='#DC2626'
            icon-color='#10b981'
            :options="options"
            v-model="selectedMenuId"
            @click="handleMenuClick"
        >
            <template #title="{ props }"> <b>{{ t(props.title) }}</b> </template>
        </RingBottomNavigation>

        <Drawer
            v-model:visible="isMenuOpen"
            position="right"
            class="!w-2/3"
        >
            <div class="mb-16 space-y-6">
                <div class="space-y-1">
                    <div class="flex items-center gap-2 p-2 rounded-md bg-slate-500">
                        <img
                            src="/assets/images/default-user.png"
                            alt="User Profile"
                            class="w-12 md:w-16 md:h-16"
                        >
                        <div>
                            <h3 class="text-base font-bold md:text-xl text-gray-50">John Doe</h3>
                            <p class="text-gray-300 ">09 5100 4500</p>
                        </div>
                    </div>
                    <div class="p-2 rounded-md main-gradient">
                        <h1 class="text-base font-bold text-center md:text-3xl">15,000 MMK</h1>
                    </div>
                    <Button
                        :label="t('actions.add_money')"
                        as="router-link"
                        icon="pi pi-plus"
                        :to="{ name: 'user.deposit' }"
                        class="w-full whitespace-nowrap"
                    />
                    <Button
                        :label="t('actions.withdraw')"
                        severity="help"
                        as="router-link"
                        icon="pi pi-send"
                        :to="{ name: 'user.withdraw' }"
                        class="w-full whitespace-nowrap"
                    />
                </div>
                <div class="space-y-2">
                    <template
                        v-for="(game, index) in games"
                        :key="index"
                    >
                        <div
                            class="flex items-center gap-3 p-2 text-white rounded bg-slate-500"
                            @click="navigateRoute(game.link)"
                        >
                            <LazyImage
                                :img-src="`/assets/images/icon/${game.logo}`"
                                img-class="object-contain w-6 h-6"
                                :alt="game.name"
                            />
                            <p>
                                {{ game.name }}
                            </p>
                        </div>
                    </template>
                </div>
            </div>
        </Drawer>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import LazyImage from '@/components/LazyImage.vue';
import { useI18n } from 'vue-i18n';

const router = useRouter()
const route = useRoute()
const { t } = useI18n()

const isMenuOpen = ref(false)
const selectedMenuId = ref<number>(1);
const options = ref([
    { id: 1, icon: 'pi pi-home', title: 'nav.home', path: { name: "home" }, },
    { id: 2, icon: 'pi pi-gift', title: 'nav.promotion', path: { name: "promotions" } },
    { id: 3, icon: 'pi pi-user', title: 'nav.profile', path: { name: "user.profile" } },
    { id: 4, icon: 'pi pi-th-large', title: 'nav.menu' },
])
const games = ref([
    {
        'id': 1,
        'name': 'Slot',
        'logo': 'Slot.png',
        'link': 'slots'
    },
    {
        'id': 2,
        'name': 'Card',
        'logo': 'Card.png',
        'link': 'cards'
    },
    {
        'id': 3,
        'name': 'Casino',
        'logo': 'Casino.png',
        'link': 'cards'
    },
    {
        'id': 4,
        'name': 'Lottery',
        'logo': 'Lottery.png',
        'link': 'cards'
    },
    {
        'id': 5,
        'name': 'Fishing',
        'logo': 'Fishing.png',
        'link': 'cards'
    },
    {
        'id': 6,
        'name': 'VS',
        'logo': 'VS.png',
        'link': 'cards'
    },
])


const navigateRoute = (link: Object | string) => {
    isMenuOpen.value = false;
    router.push(link);
}

function handleMenuClick() {
    if (selectedMenuId.value === 4) {
        isMenuOpen.value = !isMenuOpen.value;
    } else {
        isMenuOpen.value = false
    }
}

watch(() => route.path, () => {
    if (selectedMenuId.value === 4) {
        isMenuOpen.value = false;
    }
});
</script>

<style scoped></style>