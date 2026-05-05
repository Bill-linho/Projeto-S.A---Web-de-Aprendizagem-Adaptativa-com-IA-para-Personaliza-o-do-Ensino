import Input from '../input/input.jsx'
import './loginCard.css'

export default function CardLogin() {

    return (
        <div className="login-container">
            <div className="card-login">
                <h2>Login</h2>

                <div className="inputs">
                    <Input placeholder="Email" />
                    <Input placeholder="Senha" type="password" />
                </div>

                <button className="btn-login">Entrar</button>
            </div>
        </div>

    )
}