
import { 
    ContactSection,  
    CardsContainer, 
    SectionTitle } from "./style.jsx";
    
import { ContactCard } from "../ContactCard";
import { GoCommentDiscussion } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";

export const ContactOptions = () =>{
 return(

    <ContactSection>
        <SectionTitle>Ainda tem dúvidas?</SectionTitle>
        <p> Nossa equipe está pronta para ajudar você!</p>

        <CardsContainer>
            <ContactCard
                icon={<GoCommentDiscussion />}
                title="Assistente Virtual"
                content="Canto Inferior Direito!"
            /> 
            <ContactCard
                icon={<TfiEmail />}
                title="Email"
                content="contato@serratech0.com"
            />
            <ContactCard
                icon={<BsTelephone />}
                title="Telefone" 
                content="42 9842-6961"
            />
        
        </CardsContainer> 
    </ContactSection>

 )
}