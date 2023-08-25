<template>
  <CustomModal v-show="isShow" title="Add new Category">
    <form action="#">
      <label for="name" class="block mb-2 text-sm font-medium text-white">Name</label>
      <input v-model="name" type="text" name="name" class="modal-input-style" />
      <button type="submit" class="btn btn-blue">Add new product</button>
    </form>
  </CustomModal>
</template>

<script setup>
import { ref } from 'vue'
import CustomModal from '../../components/CustomModal.vue'
import { useCreateGategory } from '../../use/useCreateGategory'
import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'

const { isShow } = useCreateGategory()

const name = ref('')

// const { result: resultTaskCategory } = useQuery(gql`
//   query {
//     taskCategories {
//       id
//       name
//       taskCount
//     }
//   }
// `)
</script>
