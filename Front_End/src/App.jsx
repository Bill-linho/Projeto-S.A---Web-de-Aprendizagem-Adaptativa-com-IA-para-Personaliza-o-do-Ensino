import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
      
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Cadastro' element={<Cadastro />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </>
  )
}
export default App;
