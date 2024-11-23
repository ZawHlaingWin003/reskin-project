import './assets/css/main.css'
import 'primeicons/primeicons.css'

import { createApp, type Plugin } from 'vue'

import App from './App.vue'

// Localization
import i18n from './i18n'

import PrimeVue from 'primevue/config';

import { router } from './router'
import pinia from './stores'

// Bottom Navigation Vue
import bottomNavigationVue from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";

// Swiper Vue.js Components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/bundle";

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(PrimeVue, {
    theme: 'none'
});
app.use(bottomNavigationVue as Plugin);

app.component("Swiper", Swiper)
app.component("SwiperSlide", SwiperSlide)

app.mount('#app')