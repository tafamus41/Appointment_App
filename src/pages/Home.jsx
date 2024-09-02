import { useState } from "react";
import Row from "react-bootstrap/Row";
import Doctors from "../components/Doctors";
import Container from "react-bootstrap/Container";
import AppointmentList from "../components/AppointmentList";
import { appointmentData } from "../helper/data";
const Home = () => {
  const [appointments, setAppointments] = useState("")
  const handleAdd = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
    localStorage.setItem(
      "list",
      JSON.stringify([...appointments, newAppointment])
    );
  };
  return (
    <Container>
      <Row>
        <Doctors handleAdd={handleAdd}/>
        <AppointmentList appointments={appointments}/>
      </Row>
    </Container>
  );
};

export default Home;
