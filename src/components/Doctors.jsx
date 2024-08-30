import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { doctorData } from "../helper/data";
import AddModal from "./AddModal";
import {useState} from "react"

const Doctors = () => {
    const [modal, setModal] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleModalOpen = (doctor) => {
    setSelectedDoctor(doctor);
    setModal(true); 
  };

  const handleModalClose = () => {
    setModal(false); 
    setSelectedDoctor(null); 
  };
  return (
    <>
      <h1 className="text-center">TAFAMUS HOSPİTAL</h1>
      <h2 className="text-center">Our Doctors</h2>
      <Col xs={10} sm={8} md={6} lg={4} xl={3}>
        {doctorData.map((doctor) => (
          <Card key={doctor.id} className="my-2 mx-4 border-0">
            <Card.Img onClick={()=>handleModalOpen(doctor)} variant="top" title={doctor.name} src={doctor.img} className="border border-5 rounded-2 " />
            <Card.Body>
              <Card.Title className="text-center">{doctor.name}</Card.Title>
              <Card.Text className="text-center">{doctor.dep}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Col>
      {modal && (
        <AddModal
          show={modal}
          onHide={handleModalClose}
          doctor={selectedDoctor}
        />
      )}
    </>
  );
};

export default Doctors;
