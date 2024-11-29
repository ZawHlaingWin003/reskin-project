<template>
    <SectionContainer>
        <BackButton
            text="Profile"
            :link="{ name: 'user.profile' }"
        />
        <form
            @submit.prevent="submitWithdrawForm"
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
                    for="account"
                    class="required"
                >Account Number</label>
                <InputNumber
                    v-model="form.account"
                    inputId="account"
                    fluid
                    :use-grouping="false"
                    placeholder="Enter Your Account Number"
                />
                <Message
                    size="small"
                    variant="simple"
                    severity="error"
                >{{ errors.account }}</Message>
            </div>
            <div>
                <label
                    for="amount"
                    class="required"
                >Amount <span class="text-xs text-green-500">(Minimum amount 10,000)</span></label>
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
            <div>
                <label
                    for="remark"
                    class="required"
                >Remark</label>
                <Textarea
                    v-model="form.remark"
                    placeholder="Enter Remark"
                    autoResize
                    rows="3"
                    class="w-full"
                />
                <Message
                    size="small"
                    variant="simple"
                    severity="error"
                >{{ errors.remark }}</Message>
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
                    src="@/assets/images/withdraw-success.png"
                    alt="Success"
                    class="w-20 h-20 mx-auto md:w-40 md:h-40"
                >
                <p class="font-semibold">Withdraw Successful!</p>
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
    account: null,
    amount: null,
    remark: ''
})

const errors = ref({
    payment: '',
    account: '',
    amount: '',
    remark: ''
})

const success = ref(false)

const submitWithdrawForm = () => {
    success.value = true
}

const payments = ref([
    { id: 1, name: 'Wave', },
    { id: 2, name: 'KPay', },
    { id: 3, name: 'AYA Pay', },
    { id: 4, name: 'UAB PAY', },
]);
</script>

<style scoped></style>