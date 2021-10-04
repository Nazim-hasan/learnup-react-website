import React from 'react';
import { Col } from 'react-bootstrap';

const Instructor = (props) => {
    const {name,job,img}=props.instructor;
    return (
        <Col md={3}>
            <div  className="shadow-lg my-4 py-4  border-rounded">
                <img className="rounded-circle" src={img} alt="" width="80" height="80"/>
                <h6 className="mt-2">{name}</h6>
                <small>{job}</small>
            </div>
        </Col>
    );
};

export default Instructor;