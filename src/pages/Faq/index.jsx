import { Navbar } from "../../components/Navbar"
import './style.css'
import React, { useState } from 'react';


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

        <div className="faqBox">
        <h1> Dúvidas Frequentes</h1>
        <span>Encontre respostas para as perguntas mais comuns sobre nosso produto e serviços</span>
            <div className="faqList">
                {faqs.map((item) =>(
                <div key={item.id} className="faqItem">
                    <h3 className="faqQuestion">{item.pergunta}</h3>
                    <p className="faqAnswer">{item.resposta}</p>
                    <hr/>
                </div>
             ))}
            </div>
        </div>
    </> 
    )
}