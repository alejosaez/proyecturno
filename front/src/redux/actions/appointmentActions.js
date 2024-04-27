import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';


export const crearTurno = createAsyncThunk(
  'turnos/crearTurno',
  async (nuevoTurno, { rejectWithValue, getState }) => {
    console.log("llegue al action")
      try {
      const response = await axios.post('http://localhost:3001/appointments/schedule', nuevoTurno);
      return response.data;
    } catch (error) {
    }
});


export const obtenerTurnos = createAsyncThunk(
  'turnos/obtenerTurnos',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:3001/appointments/${userId}`);
      return response.data;
    } catch (error) {
      if (isRejectedWithValue(error)) {
        return rejectWithValue(error.payload);
      }
      throw new Error('Error al obtener los turnos: ' + error.message);
    }
  }
);


export const cancelarTurno = createAsyncThunk(
    'appointment/cancelarTurno',
    async (id) => {
      try {
        
        await axios.put(`http://localhost:3001/appointments/cancel/${id}`);
        return id; 
      } catch (error) {
        throw new Error('Error al cancelar el turno: ' + error.message);
      }
    }
  );