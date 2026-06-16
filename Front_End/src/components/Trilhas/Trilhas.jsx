import '../style/Trilhas.css'
import Button from '../Button/Button'


export default function Trilhas() {
    return (
        <section>
            <div className='box-one'>
                <h1>Minha Trilha</h1>

            </div>

            <div className='box-two'>
                <h1>Mentorio IA</h1>
                <hr />
                <h2>Precisa de ajuda?</h2>


                <Button onClick={() => navigate('/chat')}>
                    Falar com a mentoria IA
                </Button>

            </div>
        </section>
    )
}