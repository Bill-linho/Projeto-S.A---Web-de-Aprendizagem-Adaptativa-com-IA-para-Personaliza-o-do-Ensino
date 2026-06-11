import '../style/section.css'
import logo from '../../assets/Robô maneiro sem fundo.png'
import { useEffect, useState } from 'react'

export default function Section({ view, setView }) {

    const [adId, setAdId] = useState(null)

    useEffect(() => {
        const interval = setInterval(() => {
            const n = Math.floor(Math.random() * 9) + 1
            console.log('Sorteio (1-9):', n)
            if (n === 5) {
                const pick = Math.floor(Math.random() * 3) + 1
                console.log('Sorteio do anúncio (1-3):', pick)
                setAdId(pick)
            }
        }, 30000) // 30s

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            {view === 'perfil' ? (
                <div className='profile'>
                    <div className='profile-card'>
                        <div className='profile-avatar'>
                            <img src={logo} alt='avatar' />
                        </div>
                        <div className='profile-info'>
                            <h2>Nome</h2>
                            <h2>email</h2>
                            
                            <div className='profile-actions'>
                                <button onClick={() => setView && setView('home')}>Voltar</button>
                                <button>Editar perfil</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : view === 'chat' ? (
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


                        <button onClick={() => setView && setView('chat')}>
                            Falar com a mentoria IA
                        </button>

                    </div>

                </section>

            )}

            {adId != null && (
                <div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.5)', zIndex: 9999 }}>
                    <div style={{ background: '#fff', padding: 20, borderRadius: 8, maxWidth: 550, textAlign: 'center' }}>
                        {adId === 1 && (
                            <>
                                <h2>Novinho forte e sarado</h2>
                                <img src="https://avatars.githubusercontent.com/u/212985724?v=4" alt="imagem do gitHub" />
                                <p>Ele está perto de você, aproveite!!!</p>
                                <button style={{ marginTop: 8 }}>LIGUE AGORA</button>
                            </>
                        )}

                        {adId === 2 && (
                            <>
                                <h2>Album da copa por apenas R$: 8,99</h2>
                                <img src="https://imgs.search.brave.com/DWQz0wcBM_xn5CQugH8_RnzpL0c3jiRNU0WBlunF8pE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvZ3Vp/YS1kZS1jb21wcmFz/L2M2LzIwMjYvMDQv/MDkvY29uZmlyYS1v/cy10aXBvcy1lLXBy/ZWNvcy1kb3MtYWxi/dW5zLWRhLWNvcGEt/ZG8tbXVuZG8tMjAy/Ni0xNzc1NzUyOTg0/ODU1X3YyXzMwMHgy/MjUucG5nLndlYnA" alt="imagem do album da copa 2026" />
                                <p>LIGUE AGORA PARA O NÚMERO 48 9180 0632.</p>
                                <button style={{ marginTop: 8 }}>!!!LIGAR!!!</button>
                            </>
                        )}

                        {adId === 3 && (
                            <>
                                <h2>BAIXE AGORA</h2>
                                <img src="https://imgs.search.brave.com/YY6h0vzsgePD1rwpCQGiuUFDO-PsJIyMKRvWwXVgD_8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zMi5n/bGJpbWcuY29tL19u/WkJYUnNxa1UzeWNa/aXc4cThFcEVRUFVs/bz0vNjAweDAvZmls/dGVyczpxdWFsaXR5/KDcwKS9pLnMzLmds/YmltZy5jb20vdjEv/QVVUSF8wOGZiZjQ4/YmMwNTI0ODc3OTQz/ZmU4NmU0MzA4N2U3/YS9pbnRlcm5hbF9w/aG90b3MvYnMvMjAy/Mi9hL3kvblZqVmtC/UXU2Z3cyUXh2WjJt/NGcvMjAxMS0xMi0w/NS10dXgtbGludXgt/d2FsbHBhcGVycy1m/cmVlLWRlc2t0b3At/d2l0aC10aGUtcGVu/Z3Vpbi13YWxscGFw/ZXItMTAyNHg3Njgu/anBn" alt="Imagem da logo do LINUX" />
                                <p>BAIXE O LINUX, É BEM MELHOR QUE ESSE W11 QUE VOCÊ USA.</p>
                                <button style={{ marginTop: 8 }}>BAIXAR LINUX.APK</button>
                            </>
                        )}

                        <div style={{ marginTop: 12 }}>
                            <button onClick={() => setAdId(null)} style={{ marginRight: 8 }}>Fechar</button>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}