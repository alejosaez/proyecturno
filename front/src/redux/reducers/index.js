import { combineReducers } from 'redux';
import userReducer from './userSlice';
import appointmentReducer from './appointmentSlice';

const rootReducer = combineReducers({
  user: userReducer,
  appointment: appointmentReducer
});

export default rootReducer;
