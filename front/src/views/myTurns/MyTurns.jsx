import React, { useEffect, useState } from "react";
import EmptyTurns from "./EmptyTurns";
import Turn from '../../components/turns/Turn';
import { Container } from "./MyTurnsStyled"; 
import { useDispatch, useSelector } from 'react-redux';

import { obtenerTurnos } from "../../redux/actions/appointmentActions";

const MyTurns = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const turnos = useSelector(state => state.appointment.turnos);

    const [cancelTurn, setCancelTurn] = useState([])

    useEffect(() => {
        if (user) {
            dispatch(obtenerTurnos(user.id)); 
        }
    }, [dispatch, user]);

    useEffect(() => {
        
        setCancelTurn(turnos.filter(turn => turn && turn.status === "cancelled"));
    }, [turnos]);

    return (
      <Container>
          {turnos && turnos.length > 0 ? (
            <>
              {turnos.map(turn =>
                turn && turn.status !== "cancelled" && (
                  <Turn key={turn.id_turns} turno={turn} />
                )
              )}
             </>
          ) : (
            EmptyTurns()
          )}
          <div>
            <h2>Mis turnos cancelados:</h2>
          {cancelTurn.length > 0 ? cancelTurn.map(turn => (
            <Turn key={turn.id_turns} turno={turn} />
          )) : (
            <p>Usted no tiene turnos cancelados</p>
          )}
          </div>
        </Container>
      );
}

export default MyTurns;
