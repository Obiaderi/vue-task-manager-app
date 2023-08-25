<template>
  <section class="bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h1 class="py-5 text-2xl font-bold text-blue-500 lg:text-4xl">Task Manager App</h1>
      <div
        class="w-full py-8 bg-gray-800 border border-gray-700 rounded-lg shadow md:mt-0 sm:max-w-md"
      >
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})
</script>
