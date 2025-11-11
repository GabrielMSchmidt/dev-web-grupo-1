import styled from "styled-components";

export const Fundo = styled.div `
    background-color: #F5F5F5;
`;

export const FaqBox = styled.div `
    max-width: 900px; 
    margin: 40px auto 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: "Poppins", sans-serif;

`;

export const FaqList  = styled.div `
    background-color: #FAFAFA;
    border: 1px solid #c4c4c4;
    border-radius: 15px;
    padding: 5px;
    width: 100%; 
    margin-top: 30px;
    text-align: left;    
    margin-left: 5%;
`;

export const FaqItem   = styled.div `

    margin-bottom: 20px;
    padding: 15px 0;    
`;
export const FaqQuestion    = styled.h1 `
    font-size: 2em;
    color: #333; 
    cursor: pointer;  
`;

export const FaqAnswer = styled.span `
    font-size: 0%.9;
    color: #333; 
`;