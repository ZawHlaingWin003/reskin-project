<template>
    <SpeedDial
        :model="items"
        direction="down"
        buttonClass="main-gradient"
        class="fixed z-50 -translate-y-1/2 right-4 top-1/2"
        @show="show"
        @hide="hide"
        :class="{ 'dial-open': isOpened }"
    >
        <template #item="{ item, toggleCallback }">
            <img
                :src="`/assets/images/social/${item.image}`"
                alt="Logo"
                class="w-10 h-10 cursor-pointer hover:drop-shadow-lg"
                @click="toggleCallback"
            >
        </template>

        <template #icon>
            <i class="pi pi-ellipsis-v"></i>
        </template>
    </SpeedDial>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isOpened = ref(false);
function show() {
    isOpened.value = true;
}
function hide() {
    isOpened.value = false;
}

const items = ref([
    {
        label: 'Notification',
        icon: 'pi pi-external-link',
        image: 'bell.png',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    },
    {
        label: 'Download',
        icon: 'pi pi-external-link',
        image: 'phone.png',
        command: () => {
            window.open('https://vuejs.org/', '_blank');
        }
    },
    {
        label: 'Facebook',
        icon: 'pi pi-external-link',
        image: 'facebook.png',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    },
    {
        label: 'Viber',
        icon: 'pi pi-external-link',
        image: 'viber.png',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    },
    {
        label: 'Telegram',
        icon: 'pi pi-external-link',
        image: 'telegram.png',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
</script>

<style scoped></style>