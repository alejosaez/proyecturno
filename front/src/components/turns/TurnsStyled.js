import styled from 'styled-components';


export const Container = styled.div`
  display: flow-root;
  border-radius: 0.5rem;
  border: 1px solid #f3f4f6; 
  padding: 0.75rem; 
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background-color: #fff;
  margin: 10px 5px 5px 5px;
  height: fit-content;
`;

export const List = styled.dl`
  margin: -0.75rem 0; 
  div:not(:last-child) {
    border-bottom: 1px solid #f3f4f6; 
  }
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 0.25rem;
  padding: 0.75rem; 
  &:nth-child(even) {
    background-color: #f9fafb; 
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem; 
  }
`;

export const Title = styled.dt`
  font-weight: 500; 
  color: #111827;
`;

export const Description = styled.dd`
  color: #374151; 
  grid-column: span 2 / span 2; 
`;
export const CancelButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #dc2626; 
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-bottom: 20px;
`;

