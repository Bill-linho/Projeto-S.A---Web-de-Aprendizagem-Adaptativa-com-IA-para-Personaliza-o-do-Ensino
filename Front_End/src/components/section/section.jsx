import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../style/section.css'

export default function Section() {
    const navigate = useNavigate()

    const [estudos, setEstudos] = useState(null)

    useEffect(() => {
        const buscarEstudos = () => {
            const resultado = null

            setEstudos(resultado)
        }

        buscarEstudos()
    }, [])

    return (
        <section>
            <div className='box-one'>
                <h1>Estudos</h1>

                {!estudos ? (
                    <div className='sem-estudo'>
                        <p>
                            Sem estudo por enquanto, entre em Trilha e
                            cadastre o seu nível de aprendizado.
                        </p>

                        <button
                            className='btn-cadastrar'
                            onClick={() => navigate('/trilhas')}
                        >
                            Ir para Trilha
                        </button>
                    </div>
                ) : (
                    <div>
                        {/* conteúdo futuro */}
                    </div>
                )}
            </div>
        </section>
    )
}