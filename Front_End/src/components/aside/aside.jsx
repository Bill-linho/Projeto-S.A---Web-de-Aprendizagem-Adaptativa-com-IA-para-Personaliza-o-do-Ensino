import '../style/Aside.css'
import { Link } from 'react-router-dom'

export default function Aside() {

    return (
        <aside className="aside">

            <h1>Mentor <span className='span-color'>IA+</span></h1>

            <div className='lista-aside'>

                <Link to="/home"><button className='btns'>Inicio</button></Link>
                <button className='btns'>Minhas trilhas</button>
                <Link to="/chat"><button className='btns'>Mentor IA</button></Link>
                <Link to="/profile"><button className='btns'>Perfil</button></Link>

            </div>


        </aside>
    )
}