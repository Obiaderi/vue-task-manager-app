<template>
  <LoadingIndicator />
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
      Sign in to your account
    </h1>

    <form @submit.prevent="loginHandle" class="space-y-4 md:space-y-6" action="#">
      <div>
        <label class="label">Email</label>
        <input
          class="input-style focus:ring-primary-600 focus:border-primary-600 focus:ring-blue-500 focus:border-blue-500"
          v-model="state.email"
          name="email"
          type="text"
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

      <button type="submit" class="w-full btn-blue">Sign in</button>
      <router-link to="/register">
        <p class="float-right py-2 text-sm font-light text-gray-500">
          Don’t have an account yet?
          <a class="font-medium text-blue-400 text-primary-600 hover:underline text-primary-500"
            >Sign up</a
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
  email: '',
  password: ''
})

const loginHandle = async () => {
  isLoading.value = true
  try {
    await authStore.login(state)
    isLoading.value = false
    router.push('/')
  } catch (error) {
    errorMessages.value = error.message
  }
}
</script>
