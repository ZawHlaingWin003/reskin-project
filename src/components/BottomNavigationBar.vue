<!-- BottomNavigation.vue -->
<template>
    <div
        class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 md:hidden dark:bg-gray-700 dark:border-gray-600">
        <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            <BottomNavigationItem
                to="/"
                label="Home"
            >
                <template #icon>
                    <!-- Home Icon SVG -->
                    <svg
                        class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M19.707 9.293l-2-2-7-7a1 1 0 00-1.414 0l-7 7-2 2a1 1 0 001.414 1.414L2 10.414V18a2 2 0 002 2h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a2 2 0 002-2v-7.586l.293.293a1 1 0 001.414-1.414z"
                        />
                    </svg>
                </template>
            </BottomNavigationItem>
            <BottomNavigationItem
                to="/promotions"
                label="Promotion"
            >
                <template #icon>
                    <i class="w-5 h-5 pi pi-gift"></i>
                </template>
            </BottomNavigationItem>
            <BottomNavigationItem
                to="/settings"
                label="Settings"
            >
                <template #icon>
                    <!-- Settings Icon SVG -->
                    <svg
                        class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 12.25V1m0 11.25a2.25 2.25 0 000 4.5m0-4.5a2.25 2.25 0 010 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 000 4.5m0-4.5a2.25 2.25 0 010 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5ZM16 19v-2"
                        />
                    </svg>
                </template>
            </BottomNavigationItem>
            <BottomNavigationItem
                to="/profile"
                label="Profile"
            >
                <template #icon>
                    <!-- Profile Icon SVG -->
                    <svg
                        class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0Zm0 5a3 3 0 110 6 3 3 0 010-6Zm0 13a8.949 8.949 0 01-4.951-1.488A3.987 3.987 0 019 13h2a3.987 3.987 0 013.951 3.512A8.949 8.949 0 0110 18Z"
                        />
                    </svg>
                </template>
            </BottomNavigationItem>
        </div>
    </div>
</template>

<script>
import BottomNavigationItem from './BottomNavigationItem.vue';

export default {
    components: {
        BottomNavigationItem
    }
};
</script>