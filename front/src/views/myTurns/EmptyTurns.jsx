import React from 'react';
import { ArrowSpan,ArticleContainer,StyledHeading,Button,StyledParagraph,StyledSVG,StyledSpan } from './EntiteStyled';

const EmptyTurns = () => {
    return (
      <ArticleContainer>
      
  
        <label>
          <StyledHeading>
          You don't have any Created turn, go to Create Turn or click on the link.
          </StyledHeading>
        </label>
  
        
        <Button href="/createturn" className="Rediction">
        Schedule an appointment
        </Button>
      </ArticleContainer>
    );
  };
  
  export default EmptyTurns;