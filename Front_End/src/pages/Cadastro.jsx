import '../components/style/Cadastro.css'
import Button from '../components/Button/Button.jsx'
import Input from '../components/input/input.jsx'
import { useNavigate } from 'react-router-dom'
import { useState} from 'react'

import { api } from '../services/api.js'

export default function Cadastrar() {
    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')

    async function cadastrarUsuario() {
        try{
            const response = await api.post(
                '/auth/cadastro',
                {
                    nome,
                    email,
                    senha
                }
            )
            console.log(response.data)

            alert('Usuário criado')

            navigate('/Login')
        }catch(Vitor){
            console.log(Vitor)

            alert('Erro ao cadastrar')
        }
    }

    return (
        <div>
            <div>
                <h2>Faça seu cadastro para utilizar a plataforma</h2>
                <div>
                    <Input placeholder="Nome" type="text" onChange={(e)=> setNome(e.target.value)} />
                    <Input placeholder="Email" type="email" onChange={(e)=> setEmail(e.target.value)}/>
                    <Input placeholder="Senha" type="password" onChange={(e)=> setSenha(e.target.value)}/>
                </div>
                <Button onClick={cadastrarUsuario}>Cadastrar</Button>
                <Button onClick={() => navigate('/Login')}>Voltar</Button>
            </div>
        </div>
    )
}
