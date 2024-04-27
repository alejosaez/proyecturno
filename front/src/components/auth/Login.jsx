import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';
import { Form, Title, Input, Button } from './AuthFormStyled';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await dispatch(loginUser(formData));
      console.log("respuesta dl login", response)
      if(!response.error){

        navigate("/");
        toast.success("Welcome!");

      } else (toast.error("Username or password incorrect"))
    
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Sign In</Title>
      <Input
        required
        type="text"
        name='userName' 
        value={formData.userName} 
        placeholder="UserName"
        onChange={handleChange}
      />
      <Input
        required
        type="password"
        placeholder="Password"
        name='password'
        value={formData.password}
        onChange={handleChange}
      />
      <Button type='submit'>Sign In</Button>
      <ToastContainer />
    </Form>
  )
};

export default Login;
