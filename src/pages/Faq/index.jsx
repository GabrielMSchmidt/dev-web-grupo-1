import { Navbar } from "../../components/Navbar"
import React, { useState } from 'react';

import {

    FaqBox,
    FaqList,
    FaqItem,
    FaqQuestion
} from "./style.jsx";

import { ContactOptions } from './../../components/ContactOptions/index';


const mockFaqs = [
    {
        id: 1,
        pergunta: "Quais as formas de pagamento aceitas?",
        resposta: "Aceitamos Pix, Boleto e todos os principais cartões de crédito (Mastercard, Elo, etc.).",
    },
    {
        id: 2,
        pergunta: "Qual o prazo de entrega para minha região?",
        resposta: "O prazo varia de 5 a 15 dias úteis, dependendo da sua localização. Você pode simular no carrinho."
    },
    {
        id: 3,
        pergunta: "Posso trocar ou devolver um produto?",
        resposta: "Sim! Devoluções são aceitas em até 7 dias após o recebimento. Trocas por defeito podem ser feitas em até 30 dias.",
    },
]

export const Faq =() =>{

    const [faqs, setFaqs] = useState(mockFaqs);

    return(

    <>
        <Navbar/>

        <FaqBox>
        <h1> Dúvidas Frequentes</h1>
        <span>Encontre respostas para as perguntas mais comuns sobre nosso produto e serviços</span>
            <FaqList>
                {faqs.map((item) =>(
                <div key={item.id}>
                    <faqQuestion>{item.pergunta}</faqQuestion>
                    <faqAnswer>{item.resposta}</faqAnswer>
                    <hr/>
                </div>
             ))}
            </FaqList>
        </FaqBox>
        
        <ContactOptions/>
    </> 
    )
}