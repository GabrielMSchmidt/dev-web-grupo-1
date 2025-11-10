
import React, { useState, useEffect } from 'react';
import { ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, InputGroup, Label, Input, TextArea, CloseButton, SubmitButton, CancelButton, ErrorMessage, Notification } from './Style'; // Estilos importados



export const ProdutoModal = ({ isOpen, onClose, produto, onSubmit }) => {
    
    const [formData, setFormData] = useState({
        nome: '',
        preco: 0,
        estoque: 0,
        descricao: '',
        especificacoes: '',
        urlImagem: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        if (produto) {
            setFormData({
                id: produto.id,
                nome: produto.nome || '',
                preco: produto.preco || 0,
                estoque: produto.estoque || 0,
                descricao: 'Descrição do produto...',
                especificacoes: 'Intel Core i7\n16GB RAM\nSSD 512GB', 
                urlImagem: produto.urlImagem || '',
            });
        } else {
             
             setFormData({
                nome: '',
                preco: 0,
                estoque: 0,
                descricao: '',
                especificacoes: '',
                urlImagem: '',
            });
        }
        setError(null);
    }, [produto, isOpen]); 

    const isEdit = !!produto;

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'number' ? parseFloat(value) : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {

            console.log('Simulando envio de dados:', formData);
            await new Promise(resolve => setTimeout(resolve, 800)); 
            
        
            onSubmit(formData); 
        } catch (err) {
            console.error('Erro ao salvar produto:', err);
            setError(`Erro ao ${isEdit ? 'atualizar' : 'criar'} produto. Tente novamente.`);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <ModalOverlay>
            <ModalContent onClick={e => e.stopPropagation()}>
                <ModalHeader>
                    <h3>{isEdit ? 'Editar Produto' : 'Criar Novo Produto'}</h3>
                    <p>{isEdit ? 'Atualize as informações do produto' : 'Insira as informações do novo produto'}</p>
                    <CloseButton onClick={onClose}>&times;</CloseButton>
                </ModalHeader>
                <form onSubmit={handleSubmit}>
                    <ModalBody>
                        {error && <ErrorMessage>{error}</ErrorMessage>}

                        <InputGroup>
                            <Label htmlFor="nome">Nome do Produto</Label>
                            <Input 
                                id="nome" 
                                name="nome" 
                                value={formData.nome} 
                                onChange={handleChange} 
                                required 
                            />
                        </InputGroup>

                        <div style={{ display: 'flex', gap: '20px' }}>
                            <InputGroup flex>
                                <Label htmlFor="preco">Preço (R$)</Label>
                                <Input 
                                    id="preco" 
                                    name="preco" 
                                    type="number" 
                                    step="0.01"
                                    value={formData.preco} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </InputGroup>
                            <InputGroup flex>
                                <Label htmlFor="estoque">Estoque</Label>
                                <Input 
                                    id="estoque" 
                                    name="estoque" 
                                    type="number"
                                    value={formData.estoque} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </InputGroup>
                        </div>

                        <InputGroup>
                            <Label htmlFor="descricao">Descrição</Label>
                            <TextArea 
                                id="descricao" 
                                name="descricao" 
                                value={formData.descricao} 
                                onChange={handleChange} 
                                placeholder="Descreva o produto..."
                            />
                        </InputGroup>

                        <InputGroup>
                            <Label htmlFor="especificacoes">Especificações (uma por linha)</Label>
                            <TextArea 
                                id="especificacoes" 
                                name="especificacoes" 
                                value={formData.especificacoes} 
                                onChange={handleChange} 
                                rows="4"
                            />
                        </InputGroup>
                        
                        <InputGroup>
                            <Label htmlFor="urlImagem">URL da Imagem</Label>
                            <Input 
                                id="urlImagem" 
                                name="urlImagem" 
                                value={formData.urlImagem} 
                                onChange={handleChange} 
                                required
                            />
                        </InputGroup>

                    </ModalBody>
                    <ModalFooter>
                        <CancelButton type="button" onClick={onClose} disabled={loading}>
                            Cancelar
                        </CancelButton>
                        <SubmitButton type="submit" disabled={loading}>
                            {loading ? 'Salvando...' : (isEdit ? 'Salvar Alterações' : 'Criar Produto')}
                        </SubmitButton>
                    </ModalFooter>
                </form>
            </ModalContent>
        </ModalOverlay>
    );
};