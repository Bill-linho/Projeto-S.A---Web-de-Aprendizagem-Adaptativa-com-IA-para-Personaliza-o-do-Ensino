import '../style/Aside.css'

export default function Aside({ setView }) {

    return (
        <aside className="aside">

            <h1>Mentor <span className='span-color'>IA+</span></h1>

            <div className='lista-aside'>

                <button className='btns' onClick={() => setView && setView('home')}>Inicio</button>
                <button className='btns' onClick={() => setView && setView('trilhas')}>Minhas trilhas</button>
                <button className='btns' onClick={() => setView && setView('chat')}>Mentor IA</button>
                <button className='btns' onClick={() => setView && setView('perfil')}>Perfil</button>

            </div>


        </aside>
    )
}