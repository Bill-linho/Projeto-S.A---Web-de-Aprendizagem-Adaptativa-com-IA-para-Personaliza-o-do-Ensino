import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      alert('Sua sessão expirou. Faça login novamente.')

      localStorage.removeItem('token')

      window.location.href = '/Login'
    }

    return Promise.reject(error)
  }
)