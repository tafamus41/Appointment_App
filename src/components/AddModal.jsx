import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form"

function AddModal({show,onHide,doctor,handleAdd}) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: new Date().getTime(),
      patient: name,
      day: date,
      consulted: false,
      doctor: doctor.name,
    };
    handleAdd(newAppointment);
    onHide();
  };
  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Reservation for <span className="text-danger">{doctor.name}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name:</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                onChange={(e) => setDate(e.target.value)}
                type="datetime-local"
                placeholder="Date"
              />
            </Form.Group>
            <div className="text-center">
              <Button type="submit" variant="success" className="me-2">
                Save
              </Button>
              <Button type="button" variant="danger" onClick={onHide}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default AddModal;
