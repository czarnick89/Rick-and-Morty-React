import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand href="/">Rick and Morty</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link data-cy='homeLink' as={Link} to='/'>Home</Nav.Link>
              <Nav.Link data-cy='favLink' as={Link} to="/favoritecharacters">Favorite Characters</Nav.Link>
              <Nav.Link data-cy='aboutLink' as={Link} to="/aboutpage">About</Nav.Link>
              <Nav.Link data-cy='charLink' as={Link} to="/characterspage">Characters</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
