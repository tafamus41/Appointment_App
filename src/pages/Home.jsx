import Row from "react-bootstrap/Row";
import Doctors from "../components/Doctors";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <Container>
      <Row>
        <Doctors />
      </Row>
    </Container>
  );
};

export default Home;
