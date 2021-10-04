import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <Row>
                <Col md={6} className="d-flex align-items-center">
                    <div>
                        <h1 className="fw-bold fs-1 lh-base text-white">Study Beyond The Classroom</h1>
                        <p className="text-white">Develop your talents by taking courses, earning certificates, and earning degrees from Learnup world-class universities and companies instructors who are capable of building you.</p>
                        <Button className="px-3 py-2 btn-danger">Learn More</Button>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="d-flex justify-content-end pe-5 pt-4">
                        <img src="./st-3.png" alt="" width="250px"/>
                    </div>
                </Col>
            </Row>
    );
};

export default Banner;