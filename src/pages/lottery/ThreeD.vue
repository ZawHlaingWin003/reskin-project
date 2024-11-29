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
                                <template v-for="(dream, index) in threeDDreams">
                                    <DreamCard
                                        :dream="dream"
                                        is3D
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
                        @click="confirmBet = true"
                    />
                    <Dialog
                        v-model:visible="confirmBet"
                        modal
                        header="Bet Slip Preview"
                        class="w-11/12"
                        style="max-height: 70vh;"
                    >
                        <div class="space-y-2">
                            <div class="flex items-center justify-between">
                                <div class="flex flex-col text-center">
                                    <p>Date</p>
                                    <p class="text-sm font-semibold">{{ formatBetDate() }}</p>
                                </div>
                                <div class="flex flex-col text-center">
                                    <p>Board</p>
                                    <p class="text-sm font-semibold">{{ selectedNumbers.length }}</p>
                                </div>
                                <div class="flex flex-col text-center">
                                    <p>Total</p>
                                    <p class="text-sm font-semibold">{{ (amount ?? 0) * selectedNumbers.length }} MMK
                                    </p>
                                </div>
                            </div>
                            <DataTable
                                showGridlines
                                removableSort
                                scrollable
                                scrollHeight="200px"
                                dataKey="number"
                                :value="formattedNumbers"
                            >
                                <Column
                                    field="number"
                                    header="Number"
                                    sortable
                                    rowEditor
                                >
                                    <template #body="{ data }">
                                        <div v-if="data.isEditing">
                                            <input
                                                v-model="data.number"
                                                class="w-full p-1 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <div v-else>
                                            {{ data.number }}
                                        </div>
                                    </template>
                                </Column>
                                <Column header="Amount">
                                    <template #body="{ data }">
                                        <div v-if="data.isEditing">
                                            <input
                                                type="number"
                                                v-model="data.amount"
                                                class="w-full p-1 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <div v-else>
                                            {{ data.amount }}
                                        </div>
                                    </template>
                                </Column>
                                <Column header="Actions">
                                    <template #body="{ data }">
                                        <div class="flex items-center gap-2">
                                            <button
                                                v-if="data.isEditing"
                                                @click="saveEdit(data)"
                                                class="text-green-500 active:text-green-600"
                                            >
                                                <i class="pi pi-check"></i>
                                            </button>
                                            <button
                                                v-else
                                                @click="editRow(data)"
                                                class="text-blue-500 active:text-blue-600"
                                            >
                                                <i class="pi pi-file-edit"></i>
                                            </button>
                                            <button
                                                @click="deleteRow(data)"
                                                class="text-red-500 active:text-red-600"
                                            >
                                                <i class="pi pi-trash"></i>
                                            </button>
                                        </div>
                                    </template>
                                </Column>
                            </DataTable>
                            <Button
                                label="Confirm Bet"
                                severity="danger"
                                class="w-full dark:bg-red-500 dark:text-white"
                                @click="submitConfirmBet"
                            />
                        </div>
                    </Dialog>

                    <div class="flex items-center justify-between pt-2">
                        <div
                            class="flex items-center gap-2"
                            @click="isOpenColorMeaningDialog = true"
                        >
                            <i class="text-sm pi pi-exclamation-circle"></i>
                            <p>Meaning of color</p>
                        </div>
                        <ColorMeaningDialog v-model:is-visible="isOpenColorMeaningDialog" />
                        <div
                            class="flex items-center gap-2 text-red-500"
                            @click="resetSelectedData"
                        >
                            <i class="text-sm pi pi-refresh"></i>
                            <p>All Clear</p>
                        </div>
                    </div>
                </div>
            </template>
        </Card>

        <div class="mt-4 space-y-4">
            <div class="grid grid-cols-3 gap-2">
                <template v-for="range in threeDRange">
                    <PrimaryBox
                        :value="range"
                        :label="range"
                        :is-active="selectedRange == range"
                        @select="selectRange(range)"
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


        <Dialog
            v-model:visible="successBet"
            :style="{ width: '25rem' }"
            position="top"
            :modal="true"
            :draggable="false"
            :closable="false"
            :showHeader="false"
            pt:mask:class="backdrop-blur-sm"
        >
            <div class="mb-4 text-center">
                <img
                    src="@/assets/images/success.png"
                    alt="Success"
                    class="w-20 h-20 mx-auto md:w-40 md:h-40"
                >
                <p class="font-semibold">Bet Placed!</p>
            </div>
            <Button
                type="button"
                class="w-full"
                severity="success"
                label="OK"
                @click="successBet = false"
            ></Button>
        </Dialog>
    </SectionContainer>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import BackButton from '@/components/BackButton.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import DreamCard from './components/DreamCard.vue';
import { formatBetDate } from '@/helpers/date-helpers';
import { useLotteryStore } from '@/stores/LotteryStore';
import NumberBox from './components/NumberBox.vue';
import PrimaryBox from './components/PrimaryBox.vue';
import ColorMeaningDialog from './components/ColorMeaningDialog.vue';

const lotteryStore = useLotteryStore();
const { threeDDreams } = storeToRefs(lotteryStore)

const amount = ref(null)
const isR = ref(false)

const confirmBet = ref(false)
const successBet = ref(false)

const isDreamDialogOpen = ref(false)

const selectedRange = ref('000 - 099');
const numbers = ref<string[]>([])

const isOpenColorMeaningDialog = ref(false)

function selectRange(range: string) {
    selectedRange.value = range
    const [start, end] = range.split(' - ').map(Number)
    numbers.value = Array.from(
        { length: end - start + 1 },
        (_, i) => String(start + i).padStart(3, '0')
    )
}

function resetSelectedData() {
    selectedRange.value = '000 - 099';
    selectedNumbers.value = []
}

function submitConfirmBet() {
    confirmBet.value = false;
    successBet.value = true;
    resetSelectedData()
}

interface NumberData {
    number: string
    amount: number
    isEditing: boolean
}
const selectedNumbers = ref<string[]>([])

const formattedNumbers = computed(() =>
    selectedNumbers.value.map(number => ({
        number,
        amount: amount.value,
        isEditing: false
    }))
)

function deleteRow(row: NumberData) {
    console.log("ROW", row)
    const index = selectedNumbers.value.indexOf(row.number)
    if (index !== -1) {
        selectedNumbers.value.splice(index, 1)
    }
    console.log("FORMAT", formattedNumbers.value)
}

function editRow(row: NumberData) {
    console.log("ROW", row)

    const numberIndex = selectedNumbers.value.indexOf(row.number)
    console.log("IN", numberIndex)

    if (numberIndex !== -1) {
        formattedNumbers.value[numberIndex].isEditing = true
    }
    console.log("FORMAT", formattedNumbers.value)

}

function saveEdit(row: NumberData) {
    console.log("ROW", row)
    const numberIndex = selectedNumbers.value.indexOf(row.number)
    console.log("IN", numberIndex)

    if (numberIndex !== -1) {
        formattedNumbers.value[numberIndex].isEditing = false
    }
    console.log("FORMAT", formattedNumbers.value)
}

function toggleNumber(num: string) {
    if (selectedNumbers.value.includes(num)) {
        selectedNumbers.value = selectedNumbers.value.filter(n => n !== num)
    } else {
        selectedNumbers.value.push(num)
    }

    console.log("Selected Numbers", selectedNumbers.value)
}

onMounted(() => {
    selectRange(selectedRange.value)
    lotteryStore.getAllThreeDDreams();
})

const threeDRange = ref([
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
.p-datatable-tbody>tr>td {
    padding: 0 !important;
}
</style>