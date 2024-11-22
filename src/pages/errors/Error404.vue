<template>
    <main class="page-404">
        <div class="container">
            <div class="text-center row align-items-center vh-100">
                <div class="m-auto col-lg-8">
                    <img
                        src="@/assets/images/404.png"
                        alt="Error 404"
                        class="hover-up"
                    >
                    <h2 class="my-5 mb-3">Page Not Found</h2>
                    <p class="font-lg text-grey-700 mb-30">
                        The link you clicked may be broken or the page may have been removed.<br>
                        Visit the <router-link to="/"><span> Homepage</span></router-link> or
                        <router-link to="/"><span>Contact us</span></router-link> about the problem.
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts"></script>