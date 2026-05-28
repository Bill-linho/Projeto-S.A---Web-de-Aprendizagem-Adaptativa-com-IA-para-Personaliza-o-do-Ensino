import { useNavigate } from 'react-router-dom'
import '../style/header.css'

export default function Header() {
      const navigate = useNavigate()
    return (
        <header className="header">
            <div className="header-content">
              
                <button className='header-button' onClick={() => { navigate(-1) }} >
                    Voltar
                </button>
            </div>
        </header>
    )
}