<template>
    <main class="relative flex flex-col min-h-screen">
        <Header />

        <div
            class="fixed z-10 hidden p-4 transition-opacity duration-500 bg-gray-200 rounded-lg top-32 right-24 md:block"
            :class="{
                'opacity-0 pointer-events-none': hideFloatingActions,
                'opacity-100 pointer-events-auto': !hideFloatingActions
            }"
        >
            <FloatingActions />
        </div>

        <div class="py-16 md:pt-24 md:pb-0 bg-gray-50">
            <RouterView v-slot="{ Component }">
                <transition
                    name="slide"
                    mode="out-in"
                >
                    <component
                        :is="Component"
                        :key="$route.path"
                    ></component>
                </transition>
            </RouterView>
        </div>

        <Footer />

        <div class="md:hidden">
            <RingBottomNavigation
                border-color='#10b981'
                title-color='#10b981'
                badge-color='#DC2626'
                icon-color='#10b981'
                :options="options"
                v-model="selectedMenuId"
                @click="handleMenuClick"
            />
        </div>

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
                        label="Add Money"
                        as="router-link"
                        icon="pi pi-plus"
                        :to="{ name: 'user.deposit' }"
                        class="w-full whitespace-nowrap"
                    />
                    <Button
                        label="Withdraw"
                        severity="help"
                        as="router-link"
                        icon="pi pi-send"
                        :to="{ name: 'user.withdraw' }"
                        class="w-full whitespace-nowrap"
                    />
                </div>
                <div class="space-y-1">
                    <template
                        v-for="(game, index) in games"
                        :key="index"
                    >
                        <div
                            class="flex items-center gap-3 px-2 py-1 text-white rounded-md bg-slate-500"
                            @click="navigateRoute(game.link)"
                        >
                            <LazyImage
                                :img-src="`/assets/images/${game.logo}`"
                                img-class="object-contain w-8 h-8"
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
    </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Header from './partials/Header.vue';
import Footer from './partials/Footer.vue';
import FloatingActions from '@/components/FloatingActions.vue';
import LazyImage from '@/components/LazyImage.vue';

const router = useRouter()
const route = useRoute()

const selectedMenuId = ref<number>(1);
const options = ref([
    { id: 1, icon: 'pi pi-home', title: 'Home', path: { name: "home" }, },
    { id: 2, icon: 'pi pi-gift', title: 'Promotion', path: { name: "promotions" } },
    { id: 3, icon: 'pi pi-user', title: 'Profile', path: { name: "user.profile" } },
    { id: 4, icon: 'pi pi-th-large', title: 'Menu' },
])

const hideFloatingActions = ref(false);
const isMenuOpen = ref(false)
const lastScrollY = ref(0);

const navigateRoute = (link: Object | string) => {
    isMenuOpen.value = false;
    router.push(link);
}

const games = ref([
    {
        'id': 1,
        'name': 'Slot',
        'logo': 'poker.png',
        'link': 'slots'
    },
    {
        'id': 2,
        'name': 'Card',
        'logo': 'poker.png',
        'link': 'cards'
    },
    {
        'id': 3,
        'name': 'Casino',
        'logo': 'dice.png',
        'link': 'cards'
    },
    {
        'id': 4,
        'name': 'Lottery',
        'logo': 'dice.png',
        'link': 'cards'
    },
    {
        'id': 5,
        'name': 'Fishing',
        'logo': 'fishing.png',
        'link': 'cards'
    },
    {
        'id': 6,
        'name': 'VS',
        'logo': 'chicken.png',
        'link': 'cards'
    },
])

const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY.value) {
        hideFloatingActions.value = false;
    } else if (currentScrollY > lastScrollY.value) {
        hideFloatingActions.value = true;
    }

    lastScrollY.value = currentScrollY;
};

function handleMenuClick() {
    if (selectedMenuId.value === 4) {
        isMenuOpen.value = !isMenuOpen.value;
    } else {
        isMenuOpen.value = false
    }
}

watch(() => route.path, () => {
    if (selectedMenuId.value === 4) {
        isMenuOpen.value = false; // Close menu if the route changes
    }
});

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped></style>