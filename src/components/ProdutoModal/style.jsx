
import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from { transform: translate(-50%, -60%); opacity: 0; }
  to { transform: translate(-50%, -50%); opacity: 1; }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background: white;
    border-radius: 8px;
    width: 90%;
    max-width: 600px; /* Largura similar ao print */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${slideDown} 0.3s ease-out;
    font-family: "Poppins", sans-serif;
`;

export const ModalHeader = styled.div`
    padding: 20px;
    border-bottom: 1px solid #eee;
    position: relative;
    
    h3 {
        margin: 0;
        font-size: 20px;
    }
    p {
        color: #6c757d;
        font-size: 14px;
        margin-top: 5px;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #aaa;
    
    &:hover {
        color: #333;
    }
`;

export const ModalBody = styled.div`
    padding: 20px;
    max-height: 70vh;
    overflow-y: auto;
`;

export const ModalFooter = styled.div`
    padding: 15px 20px;
    border-top: 1px solid #eee;
    text-align: right;
`;

export const InputGroup = styled.div`
    margin-bottom: 15px;
    ${props => props.flex && 'flex: 1;'}
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #333;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
    
    &:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
`;

export const TextArea = styled.textarea`
    ${Input}
    resize: vertical;
    min-height: 80px;
`;

const BaseButton = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
    margin-left: 10px;
`;

export const CancelButton = styled(BaseButton)`
    background-color: #f8f9fa;
    color: #343a40;
    border: 1px solid #ced4da;

    &:hover {
        background-color: #e2e6ea;
    }
    &:disabled {
        opacity: 0.6;
    }
`;

export const SubmitButton = styled(BaseButton)`
    background-color: #007bff;
    color: white;
    border: none;

    &:hover {
        background-color: #0056b3;
    }
    &:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
    }
`;

export const ErrorMessage = styled.p`
    color: #dc3545;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 15px;
`;