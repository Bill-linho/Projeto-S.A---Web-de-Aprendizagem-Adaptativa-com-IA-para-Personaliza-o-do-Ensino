import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../input/input.jsx'
import Button from '../Button/Button.jsx'
import '../style/CardLogin.css'


export default function CardLogin() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function fazerLogin(e) {
        e.preventDefault()

        try {
            const response = await axios.post(
                'http://localhost:3000/auth/login',
                {
                    email,
                    senha
                }
            )

            console.log(response.data)

            localStorage.setItem(
                'token',
                response.data.token
            )

            alert('Login realizado!')

        } catch (error) {
            console.log(error)

            alert(
                error.response?.data?.mensagem
                || 'Erro ao logar'
            )
        }
    }

    return (
        <div>
            <h2>Faça seu login para entrar na plataforma</h2>
            <div className='hero'>
                <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target).value} />
                <Input placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target).value} />
                <Button onClick={fazerLogin()}>Entrar</Button>
                <Button onClick={() => navigate('/Cadastro')}>Criar conta</Button>
            </div>
        </div>
    )
}