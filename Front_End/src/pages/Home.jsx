import { useState } from 'react'
import Aside from '../components/aside/aside'
import Section from '../components/section/section'
import Header from '../components/Header/header.jsx'
import '../components/style/home.css'


export default function homeApp() {
    const [view, setView] = useState('home')

    return (
        <div className="layout">
            <Aside setView={setView} />
            <Header />

            <div className='home-container'>
                <Section view={view} setView={setView} />

            </div>


        </div>
    )
}