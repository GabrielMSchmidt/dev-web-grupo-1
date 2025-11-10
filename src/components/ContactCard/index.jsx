import React from 'react';

import { StyledContactCard, 
    IconContainer, 
    CardTitle, 
    CardContent } from './style.jsx'; 

export const ContactCard = ({ icon, title, content }) => {
    return (

        <StyledContactCard>
            
            <IconContainer>{icon}</IconContainer> 
            
            <CardTitle>{title}</CardTitle>
            
            <CardContent>{content}</CardContent>
        </StyledContactCard>
    );
}