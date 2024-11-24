<template>
    <div>
        <Button
            type="button"
            icon="pi pi-globe"
            @click="openMenu"
            aria-haspopup="true"
            aria-controls="overlay_tmenu"
        >
            <template v-if="locale">
                <img
                    :src="`/assets/images/${getCurrentLocaleImage(locale)}`"
                    class="w-4 h-4 rounded"
                >
            </template>
        </Button>
        <TieredMenu
            ref="menu"
            id="overlay_tmenu"
            :model="langs"
            popup
        >
            <template #item="{ item, props }">
                <button
                    class="flex w-10 gap-4 p-2"
                    @click="changeLanguage(item.locale)"
                >
                    <img
                        :src="`/assets/images/${item.icon}`"
                        class="w-4 h-4 rounded"
                    >
                    <p>{{ t(item.label as string) }}</p>
                </button>
            </template>
        </TieredMenu>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { LANG_KEY } from '@/utils/constants';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n()

let currentLocale = ref(import.meta.env.VITE_DEFAULT_LOCALE)
locale.value = currentLocale.value;

function changeLanguage(key: string) {
    currentLocale.value = key
    localStorage.setItem(LANG_KEY, key);
    locale.value = key
}

const menu = ref();
const langs = ref([
    {
        label: 'locale.mm',
        icon: 'mm.svg',
        locale: 'mm'
    },
    {
        label: 'locale.en',
        icon: 'gb.svg',
        locale: 'en'
    },
]);

function getCurrentLocaleImage(currentLocale: string) {
    switch (currentLocale) {
        case 'en':
            return 'gb.svg'
        case 'mm':
            return 'mm.svg'
        case 'th':
            return 'th.svg'
        default:
    }
}

const openMenu = (event: Event) => {
    menu.value.toggle(event);
};

const closeMenuOnScroll = () => {
    if (menu.value) {
        menu.value.hide();
    }
};

onMounted(() => {
    currentLocale.value = localStorage.getItem(LANG_KEY) || 'en'
    locale.value = currentLocale.value
    window.addEventListener('scroll', closeMenuOnScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', closeMenuOnScroll);
});
</script>

<style scoped></style>