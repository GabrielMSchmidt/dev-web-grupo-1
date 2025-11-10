import { useState } from 'react';
import { 
  Fab, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  TextField, 
  CircularProgress,
  IconButton
} from '@mui/material';
import { FaRobot } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { api } from '../../utils/Api';
import { Button } from '../Button';
import {
  ChatButton,
  ModalHeader,
  HeaderContent,
  ModalBody,
  ButtonContainer,
  LoadingContainer,
  ErrorBox,
  ResponseBox,
  ExamplesBox
} from './style';

export const ModalChatbot = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [resposta, setResposta] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setQuery('');
    setResposta('');
    setError(null);
  };

  const handleQuery = async () => {
    if (!query.trim()) {
      setError('Por favor, digite uma pergunta.');
      return;
    }

    setLoading(true);
    setError(null);
    setResposta('');

    try {
      const response = await api.post('/chatbot/query', { query });
      setResposta(response);
    } catch (err) {
      console.error('Erro ao consultar chatbot:', err);
      setError('Erro ao processar sua pergunta. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleQuery();
    }
  };

  return (
    <>
      <ChatButton>
        <Fab
          color="primary"
          onClick={handleOpen}
          style={{ backgroundColor: '#066BE0' }}
        >
          <FaRobot size={24} />
        </Fab>
      </ChatButton>

      <Dialog 
        open={open} 
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <ModalHeader>
            <HeaderContent>
              <FaRobot size={24} />
              <span>Assistente Virtual Serra Tech</span>
            </HeaderContent>
            <IconButton onClick={handleClose} style={{ color: 'white' }}>
              <IoClose />
            </IconButton>
          </ModalHeader>
        </DialogTitle>

        <DialogContent>
          <ModalBody>
          <TextField
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            label="Digite sua pergunta"
            placeholder="Ex: Qual o status do meu pedido? ou Mostre os produtos disponíveis"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
            style={{ marginBottom: '15px' }}
          />

          <ButtonContainer>
            <Button
              title={loading ? 'Processando...' : 'Perguntar'}
              background="#066BE0"
              color="white"
              backgroundHover="#3794ff"
              colorHover="white"
              padding="10px 20px"
              fontSize="14px"
              onClick={handleQuery}
              disabled={loading || !query.trim()}
            />
            <Button
              title="Limpar"
              background="white"
              color="#066BE0"
              border="2px solid #066BE0"
              backgroundHover="#f5f5f5"
              colorHover="#066BE0"
              padding="10px 20px"
              fontSize="14px"
              onClick={() => {
                setQuery('');
                setResposta('');
                setError(null);
              }}
              disabled={loading}
            />
          </ButtonContainer>

          {loading && (
            <LoadingContainer>
              <CircularProgress />
            </LoadingContainer>
          )}

          {error && (
            <ErrorBox>
              <p>{error}</p>
            </ErrorBox>
          )}

          {resposta && !loading && (
            <ResponseBox>
              <p>
                <strong>💬 Resposta:</strong>
                <br />
                <br />
                {resposta}
              </p>
            </ResponseBox>
          )}

          {!resposta && !loading && !error && (
            <ExamplesBox>
              <p>
                <strong>💡 Exemplos de perguntas:</strong>
              </p>
              <ul>
                <li>Qual o status do meu pedido?</li>
                <li>Mostre os produtos disponíveis</li>
                <li>Quais produtos estão em estoque?</li>
                <li>Qual o preço do produto X?</li>
              </ul>
            </ExamplesBox>
          )}
          </ModalBody>
        </DialogContent>
      </Dialog>
    </>
  );
};
