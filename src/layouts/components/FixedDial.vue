<template>
    <SpeedDial
        :model="items"
        direction="down"
        :buttonProps="{ severity: 'help', rounded: true }"
        buttonClass="main-gradient"
        style="position: fixed; z-index: 99999; top: 50%; right: 1rem; transform: translateY(-50%);"
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