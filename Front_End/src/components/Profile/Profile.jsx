import { useEffect, useState } from 'react'
import { getProfile, updateProfile } from '../../services/chatService'
import AvatarDefault from '../../assets/Robô maneiro.png'
import '../../components/style/Profile.css'

export default function Profile() {
  const [profile, setProfile] = useState({ nome: '', email: '' })

  useEffect(() => {
    getProfile().then((res) => {
      setProfile(res.data || {})
    }).catch(() => {})
  }, [])

  const handleSave = async () => {
    try {
      await updateProfile(profile)
      alert('Perfil atualizado')
    } catch (err) {
      console.error(err)
      alert('Erro ao atualizar perfil')
    }
  }

  return (
    <div className="profile-root">
      <h2>Meu Perfil</h2>
      <div className="profile-top">
        <img className="profile-avatar" src={profile.avatar || AvatarDefault} alt="avatar" />
        <div className="profile-info">
          <div className="profile-form">
            <label>Nome</label>
            <input value={profile.nome || ''} onChange={(e) => setProfile({ ...profile, nome: e.target.value })} />

            <label>Email</label>
            <input value={profile.email || ''} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />

            <button onClick={handleSave}>Salvar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
