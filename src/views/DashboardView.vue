<template>
  <div class="page-layout">
    <!--Cat Modal -->
    <AddCategoryModal />

    <!--  Models -->
    <AddTaskModal />
    <TaskDetails />

    <LoadingIndicator />

    <section class="">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">My Categories</h2>
        <button @click="openCatModal" class="block my-4 btn btn-blue">+ Add New Category</button>
      </div>

      <div
        v-if="resultTaskCategory"
        class="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="category in resultTaskCategory.taskCategories"
          :key="category.id"
          class="flex items-center border-2 border-gray-300 border-dashed rounded-lg h-14 dark:border-gray-600"
        >
          <div class="flex gap-4 px-3">
            <span>{{ category.taskCount }}</span>
            <span>{{ category.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-12">
      <div class="flex items-start justify-between">
        <h2 class="text-2xl font-bold">All Tasks</h2>
        <button @click="openTaskModal" class="block btn btn-primary-outline">+ Add Task</button>
      </div>
      <div v-if="resultAllTasks" class="">
        <div v-for="task in resultAllTasks.tasks" :key="task.id" class="">
          <TaskCard
            :task="task.title"
            :decription="task.taskCategory.name"
            :status="task.status"
            @click="showDetailsTaskModal(task)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import TaskCard from '../components/TaskCard.vue'
import AddCategoryModal from './modals/AddCategoryModal.vue'
import TaskDetails from './modals/TaskDetails.vue'
import AddTaskModal from './modals/AddTaskModal.vue'
import { useCreateGategory } from '../use/useCreateGategory'
import { useCreateTask } from '../use/useCreateTask'
import LoadingIndicator from '../components/LoadingIndicator.vue'
import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import { useIsLoading } from '../use/useIsLoading.js'

const { openCatModal } = useCreateGategory()
const { openTaskModal, showDetailsTaskModal, resultAllTasks, taskLoading } = useCreateTask()
const { isLoading } = useIsLoading()

const { result: resultTaskCategory } = useQuery(gql`
  query {
    taskCategories {
      id
      name
      taskCount
    }
  }
`)

watch(taskLoading, () => {
  isLoading.value = true
})

watch(resultTaskCategory, () => {
  isLoading.value = false
})

// watch(result, () => {
//   console.log(result.value.taskCategories)
//   console.log(result.value.taskCategories[0].name)
// })
</script>
