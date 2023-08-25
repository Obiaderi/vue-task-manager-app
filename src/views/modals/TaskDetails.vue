<template>
  <CustomModal v-show="detailsTaskModal" :title="task.title">
    <div class="p-2 space-y-6">
      <p class="text-base leading-relaxed text-gray-400">
        {{ task.description }}
      </p>
    </div>
    <div
      class="flex items-center justify-between pt-4 mt-4 border-t border-gray-600 rounded-t sm:mt-5"
    >
      <button class="btn btn-blue">Edit</button>
      <button class="btn btn-danger">Delete</button>
    </div>
  </CustomModal>
</template>

<script setup>
import CustomModal from '../../components/CustomModal.vue'
import { useCreateTask } from '../../use/useCreateTask'

const { detailsTaskModal, task } = useCreateTask()
</script>
