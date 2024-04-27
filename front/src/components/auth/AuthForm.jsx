import React, { useState } from "react";
import Register from './Register';
import Login from './Login';
import ForgetPassword from './ForgetPassword';
import { Container, Card, FormContainer, Principal, ImageContainer, Image, Link, RedirectContainer, Text, Button } from "./AuthFormStyled";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [birthdate, setBirthdate] = useState('');
  
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setShowDatePicker(false);
    setForgetPassword(false); 
  };

  const toggleFormForgetPassword = () => {
    setIsSignUp(false);
    setForgetPassword(true);
  };
  
  return (
    <Principal>
      <Container>
        <Card>
          <ImageContainer $isSignUp={isSignUp}>
            <Image src="https://cedimat.com/wp-content/uploads/2023/08/captura-vertical-paciente-joven-feliz-escuchando-medico-alto-rango-que-da-consejos-salud-visita-control-oficina-clinica-medico-principal-entrevistando-joven-sonriente-hospital_482921-4219.jpg" />
          </ImageContainer>
          <FormContainer $isSignUp={isSignUp}>
            
            {forgetPassword ? (
              <ForgetPassword />
            ) : (
              
              isSignUp ? <Register birthdate={birthdate} setShowDatePicker={setShowDatePicker} setBirthdate={setBirthdate} /> : <Login />
            )}
            <RedirectContainer>
              <Text>
                {isSignUp ? 'Are you already registered?' : 'Do not you have an account?'}
              </Text>
              <Link onClick={toggleForm} style={{ width: '200px' }}>
                {isSignUp ? 'Log in' : 'Sign up'}
              </Link>
              
              {!forgetPassword && (
                <Link onClick={toggleFormForgetPassword} style={{ width: '200px' }}>
                  {"Forget your password?"}
                </Link>
              )}
            </RedirectContainer>
          </FormContainer>
        </Card>
      </Container>
    </Principal>
  );
};

export default AuthForm;
