<template>
  <div class="page-layout">
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
  </div>
</template>

<script setup>
import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import { useCreateGategory } from '../use/useCreateGategory'
const { openCatModal } = useCreateGategory()

const { result: resultTaskCategory } = useQuery(gql`
  query {
    taskCategories {
      id
      name
      taskCount
    }
  }
`)
</script>
