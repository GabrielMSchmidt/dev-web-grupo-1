
import React, { useState, useEffect } from 'react';

import { ProdutoModal } from '../../components/ProdutoModal/index';
import { Container, Header, Title, ProductListSection, NewProductButton, Table, TableHead, TableRow, TableCell, ActionButton, ImagePreview, Notification } from './Style'; // Estilos importados

import { api } from '../../utils/Api'; 
import { Navbar } from '../../components/Navbar';


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
            
            setProdutos(prev => prev.filter(p => p.id !== produtoId));
            return { success: true, message: 'Produto removido com sucesso!' };
        } catch (err) {
            console.error('Erro ao remover produto:', err);
            return { success: false, message: 'Erro ao remover produto. Tente novamente.' };
        }
    };

    return { produtos, loading, error, fetchProdutos, handleDelete, setProdutos };
}

export const GerenciarProdutos = () => {
    const navigate = useNavigate();
    const { produtos, loading, error, handleDelete, setProdutos } = useProductManagement();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduto, setSelectedProduto] = useState(null); 
    const [notification, setNotification] = useState(null);

 
    const handleEditClick = (produto) => {
        setSelectedProduto(produto);
        setModalOpen(true);
    };


    const handleNewProductClick = () => {
        setSelectedProduto(null);
        setModalOpen(true);
    };

   
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
                                <TableCell>Imagem</TableCell>
                                <TableCell>Nome</TableCell>
                                <TableCell>Preço</TableCell>
                                <TableCell>Estoque</TableCell>
                                <TableCell>Ações</TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            {produtos.map((produto) => (
                                <TableRow key={produto.id}>
                                    <TableCell><ImagePreview src={produto.imagem} alt={produto.nome} /></TableCell>
                                    <TableCell>{produto.nome}</TableCell>
                                    <TableCell>{`R$ ${produto.preco.toFixed(2).replace('.', ',')}`}</TableCell>
                                    <TableCell>{`${produto.estoque} un.`}</TableCell>
                                    <TableCell actions>
                                        <ActionButton onClick={() => handleEditClick(produto)} edit>✏️</ActionButton>
                                        <ActionButton onClick={() => handleRemoveProduct(produto.id)} remove>🗑️</ActionButton>
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
    );
};