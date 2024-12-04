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
            <div class="mb-20 space-y-6">
                <div class="space-y-1">
                    <div
                        class="flex items-center gap-2 p-2 rounded-md cursor-pointer bg-slate-500 dark:bg-slate-800"
                        @click="router.push({ name: 'user.profile' })"
                    >
                        <img
                            src="/assets/images/default-user.png"
                            alt="User Profile"
                            class="w-12 md:w-16 md:h-16"
                        >
                        <div>
                            <h3 class="text-base font-bold md:text-xl text-gray-50">{{ userInfo?.name }}</h3>
                            <p class="text-gray-300 ">{{ userInfo?.phone }}</p>
                        </div>
                    </div>
                    <div class="p-2 rounded-md main-gradient">
                        <h1 class="text-base font-bold text-center md:text-3xl">{{ userInfo?.amount }} MMK</h1>
                    </div>
                    <Button
                        :label="t('profile.add_money')"
                        as="router-link"
                        icon="pi pi-plus"
                        :to="{ name: 'user.deposit' }"
                        class="w-full whitespace-nowrap"
                    />
                    <Button
                        :label="t('profile.withdraw')"
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
                            class="flex items-center gap-3 p-2 text-white rounded bg-slate-500 dark:bg-slate-800"
                            @click="navigateRoute(game.link)"
                        >
                            <LazyImage
                                :img-src="`/assets/images/icons/${game.logo}`"
                                img-class="object-contain w-6 h-6"
                                :alt="game.name"
                            />
                            <p>
                                {{ t(game.name) }}
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
import { useAuthStore } from '@/stores/AuthStore';
import { storeToRefs } from 'pinia';

const router = useRouter()
const route = useRoute()
const { t } = useI18n()

const authStore = useAuthStore();
const { userInfo } = storeToRefs(authStore)

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
        'name': 'games.card',
        'logo': 'Card.png',
        'link': 'cards'
    },
    {
        'id': 2,
        'name': 'games.slot',
        'logo': 'Slot.png',
        'link': 'slots'
    },
    {
        'id': 3,
        'name': 'games.fishing',
        'logo': 'Fish.png',
        'link': 'cards'
    },
    {
        'id': 4,
        'name': 'games.casino',
        'logo': 'Casino.png',
        'link': 'cards'
    },
    {
        'id': 5,
        'name': 'games.lottery',
        'logo': '2D3D.png',
        'link': 'cards'
    },
    {
        'id': 6,
        'name': 'games.sport',
        'logo': 'Sport.png',
        'link': 'cards'
    },
    {
        'id': 7,
        'name': 'games.vs',
        'logo': 'VS.png',
        'link': 'cards'
    }
])


const navigateRoute = (link: Object | string) => {
    isMenuOpen.value = false;
    router.push(link);
}

function handleMenuClick() {
    if (selectedMenuId.value === 4) {
        isMenuOpen.value = !isMenuOpen.value;
    } else if (selectedMenuId.value == 1) {
        router.push({ name: 'home' })
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