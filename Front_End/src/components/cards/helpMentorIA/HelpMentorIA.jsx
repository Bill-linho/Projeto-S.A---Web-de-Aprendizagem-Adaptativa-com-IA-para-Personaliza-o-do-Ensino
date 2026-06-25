import '../../style/helpMentorIA.css'
import Button from '../../Button/Button.jsx'
import { useNavigate } from 'react-router-dom'

export default function HelpMentorIA() {
    const navigate = useNavigate()

    return (
        <section className='helping'>
            <h1>Mentorio IA</h1>
            <hr />
            <h2>Precisa de ajuda?</h2>
            <div className='help-btn'>
                
                <Button onClick={() => navigate('/chat')}>
                    Falar com a mentoria IA
                </Button>
            </div>
        </section>
    )
}