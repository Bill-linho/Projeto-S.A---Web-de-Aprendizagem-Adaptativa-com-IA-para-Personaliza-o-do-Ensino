import '../components/style/Cadastro.css'
import Button from '../components/Button/Button.jsx'
import Input from '../components/input/input.jsx'
import authCadastro from '../utils/cadastroFunctions.js'


import { useNavigate } from 'react-router-dom'
import { useState} from 'react'

import { api } from '../services/api.js'

export default function Cadastrar() {
    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')

    return (
        <div>
            <cadastroCard/>
        </div>
    )
}
