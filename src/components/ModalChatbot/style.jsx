import styled from 'styled-components';

export const ChatButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #066BE0;
  color: white;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ModalBody = styled.div`
  padding: 20px;
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const ErrorBox = styled.div`
  padding: 15px;
  background-color: #ffebee;
  border-left: 4px solid #f44336;
  border-radius: 4px;
  margin-top: 10px;

  p {
    margin: 0;
    color: #c62828;
  }
`;

export const ResponseBox = styled.div`
  padding: 15px;
  background-color: #e3f2fd;
  border-left: 4px solid #066BE0;
  border-radius: 4px;
  margin-top: 10px;

  p {
    margin: 0;
    font-size: 14px;
    color: #333;
    white-space: pre-wrap;
  }
`;

export const ExamplesBox = styled.div`
  margin-top: 20px;

  p {
    font-size: 12px;
    color: #666;
    margin-bottom: 10px;
  }

  ul {
    font-size: 12px;
    color: #666;
    padding-left: 20px;
  }
`;
