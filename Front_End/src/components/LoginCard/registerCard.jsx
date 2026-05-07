import '../style/registerCard.css'
import Button from '../Button/Button'
import Input from '../input/input.jsx'

export default function RegisterCard() {
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
                <Button className="btn-register">Voltar</Button>
            </div>
        </div>
    )
}
