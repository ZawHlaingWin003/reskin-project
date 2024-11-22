<template>
    <SectionContainer>
        <div class="grid w-full grid-cols-1 gap-4 mx-auto md:gap-8 md:w-3/4 md:grid-cols-2">
            <div class="space-y-4 md:space-y-6">
                <div class="flex items-center gap-4 p-4 text-white bg-slate-500 rounded-xl">
                    <img
                        src="@/assets/images/default-user.png"
                        alt="User Profile"
                        class="w-16 h-16"
                    >
                    <div>
                        <h3 class="text-xl font-bold text-gray-50">John Doe</h3>
                        <p class="text-sm text-gray-100">09 5100 4500</p>
                    </div>
                </div>
                <CurrentBalanceCard balance="15,000" />
                <FloatingActions />
            </div>
            <div class="space-y-4 md:space-y-6">
                <div class="flex items-center gap-4 md:gap-8">
                    <RouterLink
                        :to="{ name: 'user.transactions' }"
                        class="w-full p-6 space-y-4 text-center text-white bg-slate-500 rounded-xl"
                    >
                        <div>
                            <img
                                src="@/assets/images/transaction.png"
                                alt="Transaction"
                                class="w-12 h-12 mx-auto"
                            >
                            <p>Transactions</p>
                        </div>
                    </RouterLink>
                    <RouterLink
                        :to="{ name: 'user.vouchers' }"
                        class="w-full p-6 space-y-4 text-center text-white bg-slate-500 rounded-xl"
                    >
                        <div>
                            <img
                                src="@/assets/images/voucher.png"
                                alt="Voucher"
                                class="w-12 h-12 mx-auto"
                            >
                            <p>Vouchers</p>
                        </div>
                    </RouterLink>
                </div>

                <Card class="text-white bg-slate-500">
                    <template #content>
                        <div class="flex flex-col gap-1">
                            <ProfileActionButton
                                text="Update Password"
                                @click="updatePasswordDialog = true"
                            >
                                <template #image>
                                    <img
                                        src="@/assets/images/update-password.png"
                                        alt="Change Password"
                                        class="w-8 h-8"
                                    />
                                </template>
                                <template #icon>
                                    <i class="text-xl pi pi-angle-right"></i>
                                </template>
                            </ProfileActionButton>
                            <Dialog
                                v-model:visible="updatePasswordDialog"
                                modal
                                header="Update Password"
                                :style="{ width: '25rem' }"
                            >
                                <form
                                    @submit.prevent="updatePasswordForm"
                                    class="space-y-4"
                                >
                                    <div>
                                        <Password
                                            v-model="form.oldPassword"
                                            toggleMask
                                            class="w-full"
                                            placeholder="Old Password"
                                            :feedback="false"
                                            :invalid="!!errors.oldPassword"
                                        />
                                        <Message
                                            size="small"
                                            variant="simple"
                                            severity="error"
                                        >{{ errors.oldPassword }}</Message>
                                    </div>
                                    <div>
                                        <Password
                                            v-model="form.newPassowrd"
                                            toggleMask
                                            class="w-full"
                                            placeholder="New Password"
                                            :feedback="false"
                                            :invalid="!!errors.newPassowrd"
                                        />
                                        <Message
                                            size="small"
                                            variant="simple"
                                            severity="error"
                                        >{{ errors.newPassowrd }}</Message>
                                    </div>
                                    <div>
                                        <Password
                                            v-model="form.confirmPassword"
                                            toggleMask
                                            class="w-full"
                                            placeholder="Confirm Password"
                                            :feedback="false"
                                            :invalid="!!errors.confirmPassword"
                                        />
                                        <Message
                                            size="small"
                                            variant="simple"
                                            severity="error"
                                        >{{ errors.confirmPassword }}</Message>
                                    </div>
                                    <Button
                                        type="submit"
                                        label="Update Password"
                                        severity="danger"
                                        class="w-full"
                                    ></Button>
                                </form>
                            </Dialog>
                            <ProfileActionButton text="Rule">
                                <template #image>
                                    <img
                                        src="@/assets/images/rules.png"
                                        alt="Rule"
                                        class="w-8 h-8"
                                    />
                                </template>
                            </ProfileActionButton>
                            <ProfileActionButton text="Sound">
                                <template #image>
                                    <img
                                        src="@/assets/images/sound.png"
                                        alt="Sound"
                                        class="w-8 h-8"
                                    />
                                </template>
                                <template #icon>
                                    <ToggleSwitch v-model="sound" />
                                </template>
                            </ProfileActionButton>
                            <ProfileActionButton
                                text="Change Language"
                                @click="changeLanguageDialog = true"
                            >
                                <template #image>
                                    <img
                                        src="@/assets/images/change-language.png"
                                        alt="Change Language"
                                        class="w-8 h-8"
                                    />
                                </template>
                                <template #icon>
                                    <i class="text-xl pi pi-angle-right"></i>
                                </template>
                            </ProfileActionButton>
                            <Dialog
                                v-model:visible="changeLanguageDialog"
                                modal
                                header="Update Password"
                                :closable="false"
                                :showHeader="false"
                                :style="{ width: '25rem' }"
                            >
                                <form
                                    @submit.prevent="changeLanguageForm"
                                    class="space-y-4"
                                >
                                    <div class="mt-4 text-center">
                                        <SelectButton
                                            v-model="language"
                                            :options="options"
                                            option-label="language"
                                            option-value="language"
                                            size="large"
                                        >
                                            <template #option="slotProps">
                                                <img
                                                    :src="`/src/assets/images/${slotProps.option.icon}`"
                                                    :alt="slotProps.option.language"
                                                    class="w-4 h-4"
                                                >
                                                <p>{{ slotProps.option.language }}</p>
                                            </template>
                                        </SelectButton>
                                    </div>
                                    <Button
                                        type="submit"
                                        label="Change"
                                        severity="success"
                                        class="w-full"
                                    ></Button>
                                </form>
                            </Dialog>
                        </div>
                    </template>
                </Card>

                <Button
                    label="Logout"
                    severity="danger"
                    icon="pi pi-sign-out"
                    size="large"
                    class="w-full"
                />
            </div>
        </div>
    </SectionContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FloatingActions from '@/components/FloatingActions.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import ProfileActionButton from './components/ProfileActionButton.vue';
import CurrentBalanceCard from './components/CurrentBalanceCard.vue';

const sound = ref(true)
const updatePasswordDialog = ref(false);
const changeLanguageDialog = ref(false);

const language = ref('Myanmar');
const options = ref([
    { icon: 'mm.svg', language: 'Myanmar' },
    { icon: 'gb.svg', language: 'English' },
]);

const form = ref({
    oldPassword: '',
    newPassowrd: '',
    confirmPassword: ''
})

const errors = ref({
    oldPassword: '',
    newPassowrd: '',
    confirmPassword: ''
})

const updatePasswordForm = () => {
    errors.value.oldPassword = 'Old password field is required.'
    errors.value.newPassowrd = 'Password confirmation does not match.'
}

const changeLanguageForm = () => {
    changeLanguageDialog.value = false
}
</script>

<style scoped></style>