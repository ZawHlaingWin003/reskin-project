<template>
    <SectionContainer>
        <div class="grid w-full grid-cols-1 gap-2 mx-auto md:gap-8 md:w-3/4 md:grid-cols-2">
            <div class="space-y-2 md:space-y-6">
                <div
                    class="flex items-center gap-2 px-4 py-3 text-white rounded-lg md:p-4 md:gap-4 bg-slate-500 dark:bg-slate-800">
                    <img
                        src="@/assets/images/default-user.png"
                        alt="User Profile"
                        class="w-14 h-14 md:w-16 md:h-16"
                    >
                    <div>
                        <h3 class="text-lg font-bold text-gray-50 md:text-xl">John Doe</h3>
                        <p class="text-sm text-gray-100">09 5100 4500</p>
                    </div>
                </div>
                <CurrentBalanceCard balance="15,000" />
                <FloatingActions />
            </div>

            <div class="space-y-2 md:space-y-6">
                <div class="flex items-center gap-2 md:gap-8">
                    <ProfileCard>
                        <RouterLink :to="{ name: 'user.transactions' }">
                            <div class="space-y-2 md:space-y-4">
                                <img
                                    src="@/assets/images/transaction.png"
                                    alt="Transaction"
                                    class="w-8 h-8 mx-auto md:w-12 md:h-12"
                                >
                                <p>{{ t('profile.transactions') }}</p>
                            </div>
                        </RouterLink>
                    </ProfileCard>
                    <ProfileCard>
                        <RouterLink :to="{ name: 'user.vouchers' }">
                            <div class="space-y-2 md:space-y-4">
                                <img
                                    src="@/assets/images/voucher.png"
                                    alt="Voucher"
                                    class="w-8 h-8 mx-auto md:w-12 md:h-12"
                                >
                                <p>{{ t('profile.vouchers') }}</p>
                            </div>
                        </RouterLink>
                    </ProfileCard>
                </div>

                <ProfileCard>
                    <div class="flex flex-col gap-1">
                        <ProfileActionButton
                            text="profile.change_password"
                            @click="changePasswordDialog = true"
                        >
                            <template #image>
                                <img
                                    src="@/assets/images/update-password.png"
                                    alt="Change Password"
                                    class="w-6 h-6 md:w-8 md:h-8"
                                />
                            </template>
                            <template #icon>
                                <i class="text-xl pi pi-angle-right"></i>
                            </template>
                        </ProfileActionButton>
                        <Dialog
                            v-model:visible="changePasswordDialog"
                            modal
                            :header="t('profile.change_password')"
                            class="w-11/12"
                        >
                            <ChangePasswordForm />
                        </Dialog>
                        <ProfileActionButton text="profile.rule">
                            <template #image>
                                <img
                                    src="@/assets/images/rules.png"
                                    alt="Rule"
                                    class="w-6 h-6 md:w-8 md:h-8"
                                />
                            </template>
                        </ProfileActionButton>
                        <ProfileActionButton text="profile.sound">
                            <template #image>
                                <img
                                    src="@/assets/images/sound.png"
                                    alt="Sound"
                                    class="w-6 h-6 md:w-8 md:h-8"
                                />
                            </template>
                            <template #icon>
                                <ToggleSwitch v-model="sound" />
                            </template>
                        </ProfileActionButton>
                        <ProfileActionButton
                            text="profile.change_language"
                            @click="changeLanguageDialog = true"
                        >
                            <template #image>
                                <img
                                    src="@/assets/images/change-language.png"
                                    alt="Change Language"
                                    class="w-6 h-6 md:w-8 md:h-8"
                                />
                            </template>
                            <template #icon>
                                <i class="text-xl pi pi-angle-right"></i>
                            </template>
                        </ProfileActionButton>
                        <Dialog
                            v-model:visible="changeLanguageDialog"
                            modal
                            :header="t('profile.change_language')"
                            :closable="false"
                            :showHeader="false"
                            class="w-3/4 md:w-96"
                        >
                            <LanguageSelector @changedLanguage="changeLanguageDialog = false" />
                        </Dialog>
                    </div>
                </ProfileCard>

                <Button
                    :label="t('profile.logout')"
                    severity="danger"
                    icon="pi pi-sign-out"
                    class="w-full"
                />
            </div>
        </div>
    </SectionContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import FloatingActions from '@/components/FloatingActions.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import ProfileActionButton from './components/ProfileActionButton.vue';
import CurrentBalanceCard from './components/CurrentBalanceCard.vue';
import ProfileCard from './components/ProfileCard.vue';
import LanguageSelector from './components/LanguageSelector.vue';
import ChangePasswordForm from './components/ChangePasswordForm.vue';

const { t } = useI18n()

const sound = ref(true)
const changePasswordDialog = ref(false);
const changeLanguageDialog = ref(false);
</script>

<style scoped></style>