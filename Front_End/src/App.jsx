import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header/header.jsx'

function App() {
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
export default App;
