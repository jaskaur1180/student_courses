import logo from '../assets/uol_logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Navigation.css';

function Navigation() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
        <Container>
          <Navbar.Brand href="#home"><img className="img-logo" src={logo} alt="University of Liverpool"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-links">
              <Nav.Link href="#home">Study with Liverpool</Nav.Link>
              <Nav.Link href="#link">Our Research</Nav.Link>
              <Nav.Link href="#link">About us</Nav.Link>
            </Nav>
            <Form className="d-flex navbar-search d-none d-lg-flex">
              <Form.Control
                type="search"
                placeholder="e.g. Courses"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Navbar.Text>
              <a href="#login" className="sign-out">Sign out</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Navigation