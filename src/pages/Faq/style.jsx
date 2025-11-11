import styled from "styled-components";

export const FaqBox = styled.div `
    border-radius: 15px;
    border: 1px solid #E1E7EF;
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
    width: 100%; 
    margin-top: 30px;
    text-align: left;    
`;

export const FaqItem   = styled.div `
    margin-bottom: 20px;
    padding: 15px 0;    
`;
export const FaqQuestion    = styled.div `
    font-size: 1.1em;
    color: #333; 
    cursor: pointer;  
`;

export const ContainerFaq = styled.div `
    margin:  0;
    background-color: #c4c4c4;
`;

export const Container = styled.div `
    margin: 20%;
`;