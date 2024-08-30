
import Col from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const Doctors = () => {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Doctors name</Card.Title>
          <Card.Text>
            branch
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Doctors;
