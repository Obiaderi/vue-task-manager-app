<template>
  <CustomModal v-show="isShowTaskModal" title="Add new Task">
    <form action="#">
      <label for="name" class="label">Title</label>
      <input v-model="name.title" type="text" name="title" class="modal-input-style" />
      <label for="name" class="label">status</label>
      <select class="modal-input-style" v-model="name.status" name="status" id="">
        <option value="1">To Do</option>
        <option value="2">Doing</option>
        <option value="3">Done</option>
      </select>
      <label for="description" class="label">Description</label>
      <textarea
        v-model="name.description"
        type="text"
        name="description"
        class="modal-input-style"
      ></textarea>
      <label for="due_date" class="label">Due Date</label>
      <input v-model="name.due_date" type="date" name="due_date" class="modal-input-style" />
      <button type="submit" class="btn btn-blue">Add Task</button>
    </form>
  </CustomModal>
</template>

<script setup>
import { reactive } from 'vue'
import CustomModal from '../../components/CustomModal.vue'
import { useCreateTask } from '../../use/useCreateTask'

const { isShowTaskModal } = useCreateTask()

const name = reactive({
  title: '',
  status: '',
  description: '',
  due_date: ''
})
</script>
