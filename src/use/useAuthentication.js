import { reactive } from 'vue'
import axiosClient from '../axios'

const user = reactive({
  data: JSON.parse(sessionStorage.getItem('USER')) || {},
  token: sessionStorage.getItem('TOKEN')
})

export const useAuthentication = () => {
  async function login(userData) {
    try {
      const response = await axiosClient.post('/login', userData)
      // console.log(response)
      setUser(response.data.user)
      user.data = response.data.user
      setToken(response.data.token)
      // console.log(response.data.user)
    } catch (error) {
      console.log(error)
    }
  }

  async function register(userData) {
    try {
      const response = await axiosClient.post('/register', userData)
      console.log(response)
      setUser(response.data.user)
      user.data = response.data.user
      setToken(response.data.token)
    } catch (error) {
      console.log(error)
    }
  }

  // get user
  function setUser(user) {
    console.log(user)
    sessionStorage.setItem('USER', JSON.stringify(user))
  }

  // set token to sessionStorage
  function setToken(token) {
    sessionStorage.setItem('TOKEN', token)
    user.token = token
  }

  async function logout() {
    await axiosClient.post('/logout')
    user.token = null
    user.data = {}
    sessionStorage.removeItem('TOKEN')
    sessionStorage.removeItem('USER')
  }

  return { user, logout, login, register }
}
