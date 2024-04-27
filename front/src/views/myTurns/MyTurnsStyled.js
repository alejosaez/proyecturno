import styled from 'styled-components';
import MedicalImage from "../../assets/MedicalImage.jpg"



export const Container = styled.div`
  background-image: url(${MedicalImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh; 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;