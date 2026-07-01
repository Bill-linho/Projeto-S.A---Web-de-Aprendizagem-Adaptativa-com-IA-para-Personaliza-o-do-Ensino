import '../style/Trilhas.css'
import { useState } from 'react'

export default function Trilhas() {
    const [nivel, setNivel] = useState('')

    return (
        <section>
            <div className='box-one'>
                <h1>Minha Trilha</h1>

                <div className='form-group'>
                    <label>Escolher área de conhecimento</label>

                    <select>
                        <option value=''>Selecione uma opção</option>
                        <option value='logica'>Lógica de Programação</option>
                        <option value='backend'>Back End (Node.js)</option>
                        <option value='frontend'>Front End (Vite)</option>
                    </select>
                </div>

                <hr />

                <div className='form-group'>
                    <label>Escolher nível de aprendizado</label>

                    <div className='level-buttons'>
                        {['Iniciante', 'Intermediário', 'Avançado'].map((item) => (
                            <button
                                key={item}
                                type='button'
                                className={`level-btn ${nivel === item ? 'active' : ''
                                    }`}
                                onClick={() => setNivel(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                <button className='btn-cadastrar'>
                    Cadastrar
                </button>
            </div>
        </section>
    )
}