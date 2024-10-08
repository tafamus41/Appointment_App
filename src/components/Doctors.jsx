import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { doctorData } from "../helper/data";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = ({handleAdd}) => {
  const [modal, setModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleModalOpen = (doctor) => {
    setSelectedDoctor(doctor);
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
    setSelectedDoctor("");
  };
  return (
    <>
      <h1 className="text-center display-5 text-primary">TAFAMUS41 HOSPİTAL</h1>
      <h2 className="text-center">Our Doctors</h2>

      {doctorData.map((doctor) => (
        <Col key={doctor.id} xs={12} sm={6} md={4} lg={3}>
          <Card className="my-2 mx-4 border-0">
            <Card.Img
              onClick={() => handleModalOpen(doctor)}
              variant="top"
              title={doctor.name}
              src={doctor.img}
              alt={doctor.name}
              className=" img-thumbnail doctor-img"
            />
            <Card.Body>
              <Card.Title className="text-center">{doctor.name}</Card.Title>
              <Card.Text className="text-center">{doctor.dep}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      <AddModal
        show={modal}
        onHide={handleModalClose}
        doctor={selectedDoctor}
        handleAdd={handleAdd}
      />
    </>
  );
};

export default Doctors;
