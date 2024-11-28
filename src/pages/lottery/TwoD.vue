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
                            @click="isDreamDialogOpen = true;"
                        />
                        <Dialog
                            v-model:visible="isDreamDialogOpen"
                            modal
                            maximizable
                            header="2D Dream List"
                        >
                            <InputGroup class="mb-2">
                                <InputText placeholder="Search Dream" />
                                <InputGroupAddon>
                                    <Button
                                        icon="pi pi-search"
                                        severity="secondary"
                                        variant="text"
                                    />
                                </InputGroupAddon>
                            </InputGroup>
                            <div class="grid grid-cols-3 gap-2">
                                <template v-for="(dream, index) in twoDDreams">
                                    <DreamCard
                                        :dream="dream"
                                        is2D
                                    />
                                </template>
                            </div>
                        </Dialog>
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
                            class="px-4 py-2 rounded bg-slate-200 dark:bg-slate-700"
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
                        <ColorMeaningDialog v-model:isVisible="isOpenColorMeaningDialog" />
                        <div class="flex items-center gap-2 text-red-500">
                            <i class="text-sm pi pi-refresh"></i>
                            <p>All Clear</p>
                        </div>
                    </div>
                </div>
            </template>
        </Card>

        <div class="mt-4 space-y-4">
            <div class="grid grid-cols-4 gap-2">
                <template v-for="time in times">
                    <PrimaryBox
                        :value="time.value"
                        :label="time.label"
                        :is-active="selectedTime === time.value"
                        @select="selectedTime = time.value"
                    />
                </template>
            </div>
            <div class="grid grid-cols-5 gap-2">
                <template v-for="num in numbers">
                    <NumberBox
                        :num="num"
                        @toggle="toggleNumber(num)"
                        :is-active="selectedNumbers.includes(num)"
                    />
                </template>
            </div>
        </div>

    </SectionContainer>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import BackButton from '@/components/BackButton.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import { useLotteryStore } from '@/stores/LotteryStore';
import DreamCard from './components/DreamCard.vue';
import NumberBox from './components/NumberBox.vue';
import PrimaryBox from './components/PrimaryBox.vue';
import ColorMeaningDialog from './components/ColorMeaningDialog.vue';

const lotteryStore = useLotteryStore();
const { twoDDreams } = storeToRefs(lotteryStore)

const amount = ref(null)
const isR = ref(false)
const isDreamDialogOpen = ref(false)


const selectedTime = ref('1045')
const selectedNumbers = ref<string[]>([])

const isOpenColorMeaningDialog = ref(false)

function toggleNumber(num: string) {
    if (selectedNumbers.value.includes(num)) {
        selectedNumbers.value = selectedNumbers.value.filter(n => n !== num)
    } else {
        selectedNumbers.value.push(num)
    }

    console.log("Selected Numbers", selectedNumbers.value)
}

const times = ref([
    {
        'label': '10:45 AM',
        'value': '1045'
    },
    {
        'label': '12:00 AM',
        'value': '1200'
    },
    {
        'label': '02:45 PM',
        'value': '0245'
    },
    {
        'label': '04:30 PM',
        'value': '0430'
    }
])

const numbers = computed(() =>
    Array.from({ length: 100 }, (_, i) => String(i).padStart(2, '0'))
)

onMounted(() => {
    lotteryStore.getAllTwoDDreams();
})
</script>

<style scoped>
.p-dialog-content {
    padding: 0 !important;
}
</style>