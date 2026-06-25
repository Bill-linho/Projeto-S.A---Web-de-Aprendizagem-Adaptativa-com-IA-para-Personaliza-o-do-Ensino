import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import authCadastro from '../../../utils/cadastroFunctions.js'
import '../../style/Cadastro.css'

export default function CadastroCard() {

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
      alert('Erro ao cadastrar')
    }
  }

  return (
    <div className="cadastro-container">

      <form
        className="cadastro-card"
        onSubmit={handleSubmit}
      >
        <h2>
          Faça seu cadastro para utilizar a plataforma
        </h2>

        <div className="form-group">
          <label>Nome</label>

          <input
            type="text"
            placeholder="Digite seu nome completo"
            value={nome}
            onChange={(e) =>
              setNome(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>E-mail</label>

          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Senha</label>

          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) =>
              setSenha(e.target.value)
            }
          />
        </div>

        <div className="button-group">

          <button
            type="button"
            className="btn-voltar"
            onClick={() =>
              navigate('/Login')
            }
          >
            Voltar
          </button>

          <button
            type="submit"
            className="btn-cadastrar"
          >
            Cadastrar
          </button>

        </div>

      </form>
    </div>
  )
}