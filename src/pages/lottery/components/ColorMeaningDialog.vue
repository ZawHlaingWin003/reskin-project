<template>
    <Dialog
        :visible="localVisible"
        modal
        header="Color Meanings"
        @update:visible="handleUpdateVisible"
    >
        <div class="p-2 mb-4 text-white bg-red-500 rounded">
            <p class="font-semibold text-center">
                အရောင် အဓိပ္ပါယ်
                <br />
                100% ဖြစ်သောအခါ ထီနံပါတ်များကို ပိတ်ပါမည်။
            </p>
        </div>
        <div class="space-y-2">
            <div class="flex items-center gap-2">
                <div class="w-4 h-4 bg-green-800 rounded-full"></div>
                <p>50% အောက်</p>
            </div>
            <div class="flex items-center gap-2">
                <div class="w-4 h-4 bg-yellow-300 rounded-full"></div>
                <p>50% မှ 75% အတွင်း</p>
            </div>
            <div class="flex items-center gap-2">
                <div class="w-4 h-4 bg-red-500 rounded-full"></div>
                <p>90% အထက်</p>
            </div>
            <div class="flex items-center gap-2">
                <div class="w-4 h-4 rounded-full bg-slate-500"></div>
                <p>အပြည့် (100%)</p>
            </div>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

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