import React from 'react';
import { Col } from 'react-bootstrap';

const Course = (props) => {
    const {name,price,duration,view,img}=props.course;
    return (
        <Col sm={12} md={6}>
            <div className="d-flex">
                <div className="me-3">
                    <img className="rounded" src={img} alt="" width="250px " height="150px" />
                </div>
                <div>
                    <h5 className="fw-normal">{name}</h5>
                    <div>
                        <p>{view} Views</p>
                        <div className="d-flex">
                        <p className="text-danger me-2">{duration} Hour</p>
                        <h5>$ {price}.00</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Course;