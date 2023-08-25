import { ref } from 'vue'
// import axiosClient from '../axios'

const isShow = ref(false)

export const useCreateGategory = () => {
  const openCatModal = () => {
    isShow.value = true
  }
  const closeCatModal = () => {
    isShow.value = false
  }

  return {
    openCatModal,
    closeCatModal,
    isShow
  }
}
