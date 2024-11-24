<template>
    <form
        @submit.prevent="submitChangeLanguageForm"
        class="space-y-4"
    >
        <div class="mt-4 text-center">
            <SelectButton
                v-model="selectedLanguage"
                :options="options"
                option-label="language"
                option-value="locale"
            >
                <template #option="slotProps">
                    <img
                        :src="`/assets/images/${slotProps.option.icon}`"
                        :alt="slotProps.option.language"
                        class="w-4 h-4 rounded"
                    >
                    <p class="text-xs md:text-base">{{ t(slotProps.option.language) }}</p>
                </template>
            </SelectButton>
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
import { LANG_KEY } from '@/utils/constants';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n()
const emit = defineEmits(['changedLanguage'])

const selectedLanguage = ref(import.meta.env.VITE_DEFAULT_LOCALE);
locale.value = selectedLanguage.value;

const options = ref([
    { icon: 'mm.svg', locale: 'mm', language: 'locale.mm' },
    { icon: 'gb.svg', locale: 'en', language: 'locale.en' },
]);

onMounted(() => {
    selectedLanguage.value = localStorage.getItem(LANG_KEY) || 'en'
    locale.value = selectedLanguage.value
});

function submitChangeLanguageForm() {
    localStorage.setItem(LANG_KEY, selectedLanguage.value);
    locale.value = selectedLanguage.value
    emit('changedLanguage')
}

</script>

<style scoped></style>