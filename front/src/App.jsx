import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/home/Home';
import NavBar from './components/NavBar/NavBar';
import MyTurns from './views/myTurns/MyTurns';
import Authorization from './views/auth/Authorization';
import CreateTurns from './views/appointmentCreateTurn/CreateTurns';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {isAuthenticated && (
          <>
            <Route path="/turns" element={<MyTurns />} />
            <Route path='/createturn' element={<CreateTurns />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
        <Route path="/authentication" element={<Authorization />} />
        {!isAuthenticated && <Route path="*" element={<Navigate to="/" />} />}
      </Routes>
    </div>
  );
}

export default App;
