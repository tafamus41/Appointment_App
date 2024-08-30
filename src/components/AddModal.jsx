import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form"

function AddModal({show,onHide,doctor}) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Reservation for{doctor.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Label>Patient Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" />
          <Form.Label>Day&Time</Form.Label>
          <Form.Control type="date" placeholder="" />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary">Submit</Button>
          <Button variant="danger">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddModal;
