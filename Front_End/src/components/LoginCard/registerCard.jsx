import '../style/registerCard.css'

export default function RegisterCard() {
    return (
        <div className="register-container">
            <div className="card-register">
                <h2>Cadastro</h2>
                <div className="inputs">
                    <input placeholder="Nome" type="text" />
                    <input placeholder="Email" type="email" />
                    <input placeholder="Senha" type="password" />
                </div>
                <button className="btn-register">Cadastrar</button>
            </div>
        </div>
    )
}
