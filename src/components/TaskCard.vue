<template>
  <div class="mt-6 transition-all duration-200 hover:scale-x-105">
    <div
      class="flex flex-col items-start justify-center w-full p-4 mt-4 hover:cursor-pointer bg-slate-700 rounded-xl"
    >
      <div class="flex items-center gap-4">
        <div class="w-[25px] h-[25px] rounded-full bg-orange-500" />

        <div class="flex flex-col">
          <h4 class="text-xl font-bold capitalize">{{ props.task }}</h4>
          <p class="text-xs">
            {{ props.decription }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  task: {
    type: Object,
    required: true
  },
  decription: {
    type: String,
    required: true
  },
  status: String
})
</script>
