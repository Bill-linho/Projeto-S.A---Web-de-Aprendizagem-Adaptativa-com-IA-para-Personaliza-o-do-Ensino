import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';
import { Route, Routes} from 'react-router-dom';
import Header from '../src/components/Header/header.jsx'

function App() {
  return (
    <>
      <Login/>
 
      <Cadastro/> 
    </>
  )
}
export default App
