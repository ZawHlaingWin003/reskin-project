<template>
    <form
        @submit.prevent="submitChangeLanguageForm"
        class="space-y-4"
    >
        <div class="grid grid-cols-2 gap-2 mt-4 text-center">
            <template
                v-for="(language, index) in languages"
                :key="index"
            >
                <div
                    class="flex items-center w-full gap-2 p-2 rounded cursor-pointer bg-slate-800"
                    :class="{ 'main-gradient': selectedLanguage == language.locale }"
                    @click="selectedLanguage = language.locale"
                >
                    <img
                        :src="`/assets/images/lang/${language.icon}`"
                        :alt="language.label"
                        class="w-4 h-4 rounded"
                    >
                    <p class="text-xs md:text-base">{{ t(language.label) }}</p>
                </div>
            </template>
        </div>
        <Button
            type="submit"
            :label="t('actions.change')"
            severity="success"
            class="w-full"
        ></Button>
    </form>
</template>

<script setup lang="ts">
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n()
const emit = defineEmits(['changedLanguage'])

const selectedLanguage = ref(import.meta.env.VITE_DEFAULT_LOCALE);
locale.value = selectedLanguage.value;

const languages = ref([
    { icon: 'mm.svg', locale: 'mm', label: 'locale.mm' },
    { icon: 'en.svg', locale: 'en', label: 'locale.en' },
    { icon: 'th.svg', locale: 'th', label: 'locale.th' },
    { icon: 'cn.svg', locale: 'cn', label: 'locale.cn' },
]);

onMounted(() => {
    selectedLanguage.value = localStorage.getItem(LOCAL_STORAGE_KEYS.LANG_KEY) || 'en'
    locale.value = selectedLanguage.value
});

function submitChangeLanguageForm() {
    localStorage.setItem(LOCAL_STORAGE_KEYS.LANG_KEY, selectedLanguage.value);
    locale.value = selectedLanguage.value
    emit('changedLanguage')
}

</script>

<style scoped></style>