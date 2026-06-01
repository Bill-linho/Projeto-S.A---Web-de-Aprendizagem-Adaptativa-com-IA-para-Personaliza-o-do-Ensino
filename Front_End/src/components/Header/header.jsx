import '../style/header.css'
import LogoDoLogo from '../Logo/roboManeiro.jsx'
import { useNavigate } from 'react-router-dom'

export default function Header() {
      const navigate = useNavigate()
    return (
        <header className="header">
            <div className="header-content">    
                <LogoDoLogo />
                <h1>Mentor IA+</h1>
            </div>
        </header>
    )
}