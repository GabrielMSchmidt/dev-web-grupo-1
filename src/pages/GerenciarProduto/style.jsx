
import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: "Poppins", sans-serif;
`;

export const Header = styled.section`
    padding: 20px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    
    p {
        color: #666;
        margin-top: 5px;
    }
`;

export const Title = styled.h1`
    font-size: 28px;
    color: #333;
    margin: 0;
`;

export const ProductListSection = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    
    h3 {
        font-size: 20px;
        margin-bottom: 5px;
    }
    
    p {
        color: #777;
        margin-bottom: 20px;
    }
`;

export const NewProductButton = styled.button`
    float: right;
    background-color: #007bff; /* Azul similar ao da imagem */
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
    margin-top: -50px; /* Posicionamento visual */

    &:hover {
        background-color: #0056b3;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
`;

export const TableHead = styled.thead`
    background-color: #f8f9fa;
`;

export const TableRow = styled.tr`
    border-bottom: 1px solid #eee;
    
    &:last-child {
        border-bottom: none;
    }
`;

export const TableCell = styled.td`
    padding: 15px;
    text-align: left;
    font-size: 14px;
    
    ${props => props.actions && css`
        width: 100px; /* Largura para as ações */
        white-space: nowrap;
    `}
`;

export const ActionButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    margin-left: 10px;
    opacity: 0.7;
    
    &:hover {
        opacity: 1;
        color: ${props => props.remove ? 'red' : (props.edit ? '#007bff' : 'inherit')};
    }
`;

export const ImagePreview = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 4px;
`;


const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

export const Notification = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 15px 25px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    background-color: ${props => props.type === 'error' ? '#dc3545' : '#28a745'}; /* Vermelho ou verde */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: ${fadeIn} 0.5s ease-out;
    z-index: 1000;
`;