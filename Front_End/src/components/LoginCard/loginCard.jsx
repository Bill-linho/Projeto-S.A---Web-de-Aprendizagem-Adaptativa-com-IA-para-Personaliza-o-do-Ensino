import Input from '../input/input.jsx'
import '../style/loginCard.css'
import Button from '../Button/Button.jsx'

export default function CardLogin() {

    return (
        <div className="login-container">
            <div className="card-login">
                <h2>Login</h2>

                <div className="inputs">
                    <Input placeholder="Email" type="email"/>
                    <Input placeholder="Senha" type="password" />
                </div>

                <Button className="btn-login">Entrar</Button>
                <Button className="btn-login">Criar conta</Button>
            </div>
        </div>

    )
}