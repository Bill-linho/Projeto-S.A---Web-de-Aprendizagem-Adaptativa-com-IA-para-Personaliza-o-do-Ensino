import { useState } from 'react'
import authLogin from '../../utils/loginFunctions'

export default function LoginCard() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        await authLogin(email, senha)
    }

    return (
        <form className="auth-card" onSubmit={handleSubmit}>

            <h2 className="auth-header">Faça seu login para entrar na plataforma</h2>

            <div className="form-group">
                <label className="input-label" htmlFor="email">E-mail:</label>

                <input type="email" id="email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" required />
            </div>

            <div className="form-group">
                <label className="input-label" htmlFor="password"> Senha </label>

                <input type="password" id="password" className="input-field" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" required/>
            </div>

            <div style={{textAlign: 'left', marginTop: '-8px', marginBottom: '16px' }}>
                <a href="#" style={{ color: 'var(--text-main-color)', fontSize: '14px', textDecoration: 'underline' }} > Esqueci a senha </a>
            </div>

            <button type="submit" className="btn btn-primary"> Entrar </button>

            <div
                style={{
                    position: 'relative',
                    marginTop: '24px',
                    textAlign: 'center'
                }}
            >
                <div
                    style={{
                        borderTop: '1px solid var(--text-main-color)',
                        width: '100%'
                    }}
                />

                <span
                    style={{
                        position: 'absolute',
                        top: '-10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'var(--card-bg-color)',
                        color: 'var(--text-main-color)',
                        fontSize: '14px',
                        fontWeight: '600'
                    }}
                >
                    Criar conta
                </span>
            </div>

        </form>
    )
}