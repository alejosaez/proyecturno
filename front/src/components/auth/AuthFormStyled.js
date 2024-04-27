import styled, { css } from 'styled-components';

export const Principal = styled.div`
  background-color: #7BC7FF;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;
export const Form = styled.form`
  padding: 2rem;
  `;
export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  `;
export const Input = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
  `;
export const Button = styled.button`
  width: 200px; 
  background-color: ${props => (props.isSignUp ? '#8a3ab9' : '#4caf50')};
  color: white;
  font-weight: 600;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  `;
  
  export const Card = styled.div`
  background-color: white;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row; 
    width: 900px; 
    height: 550px; 
  `;
  export const FormContainer = styled.div`
  flex: 1; 
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
  `;



  export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease;

  
  height: ${props => (props.$isSignUp ? 'auto' : '500px')};

  ${props =>
    props.$isSignUp &&
    css`
      opacity: 0;
    `}
`;



export const Image = styled.img`
  
  max-width: 100%;
  max-width: 100%;
  max-height: 100%;
  opacity: ${props => (props.$isSignUp ? '0' : '1')};
  transition: opacity 0.5s ease;

  ${props =>
    props.$isSignUp &&
    css`
      opacity: 1;
    `}
`;
export const RedirectContainer = styled.div`
justify-content: center;
  display: flex;
  align-items: center; 
`;
export const Text = styled.p`
  margin-right: 10px; 
`;
export const Link = styled.a`
  color: blue;
`;
export const ErrorMsg = styled.p`
  
  color: red;
  font-size: 12px;
 
  @media screen and (max-width: 768px) {
    width: 250px;
    padding: 0px;
    font-size:14px;
}
`;