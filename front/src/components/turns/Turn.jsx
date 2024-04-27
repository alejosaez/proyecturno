import React from 'react';
import { Container, List, Title, Description, CancelButton, Item } from "./TurnsStyled";
import { useDispatch } from 'react-redux';
import { cancelarTurno } from "../../redux/actions/appointmentActions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Turn = ({ turno, handleCancelar }) => {
  const { id_turns, date, time, observation, medical_specialty, phone_number, status } = turno;
  const dispatch = useDispatch();


  const handleClickCancelar = () => {
    if (status !== 'cancelled') {
      dispatch(cancelarTurno(id_turns))
        .then((result) => {
          if (result.payload === id_turns) {
            console.log("Turno cancelado con éxito:", id_turns);


            toast.success("Your appointment was successfully cancelled");

            setTimeout(() => {
              window.location.reload();
            }, 3000);
          } else {
            console.error("Error al cancelar turno:", result.error.message);
          }
        })
        .catch((error) => {
          console.error("Error al cancelar turno:", error.message);
        });
    }
  };
  return (
    <Container>
      <List>

        <Item>
          <Title>Date</Title>
          <Description>{date}</Description>
        </Item>
        <Item>
          <Title>Time</Title>
          <Description>{time}</Description>
        </Item>
        <Item>
          <Title>Observation</Title>
          <Description>{observation}</Description>
        </Item>
        <Item>
          <Title>Medical Specialty</Title>
          <Description>{medical_specialty}</Description>
        </Item>
        <Item>
          <Title>Phone Number</Title>
          <Description>{phone_number}</Description>
        </Item>
        <Item>
          <Title>Status</Title>
          <Description>{status}</Description>
        </Item>
        {status !== "cancelled" ? <CancelButton onClick={handleClickCancelar} disabled={status === 'cancelled'}>
          Cancel Turn
        </CancelButton> : null}

        <ToastContainer />
      </List>
    </Container>
  );
};

export default Turn;
