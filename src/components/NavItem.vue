<!-- NavItem.vue -->
<template>
    <li>
        <router-link
            :to="to"
            class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            exact-active-class="text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
        >
            {{ text }}
        </router-link>
    </li>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
    }
};
</script>