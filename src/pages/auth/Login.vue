<template>
	<SectionContainer class="relative z-10">
		<img
			src="/assets/images/background/7.png"
			alt="Bg"
			class="absolute w-40 h-40 top-full -left-1/2 -z-10 opacity-10 animate-float delay-1"
		>
		<img
			src="/assets/images/background/5.png"
			alt="Bg"
			class="absolute w-40 h-40 -left-1/2 -top-20 opacity-10 animate-float delay-2"
		>
		<img
			src="/assets/images/background/12.png"
			alt="Bg"
			class="absolute right-0 w-40 h-40 translate-x-1/2 top-full -z-10 opacity-10 animate-float delay-3"
		>
		<img
			src="/assets/images/background/10.png"
			alt="Bg"
			class="absolute right-0 w-40 h-40 translate-x-1/2 -top-20 opacity-10 animate-float delay-4"
		>
		<div class="flex flex-col items-center justify-center mx-auto md:px-6">

			<div class="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 shadow-card dark:bg-slate-800">
				<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
					<a
						href="#"
						class="flex items-center justify-center w-24 h-24 p-4 mx-auto mb-4 rounded-full md:mb-6 md:p-6 md:w-40 md:h-40 main-gradient"
					>
						<LazyImage
							imgClass="w-full h-full"
							imgSrc="/assets/images/white-logo.png"
							alt="logo"
						/>
					</a>
					<form
						class="space-y-4 md:space-y-6"
						@submit.prevent="submitLoginForm"
					>
						<div>
							<label
								for="name"
								class="required"
							>{{ t('auth.username') }}</label>
							<InputText
								type="text"
								id="name"
								class="w-full"
								v-model="form.name"
								:invalid="!!errors.name"
							/>
							<Message
								size="small"
								variant="simple"
								severity="error"
							>{{ errors.name }}</Message>
						</div>
						<div>
							<label
								for="password"
								class="required"
							>{{ t('auth.password') }}</label>
							<Password
								v-model="form.password"
								toggleMask
								class="w-full"
								autocomplete="on"
								:feedback="false"
								:invalid="!!errors.password"
							/>
							<Message
								size="small"
								variant="simple"
								severity="error"
							>{{ errors.password }}</Message>
						</div>
						<Button
							:label="t('auth.sign_in')"
							type="submit"
							class="w-full text-white"
						/>
					</form>
				</div>
			</div>
		</div>
	</SectionContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/AuthStore';
import SectionContainer from '@/components/SectionContainer.vue';
import LazyImage from '@/components/LazyImage.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const form = ref({
	name: '',
	password: '',
	remember: false
})

const errors = ref({
	name: '',
	password: '',
	remember: ''
})

const authStore = useAuthStore()
const router = useRouter()

const submitLoginForm = () => {
	authStore.isLoggedIn = true;
	router.push({
		name: 'home'
	})
}
</script>

<style scoped>
.shadow-card {
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 30px;
}
</style>