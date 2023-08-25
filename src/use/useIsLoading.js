import { ref } from 'vue'

const isLoading = ref(false)

export const useIsLoading = () => {
  return { isLoading }
}
