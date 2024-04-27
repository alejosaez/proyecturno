import React, { useState } from 'react';
import { Form, Title, Input, Button, ErrorMsg } from './AuthFormStyled';
import validation from "./Validation"
import { registerUser } from '../../redux/actions/userActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';




const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthdate: '',
    dni: ''
  });
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    birthdate: '',
    dni: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors(validation({ ...formData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    toast.success("Welcome! You will receive your credentials in your email inbox.");
    const updatedErrors = validation(formData);
    setErrors(updatedErrors);

    if (Object.keys(updatedErrors).length === 0) {
      try {
        await dispatch(registerUser(formData));
        setFormData({
          name: '',
          email: '',
          birthdate: '',
          dni: ''
        });
      
      } catch (error) {
        toast.error("Nombre de usuario o contraseña incorrectos")
      }
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Title>Create Account</Title>
        <div>
          <div>
            <span>or use your email for registration</span>
          </div>
          <Input
            required
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          <Input
            required
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
          <Input
            required
            type="date"
            name="birthdate"
            placeholder="Birthdate"
            value={formData.birthdate}
            onChange={handleChange}
          />
          {errors.birthdate && <ErrorMsg>{errors.birthdate}</ErrorMsg>}
          <Input
            required
            type="text"
            name="dni"
            placeholder="DNI"
            value={formData.dni}
            onChange={handleChange}
          />
          {errors.dni && <ErrorMsg>{errors.dni}</ErrorMsg>}
        </div>
        <Button type="submit">Sign Up</Button>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default Register;