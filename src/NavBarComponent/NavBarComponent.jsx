import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBarComponent = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Banco</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Movimientos</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
          </Nav>
          <div>Gustavo Ojeda <br /> DNI:12345678</div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;