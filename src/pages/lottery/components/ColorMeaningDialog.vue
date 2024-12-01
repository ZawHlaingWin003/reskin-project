<template>
    <Dialog
        :visible="localVisible"
        modal
        :header="t('2d.meaning_color')"
        @update:visible="handleUpdateVisible"
    >
        <div class="p-2 mb-4 text-white bg-red-500 rounded">
            <p class="font-semibold text-center">
                {{ t('2d.meaning_color_subtitle') }}
            </p>
        </div>
        <div class="space-y-2">
            <div class="flex items-center gap-2">
                <div class="w-4 h-4 bg-green-800 rounded-full"></div>
                <p>{{ t('2d.less_than_50') }}</p>
            </div>
            <div class="flex items-center gap-2">
                <div class="w-4 h-4 bg-yellow-300 rounded-full"></div>
                <p>{{ t('2d.between_50_75') }}</p>
            </div>
            <div class="flex items-center gap-2">
                <div class="w-4 h-4 bg-red-500 rounded-full"></div>
                <p>{{ t('2d.above_90') }}</p>
            </div>
            <div class="flex items-center gap-2">
                <div class="w-4 h-4 rounded-full bg-slate-500"></div>
                <p>{{ t('2d.full_100') }}</p>
            </div>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const props = defineProps({
    isVisible: {
        type: Boolean,
        required: true,
    },
});

const emit = defineEmits(['update:isVisible']);

const localVisible = ref(props.isVisible);

watch(
    () => props.isVisible,
    (newValue) => {
        localVisible.value = newValue;
    }
);

const handleUpdateVisible = (newValue: boolean) => {
    emit('update:isVisible', newValue);
};
</script>

<style scoped></style>