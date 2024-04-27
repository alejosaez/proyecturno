import { createSlice } from '@reduxjs/toolkit';
import { crearTurno, obtenerTurnos,cancelarTurno } from '../actions/appointmentActions'; // Importa la acción de cancelar turno

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: {
    turnos: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(crearTurno.fulfilled, (state, action) => {
        state.turnos.push(action.payload);
      })
      .addCase(obtenerTurnos.fulfilled, (state, action) => {
        state.turnos = action.payload;
      })      
      .addCase(cancelarTurno.fulfilled, (state, action) => {
        
        const index = state.turnos.findIndex(turno => turno.id === action.payload);
        if (index !== -1) {
          state.turnos.splice(index, 1);
        }
      })
      .addCase(cancelarTurno.rejected, (state, action) => { 
        state.error = action.error.message;
      });
  },
});

export default appointmentSlice.reducer;
