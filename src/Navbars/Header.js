import React  from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Header()
{
    return(
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/home"><h2>BookWorm</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Product"><h5>Products</h5></Nav.Link>
              <Nav.Link href="/LendingLibrary"><h5>Lending Library</h5></Nav.Link> 
              <Nav.Link href="/Shelf"><h5>MyShelf</h5></Nav.Link>
              <Nav.Link href="/Library"><h5>MyLibrary</h5></Nav.Link>
              <Nav.Link href="/Account"><h5>MyAccount</h5></Nav.Link>  
              <Nav.Link href="/About"><h5>About us</h5></Nav.Link>
              <Nav.Link href="/Contact"><h5>Contact us</h5></Nav.Link>
              <Nav.Link href="/Feedback"><h5>Feedback</h5></Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br /> 
      </>
    );
}
export default Header;        