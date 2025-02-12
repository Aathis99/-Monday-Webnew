import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col sm={6}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180px" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione, ea? Nisi temporibus vel voluptates obcaecati fugit
                    aliquid, magnam et a.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;

