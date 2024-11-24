<template>
    <form
        @submit.prevent="updatePasswordForm"
        class="space-y-2 md:space-y-4"
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
            ><span class="text-xs md:text-base">{{ errors.oldPassword }}</span></Message>
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
            ><span class="text-xs md:text-base">{{ errors.newPassowrd }}</span></Message>
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
            :label="t('actions.update_password')"
            severity="danger"
            class="w-full"
        ></Button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

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
</script>

<style scoped></style>