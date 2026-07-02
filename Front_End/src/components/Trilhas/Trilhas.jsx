import AvisoCard from '../cards/avisoCard/avisoCard'
import '../style/Trilhas.css'
import { useState } from 'react'
import Button from '../Button/Button.jsx'

export default function Trilhas() {
    const [nivel, setNivel] = useState('')
    const [view, setView] = useState('Cadastro') // 'Cadastro' e 'Outra' (placeholder)

    return (
        <section>
            <div className='box-one'>
                <h1>Minha Trilha</h1>

                {view === 'Cadastro' ? (
                    <>
                        <div className='form-group'>
                            <label>Escolher área de conhecimento</label>

                            <select>
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
                                        className={`level-btn ${nivel === item ? 'active' : ''}`}
                                        onClick={() => setNivel(item)}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Button className='btn-cadastrar' onClick={() => setView("aviso")}>
                            Cadastrar
                        </Button>
                    </>
                ) : (
                    <div className='aviso-gemini'>
                        <AvisoCard></AvisoCard>
                    </div>
                )}
            </div>
        </section>
    )
}