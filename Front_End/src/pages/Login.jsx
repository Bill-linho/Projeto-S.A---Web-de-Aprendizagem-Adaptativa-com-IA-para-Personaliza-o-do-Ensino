import Input from '../components/input/input.jsx'
import '../components/style/Login.css'
import Button from '../components/Button/Button.jsx'
import { useNavigate } from 'react-router-dom'

export default function CardLogin() {
    const navigate = useNavigate()

    return (
        <div>
            <div>
                <h2>Faça seu login para entrar na plataforma</h2>

                <div>
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Senha" type="password" />
                </div>

                <Button>Entrar</Button>
                <br/>
                <Button onClick={() => navigate('/Cadastro')}>Criar conta</Button>
            </div>
        </div>

    )
}