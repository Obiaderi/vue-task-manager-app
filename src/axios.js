import axios from 'axios'
import { useAuthentication } from './use/useAuthentication'
import router from './router'

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000/api'
})

axiosClient.interceptors.request.use((config) => {
  const authStore = useAuthentication()
  config.headers.Authorization = `Bearer ${authStore.user.token}`
  return config
})

axiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (
      error.response.status === 401 ||
      error.response.status === 403 ||
      error.response.status === 500
    ) {
      sessionStorage.removeItem('TOKEN')
      router.push({ name: 'Login' })
    } else if (error.response.status === 404) {
      router.push({ name: 'NotFound' })
    }
    return error
  }
)

export default axiosClient
