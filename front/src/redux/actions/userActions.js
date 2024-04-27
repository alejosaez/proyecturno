import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const loginUser = createAsyncThunk(
  'user/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3001/users/login', userData);
      console.log("response completo:", response)
      console.log("response limpio:", response.data)
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3001/users/register', userData);
      return response.data;
    } catch (error) {
      console.log("Error al encontrar la ruta");
      return rejectWithValue(error.response.data);
    }
  }
);



export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
     
      return null; 
    } catch (error) {
     
      return rejectWithValue(error.response.data);
    }
  }
);
