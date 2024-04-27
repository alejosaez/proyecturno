import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;


export const Header = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;


export const WelcomeText = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;


export const Button = styled.a`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;