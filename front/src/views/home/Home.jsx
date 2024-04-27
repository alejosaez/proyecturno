import React from 'react';
import { Container, Header, WelcomeText, Button } from './homeStyled';
import { useSelector } from 'react-redux';



const Home = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  return (
    <Container>
      <Header>Welcome to the Medical Office!</Header>
      <WelcomeText>
      In our medical office, we care about your health. We offer quality medical services for the whole family.
      </WelcomeText>
      {isAuthenticated ? (
        <Button href="/createturn">Schedule an appointment</Button>
      ) : (
        <Button href="/authentication">Schedule an appointment</Button>
      )
      }


    </Container>
  );
};

export default Home;
