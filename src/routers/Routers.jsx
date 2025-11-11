import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/index.jsx';
import { Login } from '../pages/Login/index.jsx';
import { ListProdutos } from '../pages/Produtos/List/index.jsx';
import { CreateProduto } from '../pages/Produtos/Create/index.jsx';
import { Faq } from '../pages/Faq/index.jsx'
<<<<<<< Updated upstream
=======
import { Carrinho } from "../pages/Carrinho";
import { Checkout } from "../pages/Checkout";
import { CartProvider } from "../context/CartContext";
import { GerenciarProdutos } from '../pages/GerenciarProduto/index.jsx';
import { Cadastro } from '../pages/Cadastro/index.jsx';

>>>>>>> Stashed changes

const PageError = () => {
  return (
    <div>
      <h1>Pagina nao encontrada</h1>
    </div>
  )
}

export const Routers = () => {

  return (
<<<<<<< Updated upstream
    <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/produtos' element={<ListProdutos />} />
        <Route path='/produtos/create' element={<CreateProduto />} />
        <Route path='/faq' element={<Faq />} />
=======
    <CartProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/produtos' element={<Produtos />} />
          <Route path='/produtos/novo' element={<CreateProduto />} />
          <Route path='/produtos/:id/editar' element={<EditProduto />} />
          <Route path='/admin' element={<GerenciarProdutos />} />
          <Route path='/faq' element={<Faq />} /> 
>>>>>>> Stashed changes

        <Route path='*' element={<PageError />} />
    </Routes>
  )
}
