import React from 'react';
import { Col } from 'react-bootstrap';

const Service = (props) => {
    const {name,decShort,icon}=props.Service;
    return (
        <Col md={4} className="d-flex justify-content-center">
            <div className="me-2"><img src={icon} alt="" width="40px"/></div>
            <div>
                <h5>{name}</h5>
                <p><small>{decShort}</small></p>
            </div>
        </Col>
    );
};

export default Service;