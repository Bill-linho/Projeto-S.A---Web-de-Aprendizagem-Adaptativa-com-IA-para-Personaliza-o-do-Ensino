import { api } from './api'

export const getMessages = () => {
  return api.get('/chat/messages')
}

export const sendMessage = (payload) => {
  return api.post('/chat/messages', payload)
}

export const getProfile = () => api.get('/user/me')
export const updateProfile = (data) => api.put('/user/me', data)

export default { getMessages, sendMessage, getProfile, updateProfile }
