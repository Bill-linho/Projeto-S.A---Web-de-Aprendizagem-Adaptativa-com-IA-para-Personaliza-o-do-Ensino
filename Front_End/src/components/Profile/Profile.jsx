import { useEffect, useState } from 'react'
import { getProfile, updateProfile } from '../../services/chatService'
import '../../components/style/Profile.css'

//avatar
import AvatarDefault from '../../assets/Robô maneiro.png'
import Avatar2 from '../../assets/avatar2.png'
import Avatar3 from '../../assets/avatar3.png'
import Avatar4 from '../../assets/avatar4.png'
import Avatar5 from '../../assets/avatar5.png'
import Avatar6 from '../../assets/avatar6.png'
import Avatar7 from '../../assets/avatar7.png'
import Avatar8 from '../../assets/avatar8.png'

export default function Profile() {
  const [profile, setProfile] = useState({ nome: '', email: '', avatar: null })
  const [view, setView] = useState('view')

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

  useEffect(() => {
    getProfile().then((res) => {
      setProfile(res.data || {})
    }).catch(() => { })
  }, [])

  const handleSave = async () => {
    try {
      const res = await updateProfile(profile)

      setProfile(res.data)

      window.dispatchEvent(
        new Event('profileUpdated')
      )

      alert('Perfil atualizado')

    } catch (err) {
      console.error(err)
    }
  }
  
  return (
    <div className="profile-root">
      <div className="profile-page-header">

        <img
          className="profile-avatar"
          src={avatars[profile.avatar] || AvatarDefault}
          alt="Avatar"
        />

        <h2 id='avatar-nome'>{profile.nome}</h2>

        <p>
          {view === 'view'
            ? 'Visualize suas informações'
            : 'Edite suas informações'}
        </p>

      </div>
      <div className="profile-card">

        {
          view === 'view' ? (
            <div className="profile-details">
              <div className="profile-item">
                <span className="profile-label">
                  Nome
                </span>
                <strong className="profile-value">
                  {profile.nome || '-'}
                </strong>
              </div>
              <div className="profile-item">
                <span className="profile-label">
                  Email
                </span>
                <strong className="profile-value">
                  {profile.email || '-'}
                </strong>
              </div>
              <button
                className="edit-button"
                onClick={() => setView('edit')}
              >
                Editar perfil
              </button>
            </div>
          )
            : (
              <div className="profile-form">
                <div className="form-group">
                  <label>Nome</label>
                  <input
                    value={profile.nome || ''}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        nome: e.target.value
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    value={profile.email || ''}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        email: e.target.value
                      })
                    }
                  />
                </div>
                <div className='form-group'>
                  <label>Escolha seu avatar:</label>

                  <div className="avatar-grid">


                    {Object.entries(avatars).map(([id, img]) => (
                      <button
                        key={id}
                        type="button"
                        className={`avatar-option ${profile.avatar === Number(id)
                          ? 'selected'
                          : ''
                          }`}
                        onClick={() =>
                          setProfile(prev => ({
                            ...prev,
                            avatar: Number(id)
                          }))
                        }
                      >
                        <img src={img} alt={`Avatar ${id}`} />
                      </button>
                    ))}



                  </div>
                </div>
                <div className="profile-actions">
                  <button
                    className="cancel-button"
                    onClick={() => setView('view')}
                  >
                    Cancelar
                  </button>
                  <button
                    className="save-button"
                    onClick={async () => {
                      await handleSave()
                      setView('view')
                    }}
                  >
                    Salvar
                  </button>
                </div>
              </div>
            )
        }
      </div>
    </div>
  )
}
