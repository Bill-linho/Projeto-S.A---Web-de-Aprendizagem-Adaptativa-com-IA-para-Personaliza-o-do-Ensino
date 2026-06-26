import '../style/Aside.css'
import { Link, replace } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProfile } from '../../services/chatService'
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

import AvatarDefault from '../../assets/Robô maneiro.png'
import Avatar2 from '../../assets/avatar2.png'
import Avatar3 from '../../assets/avatar3.png'
import Avatar4 from '../../assets/avatar4.png'
import Avatar5 from '../../assets/avatar5.png'
import Avatar6 from '../../assets/avatar6.png'
import Avatar7 from '../../assets/avatar7.png'
import Avatar8 from '../../assets/avatar8.png'

export default function Aside() {
    const [profile, setProfile] = useState({ avatar: null })
    const navigate = useNavigate()

    const avatars = {
        1: AvatarDefault,
        2: Avatar2,
        3: Avatar3,
        4: Avatar4,
        5: Avatar5,
        6: Avatar6,
        7: Avatar7,
        8: Avatar8,
    }

    const logout = () => {
        localStorage.removeItem('token')

        navigate('/login', { replace: true })
    }
    useEffect(() => {

        const loadProfile = async () => {
            try {
                const res = await getProfile()
                setProfile(res.data || {})
            } catch { }
        }

        loadProfile()

        window.addEventListener(
            'profileUpdated',
            loadProfile
        )

        return () =>
            window.removeEventListener(
                'profileUpdated',
                loadProfile
            )

    }, [])

    return (
        <aside className="aside">
            <button
                id="btn-left"
                onClick={logout}
            >
                <FaChevronLeft id="left" />
            </button>
            <div className="aside-top">

                <h1>
                    Mentor
                    <span className="span-color"> IA+</span>
                </h1>

                <Link to="/profile" className="aside-profile">

                    <img
                        className="aside-avatar"
                        src={avatars[profile.avatar] || AvatarDefault}
                        alt="Avatar"
                    />

                    <span>
                        {profile.nome || 'Perfil'}
                    </span>

                </Link>

            </div>

            <div className="lista-aside">

                <Link to="/home">
                    <button className="btns">
                        Inicio
                    </button>
                </Link>

                <Link to="/trilhas">
                    <button className="btns">
                        Minhas trilhas
                    </button>
                </Link>

                <Link to="/chat">
                    <button className="btns">
                        Mentor IA
                    </button>
                </Link>

                <Link to="/profile">
                    <button className="btns">
                        Perfil
                    </button>
                </Link>

            </div>

        </aside>
    )
}