import { Navbar } from "../../components/Navbar"
import React, { useState } from 'react';


import {
<<<<<<< HEAD
    ContainerFaq,
    FaqBox,
    FaqList,
    Container
=======

    FaqBox,
    FaqList,
>>>>>>> c5dffb400466cf9d78fde7a7cab93d6923761549
} from "./style.jsx";

import { ContactOptions } from './../../components/ContactOptions/index';
import { Footer } from "../../components/Footer/Index.jsx";


const mockFaqs = [
    {
        id: 1,
        pergunta: "Quais as formas de pagamento aceitas?",
        resposta: " Aceitamos Pix, Boleto e todos os principais cartões de crédito (Mastercard, Elo, etc.).",
    },
    {
        id: 2,
        pergunta: "Qual o prazo de entrega para minha região?",
        resposta: " O prazo varia de 5 a 15 dias úteis, dependendo da sua localização. Você pode simular no carrinho."
    },
    {
        id: 3,
        pergunta: "Posso trocar ou devolver um produto?",
        resposta: " Sim! Devoluções são aceitas em até 7 dias após o recebimento. Trocas por defeito podem ser feitas em até 30 dias.",
    },
]

export const Faq =() =>{

    const [faqs, setFaqs] = useState(mockFaqs);

    return(

    <>
<<<<<<< HEAD
        <Navbar />
        <Container>
            <FaqBox>
            <h1> Dúvidas Frequentes</h1>
            <span>Encontre respostas para as perguntas mais comuns sobre nosso produto e serviços</span>
                <FaqList>
                    {faqs.map((item) =>(
                    <ContainerFaq key={item.id}>
                        <faqQuestion>{item.pergunta}</faqQuestion>
                        <faqAnswer>{item.resposta}</faqAnswer>
                    </ContainerFaq>
                 ))}
                </FaqList>
            </FaqBox>
            
            <ContactOptions/>
        </Container>
=======
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
>>>>>>> c5dffb400466cf9d78fde7a7cab93d6923761549
        <Footer />
    </> 
    )
}