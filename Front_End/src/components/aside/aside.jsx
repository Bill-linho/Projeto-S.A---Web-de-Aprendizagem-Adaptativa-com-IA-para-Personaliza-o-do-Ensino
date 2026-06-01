import '../style/Aside.css'

export default function Aside() {

    return (
        <aside className="aside">

            <h1>Mentor <span className='span-color'>IA+</span></h1>

            <div className='lista-aside'>

                <button className='btns'>Inicio</button>
                <button className='btns'>Minhas trilhas</button>
                <button className='btns'>Mentor IA</button>
                <button className='btns'>Perfil</button>

            </div>


        </aside>
    )
}