import React, { useState } from 'react';
import { Form, Title, Input, Button } from './AuthFormStyled';
import axios from 'axios';



const ForgentPassword = () => {
 

  const [formData, setFormData] = useState({
   email:"",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    console.log("llegue al submit", formData.email)
    try {
      await axios.get(`http://localhost:3001/users/reset-password/${formData.email}`)
    } catch (error) {
      console.error('Error al recuperar la contraseña', error);
    }
  };

  return (
<div>
      <Title>Forget Password</Title>
      <Input
        required
        type="text"
        name='email' 
        value={formData.email} 
        placeholder="email"
        onChange={handleChange}
      />
     
      <Button type='submit' onClick={()=>handleSubmit()}>Recover your Password</Button>
      </div>
  )
};

export default ForgentPassword;
