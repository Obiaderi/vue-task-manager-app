<template>
  <div class="antialiased bg-gray-900">
    <nav
      class="border-b -200 px-4 py-2.5 bg-gray-800 border-gray-700 fixed left-0 right-0 top-0 z-50"
    >
      <div class="flex flex-wrap items-center justify-between">
        <div class="flex items-center justify-start">
          <button
            data-drawer-target="drawer-navigation"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            class="p-2 mr-2 text-gray-400 rounded-lg cursor-pointer md:hidden md:hiddentext-gray-900 focus:bg-gray-700 focus:ring-2 focus:ring-gray-10 focus:ring-gray-700 hover:bg-gray-700 hover:text-white"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Toggle sidebar</span>
          </button>
          <a href="https://flowbite.com" class="flex items-center justify-between mr-4">
            <span class="text-3xl font-bold md:hidden">TM</span>
            <span
              class="self-center hidden text-2xl font-semibold md:block whitespace-nowrap dark:text-white"
              >Task Manager</span
            >
          </a>
        </div>
        <button @click="handleLogout" class="font-semibold text-white bg-orange-600 btn">
          Logout
        </button>
      </div>
    </nav>

    <!-- Sidebar -->

    <aside
      class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-gray-800 border-r border-gray-700 pt-14 md:translate-x-0"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div class="flex justify-center w-full my-10">
        <div class="flex flex-col gap-4">
          <img
            class="w-40 h-40 rounded-full"
            src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"
            alt="user photo"
          />
          <h2 class="mt-4 text-xl font-bold text-center text-white">
            {{ authStore.user.data.name }}
          </h2>
          <button class="block btn btn-primary-outline">+ Add New Task</button>
        </div>
      </div>
      <NavigationLink to="/dashboard" title="Dashboard" />
      <NavigationLink to="/category" title="Create Category" />
    </aside>

    <main class="h-auto p-4 pt-20 md:ml-64">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthentication } from '../use/useAuthentication'
import NavigationLink from '@/components/NavigationLink.vue'
import { useIsLoading } from '../use/useIsLoading'

const router = useRouter()
const authStore = useAuthentication()
const { isLoading } = useIsLoading()

// console.log(authStore.user.data.name)

const handleLogout = () => {
  isLoading.value = true
  authStore
    .logout()
    .then(() => {
      router.push('/login')
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>
