import { api } from '../services/api.js'

export default async function authLogin(email, senha) {
  try {
    const response = await api.post(
      '/auth/login', 
      {
        email,
        senha
      },
    )
    const token = response.data.token
    
    localStorage.setItem('token', token)
    return response
  } catch (erro) {
    console.log(erro)
    throw erro
  }
}