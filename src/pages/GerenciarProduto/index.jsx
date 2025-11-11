
import React, { useState, useEffect } from 'react';

import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import { ProdutoModal } from '../../components/ProdutoModal/index';
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

import { api } from '../../utils/Api'; 
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer/Index';

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
            setProdutos(prev => prev.filter(p => p.id !== produtoId));
            return { success: true, message: 'Produto removido com sucesso!' };
        } catch (err) {
            console.error('Erro ao remover produto:', err);
            return { success: false, message: 'Erro ao remover produto. Tente novamente.' };
        }
    };

    return { produtos, error, fetchProdutos, handleDelete };
}

export const GerenciarProdutos = () => {
    const { produtos, error, fetchProdutos, handleDelete } = useProductManagement();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduto, setSelectedProduto] = useState(null); 
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        fetchProdutos();
    }, []);

    const handleEditClick = (produto) => {
        setSelectedProduto(produto);
        setModalOpen(true);
    };

    const handleNewProductClick = () => {
        setSelectedProduto(null);
        setModalOpen(true);
    };

    const handleModalSubmit = async () => {
        await fetchProdutos();
        setModalOpen(false);
        
        const message = selectedProduto 
            ? 'Produto atualizado com sucesso!' 
            : 'Produto criado com sucesso!';
        
        setNotification({ message, type: 'success' });
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
    
            <Footer />
        </Container>
    );
};