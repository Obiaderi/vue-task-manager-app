<template>
  <LoadingIndicator />
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
      Register new account
    </h1>
    <form @submit.prevent="handleRegister" class="space-y-4 md:space-y-6" action="#">
      <div>
        <label class="label">Names</label>
        <input
          class="input-style focus:ring-primary-600 focus:border-primary-600 focus:ring-blue-500 focus:border-blue-500"
          v-model="state.name"
          type="text"
          name="names"
        />
      </div>
      <div>
        <label class="label">Email</label>
        <input
          class="input-style focus:ring-primary-600 focus:border-primary-600 focus:ring-blue-500 focus:border-blue-500"
          v-model="state.email"
          type="text"
          name="email"
        />
      </div>
      <div>
        <label class="label">Password</label>
        <input
          class="input-style focus:ring-primary-600 focus:border-primary-600 focus:ring-blue-500 focus:border-blue-500"
          v-model="state.password"
          type="password"
        />
      </div>
      <div>
        <label class="label">Confirm Password</label>
        <input
          class="input-style focus:ring-primary-600 focus:border-primary-600 focus:ring-blue-500 focus:border-blue-500"
          v-model="state.password_confirmation"
          type="password"
        />
      </div>

      <button type="submit" class="w-full btn-blue">Sign in</button>
      <router-link to="/login">
        <p class="float-right py-2 text-sm font-light text-gray-500">
          Already have an account?
          <a class="font-medium text-blue-400 text-primary-600 hover:underline text-primary-500"
            >Register</a
          >
        </p>
      </router-link>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthentication } from '../../use/useAuthentication'
import { useIsLoading } from '../../use/useIsLoading'
import LoadingIndicator from '../../components/LoadingIndicator.vue'

const router = useRouter()
const authStore = useAuthentication()
const { isLoading } = useIsLoading()

const errorMessages = ref('')

const state = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const handleRegister = () => {
  isLoading.value = true
  authStore
    .register(state)
    .then(() => {
      router.push('/')
    })
    .catch((error) => {
      errorMessages.value = error.message
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>
