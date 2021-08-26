import { Jumbotron, Button, Container } from "react-bootstrap";

const Jumbo = ({ message }) => {
  return (
    <Container >
      <Jumbotron className="bg-light">
        <h2>{message}</h2>
        <p>
          We offer tremendous gathering of books in various classification of
          fantasy, romance, horror.
        </p>
        <p>
          <Button variant="dark">Find more</Button>
        </p>
      </Jumbotron>
    </Container>
  );
};

export default Jumbo;
