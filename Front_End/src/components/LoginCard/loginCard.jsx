import Input from '../input/input.jsx'
import '../style/loginCard.css'
import Button from '../Button/Button.jsx'
import { useNavigate } from 'react-router-dom'

export default function CardLogin() {
    const navigate = useNavigate()

    return (
        <div className="login-container">
            <div className="card-login">
                <h2>Login</h2>

                <div className="inputs">
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Senha" type="password" />
                </div>

                <Button className="btn-login">Entrar</Button>
                <Button className="btn-login" onClick={() => navigate('/Cadastro')}>Criar conta</Button>
            </div>
        </div>

    )
}