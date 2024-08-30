import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Label>Patient Name</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
          <Form.Label>Day&Time</Form.Label>
          <Form.Control type="date" placeholder="Password" />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary">Submit</Button>
          <Button variant="danger">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;
