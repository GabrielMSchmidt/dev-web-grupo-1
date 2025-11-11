import styled from "styled-components";

export const StyledContactCard = styled.div`
    
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: default; 
`;


export const IconContainer = styled.div`
    font-size: 2em; 
    margin-bottom: 5px;
    color: #007bff; 
`;


export const CardTitle = styled.h4`
    font-weight: 600;
    margin: 0 0 5px 0;
    color: #333;
`;

export const CardContent = styled.p`
    margin: 0;
    color: #888;
`;