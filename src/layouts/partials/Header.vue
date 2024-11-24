<template>
    <nav class="fixed top-0 z-50 grid items-center w-full h-16 bg-white border-b border-gray-200 md:h-24 start-0">
        <div class="w-full">
            <div class="flex items-center justify-between mx-4 md:p-4 md:mx-20">
                <RouterLink
                    :to="{ name: 'home' }"
                    class="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="@/assets/images/logo.png"
                        class="h-12 md:h-16"
                        alt="YY24 Logo"
                    >
                </RouterLink>
                <div class="flex items-center gap-2 md:gap-4 md:order-2 rtl:space-x-reverse">
                    <template v-if="authStore.isLoggedIn">
                        <div class="flex items-center mx-2">
                            <div
                                class="flex items-center gap-1 md:gap-2 py-[7px] pl-2 pr-4 text-white rounded bg-slate-500">
                                <img
                                    src="@/assets/images/coin.png"
                                    alt="Coin"
                                    class="w-2 h-2 md:w-4 md:h-4"
                                >
                                <p class="text-xs">
                                    15,000 MMK
                                </p>
                            </div>
                            <Button
                                icon="pi pi-plus"
                                aria-label="Save"
                                class="m-[-8px]"
                                size="small"
                                as="router-link"
                                :to="{ name: 'user.deposit' }"
                            />
                        </div>
                    </template>
                    <template v-else>
                        <Button
                            :label="t('actions.login')"
                            as="router-link"
                            icon="pi pi-sign-in"
                            :to="{ name: 'auth.login' }"
                            class="md:min-w-32"
                        />
                    </template>

                    <ThemeSwitcher class="hidden" />

                    <LanguageDropdown />
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
import ThemeSwitcher from '../components/ThemeSwitcher.vue';
import LanguageDropdown from '../components/LanguageDropdown.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
const authStore = useAuthStore();

const navItems = ref([
    {
        to: '/',
        text: "nav.home"
    },
    {
        to: '/promotions',
        text: "nav.promotion"
    },
    {
        to: '/profile',
        text: "nav.profile"
    },
])
</script>

<style scoped></style>