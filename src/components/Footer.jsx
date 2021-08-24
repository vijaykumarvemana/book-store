import { Container } from "react-bootstrap";

const Footer = ({ website }) => {
  return (
    <Container>
      <footer className="bg-dark text-center text-white">
        <div className="text-center p-3 mx-2">
          ©2021 Copyright -
          <a className="text-white mx-2" href="https://mybookstore.com/">
            {website}
          </a>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
