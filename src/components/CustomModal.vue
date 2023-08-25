<template>
  <div class="fixed inset-0 z-40 bg-gray-900 bg-opacity-80">
    <div class="flex items-center justify-center w-full h-full">
      <div class="w-screen m-4 lg:m-0 lg:w-[500px]">
        <div class="w-full p-4 rounded-lg shadow bg-slate-700 sm:p-5">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between pb-4 mb-4 border-b border-gray-600 rounded-t sm:mb-5"
          >
            <h3 class="text-lg font-semibold text-white">{{ props.title }}</h3>
            <button @click="handleToggleModal"><CloseIcon /></button>
          </div>
          <!-- Modal body -->
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CloseIcon from './icon/CloseIcon.vue'
import { useCreateGategory } from '../use/useCreateGategory'
import { useCreateTask } from '../use/useCreateTask'

const { closeCatModal } = useCreateGategory()
const { closeTaskModal, closeDetailsTaskModal } = useCreateTask()

const props = defineProps({
  title: {
    type: String,
    default: 'Add New Document'
  }
})

const handleToggleModal = () => {
  closeCatModal()
  closeTaskModal()
  closeDetailsTaskModal()
}
</script>
