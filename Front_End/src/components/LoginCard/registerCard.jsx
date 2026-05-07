import '../style/registerCard.css'
import Button from '../Button/Button'
import Input from '../input/input.jsx'
import { useNavigate } from 'react-router-dom'

export default function RegisterCard() {
    const navigate = useNavigate()

    return (
        <div className="register-container">
            <div className="card-register">
                <h2>Cadastro</h2>
                <div className="inputs">
                    <Input placeholder="Nome" type="text" />
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Senha" type="password" />
                </div>
                <Button className="btn-register">Cadastrar</Button>
                <Button className="btn-login" onClick={() => navigate('/Login')}>Criar conta</Button>
            </div>
        </div>
    )
}
