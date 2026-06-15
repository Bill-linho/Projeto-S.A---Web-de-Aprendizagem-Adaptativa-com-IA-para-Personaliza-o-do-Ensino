import Aside from '../aside/aside'
import Header from '../Header/header.jsx'
import { Outlet } from 'react-router-dom'
import '../../components/style/main.css'

export default function Layout() {
  return (
    <div className="layout">
      <Aside />
      <div className="main-area">
        <Header />
        <div className='home-container'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
