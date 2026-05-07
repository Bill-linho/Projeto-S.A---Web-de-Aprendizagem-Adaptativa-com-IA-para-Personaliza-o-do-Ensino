import '../components/style/Cadastro.css'
import Button from '../components/Button/Button.jsx'
import Input from '../components/input/input.jsx'
import { useNavigate } from 'react-router-dom'

export default function RegisterCard() {
    const navigate = useNavigate()
    
    return (
        <div>
            <div>
                <h2>Faça seu cadastro para utilizar a plataforma</h2>
                <div>
                    <Input placeholder="Nome" type="text" />
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Senha" type="password" />
                </div>
                <Button>Cadastrar</Button>
                <Button onClick={() => navigate('/Login')}>Voltar</Button>
            </div>
        </div>
    )
}
