<template>
    <div
        class="py-4 font-semibold text-center text-white bg-gray-400 rounded-lg cursor-pointer hover:shadow dark:bg-slate-700"
        :class="{ 'main-gradient': isActive }"
        @click="handleClick"
    >
        {{ num }}
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    num: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['toggle']);
const handleClick = () => {
    emit('toggle', props.num);
};
</script>
