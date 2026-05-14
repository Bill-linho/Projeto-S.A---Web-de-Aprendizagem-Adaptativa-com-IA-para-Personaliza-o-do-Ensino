import Login from '../pages/Login.jsx';
import Cadastro from '../pages/Cadastro.jsx';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from '../components/Header/header.jsx'

export function RouterApp() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Cadastro' element={<Cadastro />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </>
  )
}
