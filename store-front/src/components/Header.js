import React from 'react'
import { Container, Row, Col,Navbar,Nav } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
const Header = () => {
    return (
      <Navbar bg="dark"  variant="dark" expand="lg" >
        <Container>
        <Navbar.Brand>ProJewels</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <Nav.Link href="#cart">
                <Icon.Cart/> Cart</Nav.Link>
              <Nav.Link href="#login">
                <Icon.PersonFill/>Sign In</Nav.Link>
          </Nav>
      </Navbar.Collapse>   
      </Container>   
    </Navbar> 
    )
}

export default Header
