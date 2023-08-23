import React  from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export function NavProduct()
{
    return(
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/Product">Products</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/EbookShowByCard">eBooks</Nav.Link>
              <Nav.Link href="/Music">Music</Nav.Link> 
              <Nav.Link href="/Videos">Videos</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
       
      </>
    )
}
export default NavProduct;        