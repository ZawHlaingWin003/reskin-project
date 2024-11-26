<template>
    <SectionContainer>
        <BackButton
            text="Home"
            :link="{ name: 'home' }"
        />
        <Card>
            <template #content>
                <div class="space-y-2">
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="flex items-center gap-2">
                                <i class="text-sm pi pi-clock"></i>
                                <p>Bet Close</p>
                            </div>
                            <p class="text-base font-semibold">Date, 13:00 PM</p>
                        </div>
                        <Button
                            label="Dream"
                            icon="pi pi-moon"
                        />
                    </div>
                    <div class="flex items-center gap-2">
                        <InputNumber
                            v-model="amount"
                            inputId="integeronly"
                            fluid
                            placeholder="Enter Bet Amount"
                            suffix=" MMK"
                        />
                        <div
                            class="px-4 py-2 rounded bg-slate-200"
                            :class="{
                                'main-gradient': isR
                            }"
                            @click="isR = !isR"
                        >
                            R
                        </div>
                    </div>
                    <Button
                        label="Bet"
                        class="w-full"
                    />
                    <div class="flex items-center justify-between pt-2">
                        <div
                            class="flex items-center gap-2"
                            @click="isOpenColorMeaningDialog = true"
                        >
                            <i class="text-sm pi pi-exclamation-circle"></i>
                            <p>Meaning of color</p>
                        </div>
                        <Dialog
                            v-model:visible="isOpenColorMeaningDialog"
                            modal
                            header="Color Meanings"
                        >
                            <div class="p-2 mb-4 text-white bg-red-300 rounded">
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
                        <div class="flex items-center gap-2 text-red-500">
                            <i class="text-sm pi pi-refresh"></i>
                            <p>All Clear</p>
                        </div>
                    </div>
                </div>
            </template>
        </Card>

        <div class="mt-4 space-y-4">
            <div class="grid grid-cols-5 gap-2">
                <template v-for="num in threeD">
                    <div class="py-4 text-center bg-gray-400 border rounded-lg">
                        001
                    </div>
                </template>
            </div>
        </div>

    </SectionContainer>
</template>

<script setup lang="ts">
import BackButton from '@/components/BackButton.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import { ref } from 'vue';

const amount = ref(null)
const isR = ref(false)

const isOpenColorMeaningDialog = ref(false)

const threeD = ref([
    '000 - 099',
    '100 - 199',
    '200 - 299',
    '300 - 399',
    '400 - 499',
    '500 - 599',
    '600 - 699',
    '700 - 799',
    '800 - 899',
    '900 - 999',
])
</script>

<style scoped>
.p-dialog-content {
    padding: 0 !important;
}
</style>