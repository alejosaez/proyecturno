import styled from 'styled-components';
import MedicalImage from "../../assets/MedicalImage.jpg"

export const Section = styled.section`
  background-image: url(${MedicalImage});
  background-size: cover; 
  background-position: center;
  background-attachment: fixed; 
  height: 100vh; 
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 64px 16px;

  @media (min-width: 640px) {
    padding: 64px 24px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Column = styled.div`
  grid-column: span ${({ lg }) => lg || '1'};

`;

export const Form = styled.form`
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 32px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    padding: 48px;
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  padding: 0.75rem;
  font-size: 0.875rem;
`;

export const Select = styled.select`
width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  padding: 0.75rem;
  font-size: 0.875rem;
`;



export const Textarea = styled.textarea`
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  padding: 0.75rem;
  font-size: 0.875rem;
`;

export const Button = styled.button`
  display: inline-block;
  width: 100%;
  border-radius: 0.375rem;
  background-color: #000000;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.875rem 1.25rem;
  cursor: pointer;

  &:hover {
    background-color: #1a202c;
  }
`;