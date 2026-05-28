import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Input from '../input/input.jsx'
import Button from '../Button/Button.jsx'

import authCadastro from '../../utils/cadastroFunctions.js'

export  default function CadastroCard() {

  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await authCadastro(
        nome,
        email,
        senha
      )

      alert('Usuário criado')

      navigate('/Login')

    } catch (erro) {
      alert('Erro ao cadastrar', erro)
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>
        Faça seu cadastro para utilizar a plataforma
      </h2>

      <div>
        <Input
          placeholder="Nome"
          type="text"
          value={nome}
          onChange={(e) =>
            setNome(e.target.value)
          }
        />

        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <Input
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={(e) =>
            setSenha(e.target.value)
          }
        />
      </div>

      <Button type="submit">
        Cadastrar
      </Button>

      <Button
        type="button"
        onClick={() =>
          navigate('/Login')
        }
      >
        Voltar
      </Button>

    </form>
  )
}