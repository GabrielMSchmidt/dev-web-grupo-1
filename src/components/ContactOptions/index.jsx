import React from "react";
import { ContactCard } from "../ContactCard";
import { GoCommentDiscussion } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";

export const ContactOptions = () =>{
 return(

    <>
    <contactSection>
        <h2 style={{
            fontSize : "2em",
            fontWeight : "700",
            color: "blue"
        }}>Ainda tem dúvidas?</h2>
        <p> Nossa equipe está pronta para ajudar você!</p>

        <cardsContainer>
            <ContactCard>
                <GoCommentDiscussion />
                Chat Online
                Seg-Sex 9h-18h
            </ContactCard> 
            <ContactCard>
                <TfiEmail />
                Email
                contato@serratech0.com
            </ContactCard>
            <ContactCard>
                <BsTelephone />
                Telefone 
                42 9842-6961
            </ContactCard>
        
        </cardsContainer> 
    </contactSection>
    </>

 )
}