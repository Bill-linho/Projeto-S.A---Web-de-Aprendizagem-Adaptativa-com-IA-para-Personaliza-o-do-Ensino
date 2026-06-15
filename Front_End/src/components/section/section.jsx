import { useState } from 'react'
import Chat from '../Chat/Chat.jsx'
import '../style/section.css'

export default function Section() {
    const [chatMentor, setChatMentor] = useState(false)

    return (
        <>

            {chatMentor ? (
                <div className='section-two'>
                    <Chat />
                </div>
            ) : (
                <section>

                    <div className='box-one'>
                        <h1>Estudos</h1>

                    </div>

                    <div className='box-two'>
                        <h1>Mentorio IA</h1>
                        <hr />
                        <h2>Precisa de ajuda?</h2>


                        <button onClick={() => setChatMentor(!chatMentor)}>
                            Falar com a mentoria IA
                        </button>

                    </div>

                </section>

            )};
        </>
    )
}