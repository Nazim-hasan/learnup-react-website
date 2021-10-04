import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <Container>
            <Navbar className="custom-bg "  expand="lg">
            <Container fluid>
            <Navbar.Brand className='text-white fs-3' as={NavLink} to='/home'>Learn <span className="text-danger">Up</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0 "style={{ maxHeight: '100px' }}navbarScroll>
                    <Nav.Link className="text-white" as={NavLink} to="/home">Home</Nav.Link>
                    <Nav.Link className="text-white" as={NavLink} to="/services">Services</Nav.Link>
                    <Nav.Link className="text-white" as={NavLink} to="/blogs">Blogs</Nav.Link>
                    <Nav.Link className="text-white" as={NavLink} to="/about">About us</Nav.Link>
                </Nav>
                <Button className="px-3 py-2 btn-danger me-2">Signin</Button>
                <Button className="px-3 py-2 btn-dark">Sign up</Button>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </Container>
    );
};

export default Header;