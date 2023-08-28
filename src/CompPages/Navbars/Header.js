import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Header() {
  function signOut() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="Headermain">
        <Container>
          <Navbar.Brand href="/home"><h2>BookWorm</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Product"><h5>Products</h5></Nav.Link>
              {localStorage.getItem("Token") && (
                <>
                  <Nav.Link href="#pricing">Lending Library</Nav.Link>
                  <Nav.Link href="category">MyShelf</Nav.Link>
                  <Nav.Link href="#pricing">MyLibrary</Nav.Link>
                </>
              )}
              <Nav.Link href="/Account"><h5>MyAccount</h5></Nav.Link>
              <Nav.Link href="/Aboutus"><h5>About us</h5></Nav.Link>
              <Nav.Link href="/Contactus"><h5>Contact us</h5></Nav.Link>
              <Nav.Link href="/Feedback"><h5>Feedback</h5></Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
              {!localStorage.getItem("Token") && (
                <Nav.Link href="/signin" >
                  Sign In
                </Nav.Link>
              )}
              {localStorage.getItem("Token") && (
                <Nav.Link href="/" onClick={() => signOut()} >
                  Sign Out
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}
export default Header;        