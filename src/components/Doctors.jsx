import Col from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { doctorData } from "../helper/data";

const Doctors = () => {
  console.log(doctorData);
  return (
    <>
      <h1 className="text-center">TAFAMUS HOSPİTAL</h1>
      <h2 className="text-center">Our Doctors</h2>
      <Col xs={1} sm={2} md={3} lg={5}>
        {doctorData.map((doctor) => (
          <Card key={doctor.id} className="my-2 mx-4 border-0">
            <Card.Img variant="top" title={doctor.name} src={doctor.img} className="border border-5 rounded-2 " />
            <Card.Body>
              <Card.Title className="text-center">{doctor.name}</Card.Title>
              <Card.Text className="text-center">{doctor.dep}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </>
  );
};

export default Doctors;
