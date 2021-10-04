import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const AboutELearning = () => {
    return (
        <Row className="my-5">
            <Col md={6}>
                <h1>Know About <span className="text-danger">E-Learn</span> Learning Platform</h1>
                <div className="my-4">
                    <h5 className="mb-1">Cost Effective</h5>
                    <p>Learnup is one of the cost effective learning centres from last decade.</p>
                </div>
                <div className="my-4">
                    <h5 className="mb-1">Improves Performance And Productivity</h5>
                    <p>Learnup helps learners to train quicker and the easiest way to increase performance.</p>
                </div>
                <div className="my-4">
                    <h5 className="mb-1">Saves Time</h5>
                    <p>Our instructor uploads the materials in time and shares the content with the learners in time.</p>
                </div>
                <Button className="px-3 py-2 btn-danger"> Know More</Button>
            </Col>
            <Col md={6}>
                <img src="https://learnup.smartdemowp.com/wp-content/uploads/2021/05/edu_2.png" alt="" width="90%" />
            </Col>
        </Row>
    );
};

export default AboutELearning;