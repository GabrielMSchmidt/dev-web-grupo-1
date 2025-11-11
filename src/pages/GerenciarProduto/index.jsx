
import React, { useState, useEffect } from 'react';

import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import { ProdutoModal } from '../../components/ProdutoModal/index';
<<<<<<< HEAD
import { Container, 
    Header, 
    Title, 
    ProductListSection, 
    NewProductButton, 
    Table, 
    TableHead, 
    TableRow, 
    TableCell, 
    ActionButton, 
    ImagePreview, 
    Notification } from './Style';
=======
import { Container, Header, Title, ProductListSection, NewProductButton, Table, TableHead, TableRow, TableCell, ActionButton, ImagePreview, Notification } from './Style'; // Estilos importados
>>>>>>> c5dffb400466cf9d78fde7a7cab93d6923761549

import { api } from '../../utils/Api'; 
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer/Index';

<<<<<<< HEAD
const useProductManagement = () => {
    const [produtos, setProdutos] = useState([]);
    const [error, setError] = useState(null);

    const fetchProdutos = async () => {
        try {
            setError(null);
            const data = await api.get('/produtos');
            setProdutos(data);
        } catch (err) {
            console.error('Erro ao carregar produtos:', err);
            setError('Erro ao carregar produtos da API.');
        }
    };

    const handleDelete = async (produtoId) => {
        try {
            await api.delete(`/produtos/${produtoId}`);
=======
const initialProductsMock = [
    { id: '1', imagem: '/assets/notebook.jpg', nome: 'Notebook Gamer RGB Pro 15.6"', preco: 4599.99, estoque: 15, urlImagem: '/assets/notebook.jpg' },
    { id: '2', imagem: '/assets/smartphone.jpg', nome: 'Smartphone Pro Max 256GB', preco: 3299.99, estoque: 28, urlImagem: '/assets/smartphone.jpg' },
    { id: '3', imagem: '/assets/teclado.jpg', nome: 'Teclado Mecânico RGB Pro', preco: 599.99, estoque: 42, urlImagem: '/assets/teclado.jpg' },
];




const useProductManagement = () => {
    const [produtos, setProdutos] = useState(initialProductsMock);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  
    const fetchProdutos = async () => {
        setLoading(true);
        
        await new Promise(resolve => setTimeout(resolve, 500)); 
        setProdutos(initialProductsMock); 
        setLoading(false);
    };

    
    const handleDelete = async (produtoId) => {
        try {
            
            console.log(`Simulando exclusão do produto: ${produtoId}`);
            
>>>>>>> c5dffb400466cf9d78fde7a7cab93d6923761549
            setProdutos(prev => prev.filter(p => p.id !== produtoId));
            return { success: true, message: 'Produto removido com sucesso!' };
        } catch (err) {
            console.error('Erro ao remover produto:', err);
            return { success: false, message: 'Erro ao remover produto. Tente novamente.' };
        }
    };

<<<<<<< HEAD
    return { produtos, error, fetchProdutos, handleDelete };
}

export const GerenciarProdutos = () => {
    const { produtos, error, fetchProdutos, handleDelete } = useProductManagement();
=======
    return { produtos, loading, error, fetchProdutos, handleDelete, setProdutos };
}

export const GerenciarProdutos = () => {
    // const navigate = useNavigate();
    const { produtos, loading, error, handleDelete, setProdutos } = useProductManagement();
>>>>>>> c5dffb400466cf9d78fde7a7cab93d6923761549
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduto, setSelectedProduto] = useState(null); 
    const [notification, setNotification] = useState(null);

<<<<<<< HEAD
    useEffect(() => {
        fetchProdutos();
    }, []);

=======
 
>>>>>>> c5dffb400466cf9d78fde7a7cab93d6923761549
    const handleEditClick = (produto) => {
        setSelectedProduto(produto);
        setModalOpen(true);
    };

<<<<<<< HEAD
=======

>>>>>>> c5dffb400466cf9d78fde7a7cab93d6923761549
    const handleNewProductClick = () => {
        setSelectedProduto(null);
        setModalOpen(true);
    };

<<<<<<< HEAD
    const handleModalSubmit = async () => {
        await fetchProdutos();
        setModalOpen(false);
        
        const message = selectedProduto 
            ? 'Produto atualizado com sucesso!' 
            : 'Produto criado com sucesso!';
        
        setNotification({ message, type: 'success' });
        setTimeout(() => setNotification(null), 3000);
    };

=======
   
    const handleModalSubmit = (updatedProduto) => {
       
        console.log('Dados do modal submetidos:', updatedProduto);
        
      
        if (updatedProduto.id) {
           
            setProdutos(prev => prev.map(p => p.id === updatedProduto.id ? updatedProduto : p));
            setNotification({ message: 'Produto atualizado com sucesso!', type: 'success' });
        } else {
          
            const newId = Date.now().toString();
            setProdutos(prev => [...prev, { ...updatedProduto, id: newId }]);
            setNotification({ message: 'Produto criado com sucesso!', type: 'success' });
        }
        setModalOpen(false);
        setTimeout(() => setNotification(null), 3000);
    };

   
>>>>>>> c5dffb400466cf9d78fde7a7cab93d6923761549
    const handleRemoveProduct = async (id) => {
        if (window.confirm('Tem certeza que deseja remover este produto?')) {
            const result = await handleDelete(id);
            
            setNotification({ 
                message: result.message, 
                type: result.success ? 'success' : 'error' 
            });

            setTimeout(() => setNotification(null), 3000);
        }
    };

    return (
<<<<<<< HEAD
        <>
            <Container>
                <Navbar />
                <Header>
                    <Title>Gerenciar Produtos</Title>
                    <p>Adicione, edite ou remova produtos do catálogo</p>
                </Header>
                <ProductListSection>
                    <h3>Lista de Produtos</h3>
                    <p>Gerencie todos os produtos da loja</p>
                    <NewProductButton onClick={handleNewProductClick}>
                        + Novo Produto
                    </NewProductButton>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
            
                    {!error && produtos.length === 0 && (
                        <p>Nenhum produto encontrado.</p>
                    )}
            
                    {produtos.length > 0 && (
                        <Table>
                            <TableHead>
                                <TableRow isHeader>
                                    <TableCell>Nome</TableCell>
                                    <TableCell>Preço</TableCell>
                                    <TableCell>Estoque</TableCell>
                                    <TableCell>Ações</TableCell>
                                </TableRow>
                            </TableHead>
                            <tbody>
                                {produtos.map((produto) => (
                                    <TableRow key={produto.id}>
                                        <TableCell>{produto.nome}</TableCell>
                                        <TableCell>{`R$ ${produto.preco.toFixed(2).replace('.', ',')}`}</TableCell>
                                        <TableCell>{`${produto.quantidadeEstoque || 0} un.`}</TableCell>
                                        <TableCell $actions>
                                            <ActionButton onClick={() => handleEditClick(produto)} $edit><FaPencilAlt /></ActionButton>
                                            <ActionButton onClick={() => handleRemoveProduct(produto.id)} $remove><FaTrashAlt /></ActionButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </ProductListSection>
            
            
                <ProdutoModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    produto={selectedProduto}
                    onSubmit={handleModalSubmit}
                />
                {notification && (
                    <Notification type={notification.type}>
                        {notification.message}
                    </Notification>
                )}
            
            </Container>
            <Footer />
        </>
=======
        <Container>
            <Navbar />
            <Header>
                <Title>Gerenciar Produtos</Title>
                <p>Adicione, edite ou remova produtos do catálogo</p>
            </Header>

            <ProductListSection>
                <h3>Lista de Produtos</h3>
                <p>Gerencie todos os produtos da loja</p>
                <NewProductButton onClick={handleNewProductClick}>
                    + Novo Produto
                </NewProductButton>

                {loading && <p>Carregando produtos...</p>}
                {error && <p style={{ color: 'red' }}>Erro ao carregar produtos: {error}</p>}
                
                {!loading && produtos.length > 0 && (
                    <Table>
                        <TableHead>
                            <TableRow isHeader>
                                <TableCell>Nome</TableCell>
                                <TableCell>Preço</TableCell>
                                <TableCell>Estoque</TableCell>
                                <TableCell>Ações</TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            {produtos.map((produto) => (
                                <TableRow key={produto.id}>
                                    <TableCell>{produto.nome}</TableCell>
                                    <TableCell>{`R$ ${produto.preco.toFixed(2).replace('.', ',')}`}</TableCell>
                                    <TableCell>{`${produto.estoque} un.`}</TableCell>
                                    <TableCell actions>
                                        <ActionButton onClick={() => handleEditClick(produto)} edit><FaPencilAlt /></ActionButton>
                                        <ActionButton onClick={() => handleRemoveProduct(produto.id)} remove><FaTrashAlt /></ActionButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </tbody>
                    </Table>
                )}
            </ProductListSection>
            
           
            <ProdutoModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                produto={selectedProduto} 
                onSubmit={handleModalSubmit}
            />


            {notification && (
                <Notification type={notification.type}>
                    {notification.message}
                </Notification>
            )}

        <Footer />
        </Container>
>>>>>>> c5dffb400466cf9d78fde7a7cab93d6923761549
    );
};