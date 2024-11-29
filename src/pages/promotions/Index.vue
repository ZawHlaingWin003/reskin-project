<template>
    <SectionContainer>
        <div class="flex items-center justify-center gap-2 mb-2 text-center md:mb-8">
            <img
                src="@/assets/images/promotion-header-1.png"
                alt="Promotion"
                class="w-6 h-6 md:w-10 md:h-10"
            >
            <h1 class="text-xl font-bold text-transparent md:text-2xl bg-clip-text main-gradient">
                {{ i18n.global.t("nav.promotion") }}
            </h1>
            <img
                src="@/assets/images/promotion-header-2.png"
                alt="Promotion"
                class="w-6 h-6 md:w-10 md:h-10"
            >
        </div>
        <div class="flex flex-wrap justify-center">
            <template
                v-for="(promotion, index) in promotions"
                :key="index"
            >
                <LazyImage
                    :img-src="`/assets/images/promotions/${promotion.image}`"
                    alt="Promotion Image"
                    class="w-full md:w-1/3"
                    img-class="w-full rounded-xl"
                    @click="openDetailDialog(promotion)"
                />
            </template>
            <Dialog
                v-model:visible="isOpenDetailDialog"
                modal
                :header="activePromotion?.title"
                class="w-11/12"
            >
                <p class="leading-normal">
                    {{ activePromotion?.content }}
                </p>
            </Dialog>
        </div>
    </SectionContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LazyImage from '@/components/LazyImage.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import i18n from '@/i18n';
import type { Promotion } from '@/types/common';

const isOpenDetailDialog = ref(false)

const activePromotion = ref<Promotion | null>(null);

const openDetailDialog = (promotion: Promotion) => {
    isOpenDetailDialog.value = true;
    activePromotion.value = promotion
}
const promotions = ref<Promotion[]>([
    {
        'image': 'promotion-1.png',
        'title': "မန်ဘာသစ် 120 %",
        'content': '10000 + 12000 = 22000 * 20ဆ = 440,000 ကစားမှတ် ပြည့်အောင်ကစားပေးရမည်။ စလော့ဂိမ်းတခုထဲသာလျှင်ကစားရမည်။ တစ်ခြားသောဂိမ်းများကစားထားခြင်းတွေ့ရှိပါက အနိုင်ငွေအားလုံးဝထုတ်ပေးမည်မဟုတ်ပါ။'
    },
    {
        'image': 'promotion-2.png',
        'title': "Birthday Bonus 5%",
        'content': 'ယခုဘောနပ်အားရယူရန် ကစားသူ၏ မွေးနေ့မှန်ကန်ကြောင်းကို ဖော်ပြပေးရပါမည်။ 3 ရက် အတွင်းသွင်းငွေ၏ 5 %ကိုရယူနိုင်ပါမည်။ ဘောနပ်၏ 3 ဆကစားပြီးပါကအနိုင်ငွေကိုထုတ်ယူနိုင်ပါသည် ( စလော့ဂိမ်းမှလွဲပြီးတစ်ခြားသောဂိမ်းများအားမကစားရ ကစားထားခြင်းတွေ့ရှိပါကအနိုင်ငွေထုတ်ပေးမည်မဟုတ်ပါ )။'
    },
    {
        'image': 'promotion-3.png',
        'title': "မန်ဘာသစ် 120 %",
        'content': '10000 + 12000 = 22000 * 20ဆ = 440,000 ကစားမှတ် ပြည့်အောင်ကစားပေးရမည်။ စလော့ဂိမ်းတခုထဲသာလျှင်ကစားရမည်။ တစ်ခြားသောဂိမ်းများကစားထားခြင်းတွေ့ရှိပါက အနိုင်ငွေအားလုံးဝထုတ်ပေးမည်မဟုတ်ပါ။'
    },
    {
        'image': 'promotion-3.png',
        'title': "မန်ဘာသစ် 120 %",
        'content': '10000 + 12000 = 22000 * 20ဆ = 440,000 ကစားမှတ် ပြည့်အောင်ကစားပေးရမည်။ စလော့ဂိမ်းတခုထဲသာလျှင်ကစားရမည်။ တစ်ခြားသောဂိမ်းများကစားထားခြင်းတွေ့ရှိပါက အနိုင်ငွေအားလုံးဝထုတ်ပေးမည်မဟုတ်ပါ။'
    },
    {
        'image': 'promotion-3.png',
        'title': "မန်ဘာသစ် 120 %",
        'content': '10000 + 12000 = 22000 * 20ဆ = 440,000 ကစားမှတ် ပြည့်အောင်ကစားပေးရမည်။ စလော့ဂိမ်းတခုထဲသာလျှင်ကစားရမည်။ တစ်ခြားသောဂိမ်းများကစားထားခြင်းတွေ့ရှိပါက အနိုင်ငွေအားလုံးဝထုတ်ပေးမည်မဟုတ်ပါ။'
    },
    {
        'image': 'promotion-3.png',
        'title': "မန်ဘာသစ် 120 %",
        'content': '10000 + 12000 = 22000 * 20ဆ = 440,000 ကစားမှတ် ပြည့်အောင်ကစားပေးရမည်။ စလော့ဂိမ်းတခုထဲသာလျှင်ကစားရမည်။ တစ်ခြားသောဂိမ်းများကစားထားခြင်းတွေ့ရှိပါက အနိုင်ငွေအားလုံးဝထုတ်ပေးမည်မဟုတ်ပါ။'
    },
    {
        'image': 'promotion-3.png',
        'title': "မန်ဘာသစ် 120 %",
        'content': '10000 + 12000 = 22000 * 20ဆ = 440,000 ကစားမှတ် ပြည့်အောင်ကစားပေးရမည်။ စလော့ဂိမ်းတခုထဲသာလျှင်ကစားရမည်။ တစ်ခြားသောဂိမ်းများကစားထားခြင်းတွေ့ရှိပါက အနိုင်ငွေအားလုံးဝထုတ်ပေးမည်မဟုတ်ပါ။'
    },
])
</script>

<style scoped></style>