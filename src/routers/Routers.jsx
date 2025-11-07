import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/index.jsx';
import { Login } from '../pages/Login/index.jsx';
import { ListProdutos } from '../pages/Produtos/List/index.jsx';
import { CreateProduto } from '../pages/Produtos/Create/index.jsx';
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
        <Route path='/produtos' element={<ListProdutos />} />
        <Route path='/produtos/create' element={<CreateProduto />} />
        <Route path='/faq' element={<Faq />} />

        <Route path='*' element={<PageError />} />
    </Routes>
  )
}
