import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/index.jsx';
import { Login } from '../pages/Login/index.jsx';

const PageError = () => {
  return (
    <div>
      <h1>Pagina nao encontrada</h1>
    </div>
  )
}

export const Routers = () => {

  return (
    <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route path='*' element={<PageError />} />
    </Routes>
  )
}
