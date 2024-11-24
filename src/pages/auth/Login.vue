<template>
	<SectionContainer class="m-10">
		<div class="flex flex-col items-center justify-center mx-auto md:px-6">

			<div
				class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
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
							>Username</label>
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
								for="name"
								class="required"
							>Password</label>
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
							label="Sign In"
							type="submit"
							class="w-full text-white"
						/>
						<p class="font-light text-gray-500 dark:text-gray-400">
							Don’t have an account yet? <RouterLink
								:to="{ name: 'auth.register' }"
								class="font-medium text-primary-600 hover:underline dark:text-primary-500"
							>Sign up</RouterLink>
						</p>
					</form>
				</div>
			</div>
		</div>
	</SectionContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SectionContainer from '@/components/SectionContainer.vue';
import { useAuthStore } from '@/stores/AuthStore';
import { useRouter } from 'vue-router';
import LazyImage from '@/components/LazyImage.vue';

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

<style scoped></style>