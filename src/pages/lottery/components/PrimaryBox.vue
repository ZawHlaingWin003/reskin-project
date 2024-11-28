<template>
    <div
        class="py-1 font-semibold text-center border rounded-sm cursor-pointer"
        :class="isActive ? 'main-gradient border-gray-100 dark:border-slate-900' : 'border-red-500'"
        @click="handleClick"
    >
        {{ label }}
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['select']);
const handleClick = () => {
    emit('select', props.value);
};
</script>
