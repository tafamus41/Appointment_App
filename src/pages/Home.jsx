import Row from "react-bootstrap/Row";
import Doctors from "../components/Doctors";
import Container from "react-bootstrap/Container";
import AppointmentList from "../components/AppointmentList";

const Home = () => {
  return (
    <Container>
      <Row>
        <Doctors />
        <AppointmentList/>
      </Row>
    </Container>
  );
};

export default Home;
