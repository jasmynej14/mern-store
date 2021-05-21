import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Row, Col,Navbar,Nav } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
const Header = () => {
    return (
      <Navbar bg="dark"  variant="dark" expand="lg" >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ProJewels</Navbar.Brand>
          </LinkContainer>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/cart">
                <Nav.Link href="#cart">
                  <Icon.Cart/> Cart
                </Nav.Link>
            </LinkContainer>
              <LinkContainer to="/login">
                  <Nav.Link href="#login">
                    <Icon.PersonFill/>Sign In
                  </Nav.Link>
              </LinkContainer>
              
          </Nav>
      </Navbar.Collapse>   
      </Container>   
    </Navbar> 
    )
}

export default Header
