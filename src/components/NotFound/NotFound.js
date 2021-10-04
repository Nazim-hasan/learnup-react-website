import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container className="my-5 text-white">
            <div className="text-center mx-auto my-auto">
                <h1 className="fs-1">404</h1>
                <h2>Page Not Found</h2>
                <p>We’re unable to find a page you are looking for, Try later or click the button.</p>
                <NavLink to="/home"><Button className="px-3 py-2 btn-danger">Back to Home</Button></NavLink>
            </div>
        </Container>
    );
};

export default NotFound;