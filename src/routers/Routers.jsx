import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/index.jsx';
import { Login } from '../pages/Login/index.jsx';
import { TodosProdutos }  from '../pages/Produtos/index.jsx';
import { Faq } from '../pages/Faq/index.jsx'
import { Carrinho } from "../pages/Carrinho";
import { Checkout } from "../pages/Checkout";
import { CartProvider } from "../context/CartContext";
import { GerenciarProdutos } from '../pages/GerenciarProduto/index.jsx';
import { Cadastro } from '../pages/Cadastro/index.jsx';

const PageError = () => {
  return (
    <div>
      <h1>Pagina nao encontrada</h1>
    </div>
  )
}

export const Routers = () => {

  return (
    <CartProvider>
      <Routes>
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/produtos' element={<TodosProdutos />} />
          <Route path='/admin' element={<GerenciarProdutos />} />
          <Route path='/faq' element={<Faq />} /> 
          <Route path='*' element={<PageError />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </CartProvider>
  )
}
