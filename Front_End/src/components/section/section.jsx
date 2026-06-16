import { useState } from 'react'
import Chat from '../Chat/Chat.jsx'
import Button from '../Button/Button.jsx'
import { useNavigate } from 'react-router-dom'
import '../style/section.css'

export default function Section() {
    const navigate = useNavigate()
    return (
        <>
                <section>

                    <div className='box-one'>
                        <h1>Estudos</h1>

                    </div>

                    <div className='box-two'>
                        <h1>Mentorio IA</h1>
                        <hr />
                        <h2>Precisa de ajuda?</h2>


                        <Button onClick={() =>navigate('/chat')}>
                            Falar com a mentoria IA
                        </Button>

                    </div>

                </section>
        </>
    )
}