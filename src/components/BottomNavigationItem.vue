<template>
    <router-link
        :to="to"
        exact
        class="inline-flex flex-col items-center justify-between px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        v-slot="{ isActive, isExactActive }"
    >
        <div class="text-gray-500 group-hover:text-blue-600">
            <slot name="icon">
                <i class="pi pi-home"></i>
            </slot>
        </div>
        <span
            :class="{ 'text-blue-600 dark:text-blue-500': isExactActive, 'text-gray-500 dark:text-gray-400': !isExactActive }"
            class="text-sm"
        >
            {{ label }}
        </span>
    </router-link>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    }
};
</script>