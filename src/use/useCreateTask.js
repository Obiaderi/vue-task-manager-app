import { reactive, ref } from 'vue'
import { useQuery, useMutation } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'

const task = reactive({
  title: '',
  description: '',
  status: '',
  task_category_id: '',
  user_id: ''
})

const isShowTaskModal = ref(false)
const detailsTaskModal = ref(false)

export const useCreateTask = () => {
  const closeTaskModal = () => {
    isShowTaskModal.value = false
  }
  const openTaskModal = (userData) => {
    isShowTaskModal.value = true
    task.title = userData.title
    task.description = userData.description
    task.status = userData.status
    task.task_category_id = userData.task_category_id
    task.user_id = userData.user_id
  }

  const showDetailsTaskModal = (userData) => {
    detailsTaskModal.value = true
    task.title = userData.title
    task.description = userData.description
    task.status = userData.status
    task.task_category_id = userData.task_category_id
    task.user_id = userData.user_id
  }

  const closeDetailsTaskModal = () => {
    detailsTaskModal.value = false
  }

  // Graohql Query
  const { result: resultAllTasks, loading: taskLoading } = useQuery(gql`
    query {
      tasks {
        id
        title
        status
        description
        taskCategory {
          name
        }
      }
    }
  `)

  // deleteTask Mutation
  const { mutate: deleteTask } = useMutation(gql`
    mutation deleteTask($id: ID!) {
      deleteTask(id: $id) {
        id
      }
    }
  `)

  // onMounted(() => {
  //   isLoading.value = true
  // })
  // watch(taskLoading, () => {
  //   isLoading.value = true
  // })

  // watch(resultAllTasks, () => {
  //   isLoading.value = false
  // })

  return {
    task,
    closeTaskModal,
    openTaskModal,
    isShowTaskModal,
    detailsTaskModal,
    showDetailsTaskModal,
    closeDetailsTaskModal,
    resultAllTasks,
    taskLoading,
    deleteTask
  }
}
