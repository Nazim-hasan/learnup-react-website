import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AllCourses from '../AllCourses/AllCourses';
import Service from '../Service/Service';
const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./Services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <Container className="my-5 text-white">
            <Row >
                <Col sm={12} md={4}>
                    <div>
                        <h5 className="fw-bold text-danger">Services</h5>
                        <h1 className="fw-bold">What We Provide To You</h1>
                        <small>We wanted something with scale, credibility, and something we didn't have to construct ourselves..</small>
                        <Button className="px-3 py-2 btn-danger mt-3">VIEW ALL SERVICES</Button>
                    </div>
                </Col>
                <Col md={8}>
                    <Row>
                        {
                            services.map(service=> <Service key={service.name} Service={service}/>)
                        }
                    </Row>
                        
                </Col>
            </Row>
            <AllCourses></AllCourses>
        </Container>
    );
};

export default Services;