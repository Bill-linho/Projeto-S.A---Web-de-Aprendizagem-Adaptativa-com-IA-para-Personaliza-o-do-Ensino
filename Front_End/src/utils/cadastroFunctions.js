import { api } from '../services/api.js'

export default async function authCadastro(nome,email,senha) {
  try {
    const response = await api.post(
      '/auth/cadastro',
      {
        nome,
        email,
        senha
      }
    )

    return response.data

  } catch (erro) {
    console.log(erro)
    throw erro
  }
}