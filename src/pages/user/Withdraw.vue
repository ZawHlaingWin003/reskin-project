<template>
    <SectionContainer>
        <Card class="p-0 rounded shadow-sm bg-white/30 dark:bg-slate-700/30 backdrop-blur-md ">
            <template #title>
                <h3 class="text-base">
                    Withdraw Form
                </h3>
            </template>
            <template #content>
                <form
                    @submit.prevent="submitWithdrawForm"
                    class="mx-auto space-y-4 md:space-y-8 md:w-1/2"
                >
                    <CurrentBalanceCard balance="15,000" />
                    <div>
                        <label
                            for="payment"
                            class="required"
                        >{{ t('withdraw.choose_payment_type') }}</label>
                        <Select
                            v-model="form.payment"
                            :options="payments"
                            optionLabel="name"
                            :placeholder="t('withdraw.payment')"
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
                        >{{ t('withdraw.account_number') }}</label>
                        <InputNumber
                            v-model="form.account"
                            inputId="account"
                            fluid
                            :use-grouping="false"
                            :placeholder="t('withdraw.enter_your_account_number')"
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
                        >{{ t('withdraw.amount') }} <span class="text-xs text-green-500">({{
                            t('withdraw.minimum_amount_10000') }})</span></label>
                        <InputNumber
                            v-model="form.amount"
                            inputId="amount"
                            fluid
                            :placeholder="t('withdraw.enter_your_amount')"
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
                        >{{ t('withdraw.remark') }}</label>
                        <Textarea
                            v-model="form.remark"
                            :placeholder="t('withdraw.enter_remark')"
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
                        :label="t('withdraw.submit')"
                        type="submit"
                        class="w-full"
                    />
                </form>
            </template>
        </Card>
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
                <p class="font-semibold">{{ t('withdraw.withdraw_successful') }}!</p>
            </div>
            <Button
                type="button"
                class="w-full"
                severity="success"
                :label="t('withdraw.ok')"
                @click="success = false"
            >
            </Button>
        </Dialog>
    </SectionContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SectionContainer from '@/components/SectionContainer.vue';
import CurrentBalanceCard from './components/CurrentBalanceCard.vue';
import { useI18n } from "vue-i18n";

const { t } = useI18n()

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