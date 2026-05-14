import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';
import { Route, Routes} from 'react-router-dom';
import Header from '../src/components/Header/header.jsx'
import './components/style/App.css'

function App() {
  return (
    <>
      <Header />
      <div className='hero'>

      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Cadastro' element={<Cadastro />} />
        <Route path='*' element={<Login />} />
      </Routes>
      </div>
    </>
  )
}
export default App;
