import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})
// Adiciona automaticamente o header Authorization com o token salvo
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers = config.headers || {}
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

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