import "./Latest.css";
import { Container, Card, Button, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import books from "../data/horror.json";

const LatestRelease = ({ subtitle }) => {
  return (
    <Container>
      <h5 className="mb-3">{subtitle}</h5>
      <Row>
        {books.map((book) => (
          <Col xs={6} md={3} key={book.asin} className="my-3">
            <Card className="border border-dark bg-light">
              <Card.Img
                variant="top"
                className="card-img-top mt-1"
                src={book.img}
              />
              <Card.Body>
                <OverlayTrigger
                  key={book}
                  placement={book}
                  overlay={
                    <Tooltip id={`tooltip-${book}`}>
                      <strong>{book.title}</strong>.
                    </Tooltip>
                  }
                >
                  <Card.Title className="text-truncate">
                    <b>
                      <small>{book.title}</small>
                    </b>
                  </Card.Title>
                </OverlayTrigger>

                <div className="d-flex justify-content-between">
                  <h5>${book.price}</h5>
                  <Button variant="dark">Buy</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LatestRelease;
