import Input from '../input/input.jsx'
import '../style/loginCard.css'

export default function CardLogin() {

    return (
        <div className="login-container">
            <div className="card-login">
                <h2>Login</h2>

                <div className="inputs">
                    <input placeholder="Email" type="email"/>
                    <input placeholder="Senha" type="password" />
                </div>

                <button className="btn-login">Entrar</button>
            </div>
        </div>

    )
}