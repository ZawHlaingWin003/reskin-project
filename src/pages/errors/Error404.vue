<template>
    <main class="page-404">
        <SectionContainer>
            <div class="flex items-center justify-center h-screen">
                <div class="space-y-2 text-center">
                    <img
                        src="@/assets/images/404.png"
                        alt="Error 404"
                        class="hover-up"
                    >
                    <h2 class="text-xl font-bold text-gray-700">Page Not Found</h2>
                    <p class="font-lg text-grey-700 mb-30">
                        The link you clicked may be broken or the page may have been removed.<br>
                        Visit the <router-link
                            to="/"
                            class="text-green-400"
                        ><span> Home Page</span></router-link> or
                        <router-link
                            to="/"
                            class="text-green-400"
                        ><span>Contact us</span></router-link> about the problem.
                    </p>
                </div>
            </div>
        </SectionContainer>
    </main>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/SectionContainer.vue';
</script>