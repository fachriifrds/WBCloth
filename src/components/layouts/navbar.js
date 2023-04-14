import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";
import { AiFillHome ,  AiFillInfoCircle} from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'

const Navbars = () => {
  const logo = "./images/wb.png";
  return (
    <Navbar className="navigation-bar" variant="dark" expand="md">
      <Container>
        <Navbar.Brand>
          WBCLOTH{" "}
          <img
            alt=""
            src={logo}
            width="30"
            height="32"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/"><AiFillHome/></Nav.Link>
            <Nav.Link href="/product"><FaShoppingCart/></Nav.Link>
            <Nav.Link href="/about"><AiFillInfoCircle/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
