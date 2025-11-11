
import React, { useState, useEffect } from 'react';
import { api } from '../../utils/Api';
import Imagem from '../../Assets/produtc_placeholder.jpg';
import { ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    InputGroup, 
    Label, 
    Input, 
    TextArea, 
    CloseButton, 
    SubmitButton, 
    CancelButton, 
    ErrorMessage} from './Style';

export const ProdutoModal = ({ isOpen, onClose, produto, onSubmit }) => {
    
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        preco: '',
        idCategoria: '',
        quantidadeEstoque: '',
    });
    const [foto, setFoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        if (produto) {
            setFormData({
                nome: produto.nome || '',
                descricao: produto.descricao || '',
                preco: produto.preco || '',
                idCategoria: produto.categoria?.id || '',
                quantidadeEstoque: produto.quantidadeEstoque || '',
            });
        } else {
            setFormData({
                nome: '',
                descricao: '',
                preco: '',
                idCategoria: '',
                quantidadeEstoque: '',
            });
        }
        setFoto(null);
        setError(null);
    }, [produto, isOpen]); 

    const isEdit = !!produto;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFoto(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (isEdit) {
                // 1. Atualizar dados do produto
                const produtoData = {
                    nome: formData.nome,
                    descricao: formData.descricao,
                    preco: parseFloat(formData.preco),
                    idCategoria: parseInt(formData.idCategoria),
                    quantidadeEstoque: parseInt(formData.quantidadeEstoque),
                };
                
                await api.put(`/produtos/${produto.id}`, produtoData);

                // 2. Se usuário selecionou nova foto, atualizar foto separadamente
                if (foto) {
                    const fotoFormData = new FormData();
                    fotoFormData.append('foto', foto);
                    await api.put(`/produtos/${produto.id}/foto`, fotoFormData);
                }

                onSubmit();
            } else {
                // Criar produto
                const formDataToSend = new FormData();
                
                const produtoBlob = new Blob([JSON.stringify({
                    nome: formData.nome,
                    descricao: formData.descricao,
                    preco: parseFloat(formData.preco),
                    idCategoria: parseInt(formData.idCategoria),
                    quantidadeEstoque: parseInt(formData.quantidadeEstoque),
                })], { type: 'application/json' });
                
                formDataToSend.append('produto', produtoBlob);

                if (foto) {
                    formDataToSend.append('foto', foto);
                } else {
                    const response = await fetch(Imagem);
                    const blob = await response.blob();
                    const defaultFile = new File([blob], 'produto-padrao.jpg', { type: 'image/jpeg' });
                    formDataToSend.append('foto', defaultFile);
                }

                await api.post('/produtos', formDataToSend);
                onSubmit();
            }
        } catch (err) {
            console.error('Erro ao salvar produto:', err);
            setError(`Erro ao ${isEdit ? 'atualizar' : 'criar'} produto. Verifique os dados e tente novamente.`);
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

                        <InputGroup>
                            <Label htmlFor="preco">Preço:</Label>
                            <Input 
                                id="preco" 
                                name="preco" 
                                type="number" 
                                step="0.01"
                                min="0"
                                value={formData.preco} 
                                onChange={handleChange} 
                                required 
                            />
                        </InputGroup>

                        <InputGroup>
                            <Label htmlFor="idCategoria">ID da Categoria:</Label>
                            <Input 
                                id="idCategoria" 
                                name="idCategoria" 
                                type="number"
                                min="1"
                                value={formData.idCategoria} 
                                onChange={handleChange} 
                                required 
                            />
                        </InputGroup>

                        <InputGroup>
                            <Label htmlFor="quantidadeEstoque">Quantidade em Estoque:</Label>
                            <Input 
                                id="quantidadeEstoque" 
                                name="quantidadeEstoque" 
                                type="number"
                                min="0"
                                value={formData.quantidadeEstoque} 
                                onChange={handleChange} 
                                required 
                            />
                        </InputGroup>

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
                            <Label htmlFor="foto">
                                {isEdit ? 'Atualizar Foto (opcional):' : 'Upload de Foto (opcional):'}
                            </Label>
                            <Input 
                                id="foto" 
                                name="foto" 
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            {isEdit && !foto && (
                                <small style={{ color: '#666', fontSize: '12px', marginTop: '5px' }}>
                                    Deixe em branco para manter a foto atual
                                </small>
                            )}
                            {!isEdit && !foto && (
                                <small style={{ color: '#666', fontSize: '12px', marginTop: '5px' }}>
                                    Se não enviar foto, será usada uma imagem padrão
                                </small>
                            )}
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