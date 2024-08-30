import Col from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { doctorData } from "../helper/data";

const Doctors = () => {
  console.log(doctorData);
  return (
    <>
      <h1>TAFAMUS HOSPİTAL</h1>
      <h2>Our Doctors</h2>
      <Col xs={10} sm={8} md={6} lg={4} xl={3}>
        {doctorData.map((doctor) => (
          <Card key={doctor.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={doctor.img} />
            <Card.Body>
              <Card.Title>{doctor.name}</Card.Title>
              <Card.Text>{doctor.dep}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </>
  );
};

export default Doctors;
