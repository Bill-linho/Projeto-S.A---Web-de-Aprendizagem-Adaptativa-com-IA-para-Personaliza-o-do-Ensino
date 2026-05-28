import { useState } from 'react'
import authLogin from '../../utils/loginFunctions.js'
import Button from '../Button/Button.jsx'
import { useNavigate } from 'react-router-dom'


export default function LoginCard() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await authLogin(email, senha)

            alert('Acesso concedido')

            navigate('/home')
        } catch (error) {
            alert('Erro ao entrar!')
        }
    }

    return (
  <div className="login-container">

    <form
      className="auth-card"
      onSubmit={handleSubmit}
    >

      <h2 className="auth-header">
        Faça seu login para entrar na plataforma
      </h2>

      <div className="form-group">
        <label
          className="input-label"
          htmlFor="email"
        >
          E-mail:
        </label>

        <input
          type="email"
          id="email"
          className="input-field"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="Digite seu e-mail"
          required
        />
      </div>

      <div className="form-group">
        <label
          className="input-label"
          htmlFor="password"
        >
          Senha
        </label>

        <input
          type="password"
          id="password"
          className="input-field"
          value={senha}
          onChange={(e) =>
            setSenha(e.target.value)
          }
          placeholder="Digite sua senha"
          required
        />
      </div>

      <div className="forgot-password">
        <a href="#">
          Esqueci a senha
        </a>
      </div>

      <button
        type="submit"
        className="btn-primary"
      >
        Entrar
      </button>

      <div className="create-account-container">

        <div className="create-account-line" />

        <div className="create-account-content">
          <button
            type="button"
            className="create-account-button"
            onClick={() =>
              navigate('/Cadastro')
            }
          >
            Criar conta
          </button>
        </div>

      </div>

    </form>

  </div>
)
}