<template>
    <nav class="fixed top-0 z-50 grid items-center w-full h-24 bg-white border-b border-gray-200 start-0">
        <div class="w-full">
            <div class="flex items-center justify-between p-4 mx-4 md:mx-20">
                <RouterLink
                    :to="{ name: 'home' }"
                    class="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="@/assets/images/logo.png"
                        class="h-16"
                        alt="YY24 Logo"
                    >
                </RouterLink>
                <div class="flex items-center space-x-2 md:space-x-4 md:order-2 rtl:space-x-reverse">
                    <template v-if="authStore.isLoggedIn">
                        <div class="flex items-center">
                            <div class="flex items-center gap-2 py-[6px] pl-2 pr-4 text-white rounded bg-slate-500">
                                <img
                                    src="@/assets/images/coin.png"
                                    alt="Coin"
                                    class="w-4 h-4"
                                >
                                <p>
                                    15,000 MMK
                                </p>
                            </div>
                            <Button
                                icon="pi pi-plus"
                                aria-label="Save"
                                class="m-[-8px]"
                                as="router-link"
                                :to="{ name: 'user.deposit' }"
                            />
                        </div>
                    </template>
                    <template v-else>
                        <Button
                            label="Log In"
                            as="router-link"
                            icon="pi pi-sign-in"
                            :to="{ name: 'auth.login' }"
                            class="min-w-32"
                        />
                    </template>

                    <Button
                        type="button"
                        icon="pi pi-globe"
                        @click="toggle"
                        aria-haspopup="true"
                        aria-controls="overlay_tmenu"
                    />
                    <TieredMenu
                        ref="menu"
                        id="overlay_tmenu"
                        :model="langs"
                        popup
                    />
                </div>
                <div
                    class="items-center justify-center flex-1 hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <NavList :items="navItems" />
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import NavList from '@/components/NavList.vue';
import { useAuthStore } from '@/stores/AuthStore';
import { ref } from 'vue';

const authStore = useAuthStore();

const menu = ref();
const langs = ref([
    {
        label: 'Myanmar',
        icon: 'pi pi-search'
    },
    {
        label: 'English',
        icon: 'pi pi-search'
    },
]);

const navItems = ref([
    { to: '/', text: 'Home' },
    { to: '/promotions', text: 'Promotions' },
    { to: '/profile', text: 'Profile' },
])

const toggle = (event: any) => {
    menu.value.toggle(event);
};
</script>

<style scoped></style>