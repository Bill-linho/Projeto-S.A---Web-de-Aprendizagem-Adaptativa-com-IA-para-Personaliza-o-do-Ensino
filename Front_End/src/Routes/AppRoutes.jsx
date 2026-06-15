import Login from '../pages/Login.jsx';
import Cadastro from '../pages/Cadastro.jsx';
import Home from '../pages/Home.jsx'
import Chat from '../components/Chat/Chat.jsx'
import Profile from '../components/Profile/Profile.jsx'
import Layout from '../components/Layout/Layout.jsx'
import { Route, Routes} from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute.jsx';
import { Navigate } from 'react-router-dom'

export function RouterApp() {

  return (
    <>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Cadastro' element={<Cadastro />} />

        <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route path='/home' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/' element={<Navigate to="/home" replace />} />
        </Route>

        <Route path='*' element={<Login />} />
      </Routes>
    </>
  )
}
