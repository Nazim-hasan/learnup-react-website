import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
            <Container fluid>
            <Navbar.Brand as={NavLink} to='/home'><img src="./logo.png" alt="" width="120px"  /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0"style={{ maxHeight: '100px' }}navbarScroll>
                    <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About us</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </Container>
    );
};

export default Header;