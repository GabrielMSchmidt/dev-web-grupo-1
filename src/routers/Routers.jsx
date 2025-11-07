import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/index.jsx';
import { Login } from '../pages/Login/index.jsx';
import { Produtos } from '../pages/Produtos/index.jsx';
import { Faq } from '../pages/Faq/index.jsx'

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
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/faq' element={<Faq />} />

        <Route path='*' element={<PageError />} />
    </Routes>
  )
}
