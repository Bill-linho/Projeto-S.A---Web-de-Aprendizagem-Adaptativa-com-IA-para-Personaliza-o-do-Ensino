import { useState } from 'react'
import Chat from '../Chat/Chat.jsx'
import Button from '../Button/Button.jsx'
import { useNavigate } from 'react-router-dom'
import HelpMentorIA from '../cards/helpMentorIA/HelpMentorIA.jsx'

import '../style/section.css'

export default function Section() {
    const navigate = useNavigate()
    return (
        <>
            <section>

                <div className='box-one'>
                    <h1>Estudos</h1>

                </div>

                <div className='box-two'>

                    <HelpMentorIA />

                </div>

            </section>
        </>
    )
}