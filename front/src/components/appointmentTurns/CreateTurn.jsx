import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crearTurno } from "../../redux/actions/appointmentActions";
import { Section, Container, Grid, Column, Form, Input, Textarea, Button, Select } from "./CreateTurnStyled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppoitmentTurns = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const today = new Date();
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 4, today.getDate()).toISOString().slice(0, 10);

  const [turnoData, setTurnoData] = useState({
    date: "",
    time: "",
    phone_number: "",
    medical_specialty: "",
    observation: "",
    id_user: user.id,
    status: "active"
  });

  const handleCrearTurno = async (event) => {
    event.preventDefault();
    try {
      toast.success("Your appointment was successfully created.");
      await dispatch(crearTurno(turnoData));
      setTurnoData({
        date: "",
        time: "",
        phone_number: "",
        medical_specialty: "",
        observation: ""
      });

    } catch (error) {
      toast.error("Nombre de usuario o contraseña incorrectos")

    }
  };

  return (
    <Section>
      <Container>
        <Grid>
          <Column lg="2">
            <p>Book Medical Appointments, Available 24/7 Care</p>
            <div>
              <a href="#" className="text-2xl font-bold text-pink-600"> 0800 2241 470 734 </a>
              <address className="mt-2 not-italic">282 Av. Libertador, Capital Federal</address>
            </div>
          </Column>
          <Column lg="3">
            <Form onSubmit={handleCrearTurno}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <Input
                  type="date"
                  placeholder="Date"
                  value={turnoData.date}
                  onChange={(e) => {
                    const selectedDate = new Date(e.target.value);
                    const formattedDate = selectedDate.toISOString().slice(0, 10);
                    console.log('Formatted date:', formattedDate);
                    setTurnoData({ ...turnoData, date: formattedDate });
                  }}
                  min={today.toISOString().slice(0, 10)}
                  max={maxDate}
                />
                <Select
                  required
                  value={turnoData.time}
                  onChange={(e) => setTurnoData({ ...turnoData, time: e.target.value })}
                >
                  <option value="">Select a consultation time</option>
                  <option value="08:00">08:00</option>
                  <option value="08:30">08:30</option>
                  <option value="09:00">09:00</option>
                  <option value="09:30">09:30</option>
                  <option value="10:00">10:00</option>
                  <option value="10:30">10:30</option>
                  <option value="11:00">11:00</option>
                  <option value="11:30">11:30</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                  <option value="14:00">14:00</option>
                  <option value="14:30">14:30</option>
                  <option value="15:00">15:00</option>
                  <option value="15:30">15:30</option>
                  <option value="16:00">16:00</option>
                  <option value="16:30">16:30</option>
                  <option value="17:00">17:00</option>
                  <option value="17:30">17:30</option>
                  <option value="18:00">18:00</option>
                  <option value="18:30">18:30</option>
                </Select>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <Input
                  required
                  type="text"
                  placeholder="Phone Number"
                  value={turnoData.phone_number}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (/^\d*$/.test(inputValue)) {
                      setTurnoData({ ...turnoData, phone_number: inputValue });
                    }
                  }}
                />
                <Select required value={turnoData.medical_specialty} onChange={(e) => setTurnoData({ ...turnoData, medical_specialty: e.target.value })}>
                  <option value="">Select a medical specialty</option>
                  <option value="Medicina General">General Medicine</option>
                  <option value="Pediatría">Pediatrics</option>
                  <option value="Ginecología y Obstetricia">Gynecology and Obstetrics</option>
                  <option value="Cardiología">Cardiology</option>
                  <option value="Dermatología">Dermatology</option>
                  <option value="Oftalmología">Ophthalmology</option>
                  <option value="Otorrinolaringología (ORL)">Otorhinolaryngology (ENT)</option>
                  <option value="Neurología">Neurology</option>
                  <option value="Psiquiatría">Psychiatry</option>
                  <option value="Cirugía General">General Surgery</option>
                  <option value="Endocrinología">Endocrinology</option>
                  <option value="Urología">Urology</option>
                  <option value="Reumatología">Rheumatology</option>
                  <option value="Oncología">Oncology</option>
                </Select>
              </div>
              <Textarea required placeholder="Observation" rows="8" value={turnoData.observation} onChange={(e) => setTurnoData({ ...turnoData, observation: e.target.value })} />
              <div className="mt-4">
                <Button type="submit">Create Turn</Button>
              </div>
              <ToastContainer />
            </Form>
          </Column>
        </Grid>
      </Container>
    </Section>
  );
};

export default AppoitmentTurns;
