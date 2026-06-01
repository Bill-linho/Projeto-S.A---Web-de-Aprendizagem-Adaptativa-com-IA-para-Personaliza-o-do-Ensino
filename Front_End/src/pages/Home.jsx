import Aside from '../components/aside/aside'
import Section from '../components/section/section'
import Header from '../components/Header/header'
import '../components/style/home.css'


export default function homeApp() {
    return (
        <div className="layout">
            <Aside />

            <div className='home-container'>


            <Section></Section>

            </div>

        </div>
    )
}