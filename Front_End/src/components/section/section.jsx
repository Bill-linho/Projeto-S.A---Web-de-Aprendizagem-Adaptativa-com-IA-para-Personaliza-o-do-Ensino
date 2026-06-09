import { useState } from 'react'
import '../style/section.css'

export default function Section() {
    const [chatMentor, setChatMentor] = useState(false)

    return (
        <>

            {chatMentor ? (
                <div className='section-two'>
                    <image>
                        <img src="https://imgs.search.brave.com/VjOZ84CTU5r1ski3xFkCeEHe1hQh1rGpiVK1mg35mgQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcy/LmxvdmVjZWxsLmNv/bS5ici9hY2FjZDI3/NmM1YWE3M2NiNjE3/OTUyZmZkNzE3ZDQy/ZjljY2VkZmMwNzRh/ZmQ3MGYwNWUyYTgy/NzNhMTU4ZmE0Lndl/YnA" alt="Esther egg" />
                    </image>
                    <div className='section-box2'>
                        <div className='section-box-two'>
                        <h1>CHAT REACT</h1>
                        </div>

                        <div className='section-chatBot'>
                           
                        </div>
                        <div className='section-input-two'>
                            <input type="text" placeholder='Digite aqui... ' />
                            <button>send</button>

                        </div>
                    </div>
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