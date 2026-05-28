import '../style/header.css'
import LogoDoLogo from '../Logo/roboManeiro.jsx'

export default function Header() {
    return (
        <header className="header">
            <div className="header-content">    
                <LogoDoLogo />
                <h1>Mentor IA+</h1>
            </div>
        </header>
    )
}