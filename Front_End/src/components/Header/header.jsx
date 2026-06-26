import '../style/header.css'
import LogoDoLogo from '../Logo/roboManeiro.jsx'
import { useNavigate } from 'react-router-dom'

export default function Header() {
      const navigate = useNavigate()
    return (
        <header className="header-content">
            
                <LogoDoLogo height='125px' />
                <h1>Mentor IA+</h1>
            
        </header>
    )
}