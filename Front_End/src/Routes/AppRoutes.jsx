import Login from '../pages/Login.jsx';
import Cadastro from '../pages/Cadastro.jsx';
import Home from '../pages/Home.jsx'
import { Route, Routes} from 'react-router-dom';

export function RouterApp() {

  return (
    <>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Cadastro' element={<Cadastro />} />
        <Route path='/home' element={<Home />}/>
        <Route path='*' element={<Login />} />
      </Routes>
    </>
  )
}
