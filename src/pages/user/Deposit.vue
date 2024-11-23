<template>
    <SectionContainer>
        <BackButton
            text="Profile"
            :link="{ name: 'user.profile' }"
        />
        <form
            @submit.prevent="submitDepositForm"
            class="mx-auto space-y-4 md:space-y-8 md:w-1/2"
        >
            <CurrentBalanceCard balance="15,000" />
            <div>
                <label
                    for="payment"
                    class="required"
                >Choose Payment Type</label>
                <Select
                    v-model="form.payment"
                    :options="payments"
                    optionLabel="name"
                    placeholder="Payment"
                    class="w-full"
                    :invalid="!!errors.payment"
                />
                <Message
                    size="small"
                    variant="simple"
                    severity="error"
                >{{ errors.payment }}</Message>
            </div>
            <div>
                <label
                    for="payment"
                    class="required"
                >Screenshot</label>
                <ImageUploader
                    :initial-image="form.screenshot"
                    @on-image-selected="onImageSelected"
                    @on-image-removed="onImageRemoved"
                />
                <Message
                    size="small"
                    variant="simple"
                    severity="error"
                >{{ errors.payment }}</Message>
            </div>
            <div>
                <label
                    for="amount"
                    class="required"
                >Amount <span class="text-sm text-red-500">(Minimum amount 3,000)</span></label>
                <InputNumber
                    v-model="form.amount"
                    inputId="amount"
                    fluid
                    placeholder="Enter Your Amount"
                />
                <Message
                    size="small"
                    variant="simple"
                    severity="error"
                >{{ errors.amount }}</Message>
            </div>
            <Button
                label="Submit"
                type="submit"
                class="w-full"
            />
        </form>
        <Dialog
            v-model:visible="success"
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
                <p class="font-semibold">Deposit Successful!</p>
            </div>
            <Button
                type="button"
                class="w-full"
                severity="success"
                label="OK"
                @click="success = false"
            ></Button>
        </Dialog>
    </SectionContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BackButton from '@/components/BackButton.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import CurrentBalanceCard from './components/CurrentBalanceCard.vue';
import ImageUploader from "@/components/ImageUploader.vue";

const form = ref({
    payment: '',
    screenshot: '' as File | string,
    amount: null,
})

const errors = ref({
    payment: '',
    screenshot: '',
    amount: ''
})

const success = ref(false)

const submitDepositForm = () => {
    success.value = true
}

const payments = ref([
    { id: 1, name: 'Wave', },
    { id: 2, name: 'KPay', },
    { id: 3, name: 'AYA Pay', },
    { id: 4, name: 'UAB PAY', },
]);

const onImageSelected = (file: File) => {
    form.value.screenshot = file;
};
const onImageRemoved = () => {
    form.value.screenshot = '';
};
</script>

<style scoped></style>