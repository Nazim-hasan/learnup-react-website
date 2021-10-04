import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
    const [instructors ,setInstructors]=useState([]);
    useEffect(()=>{
        fetch('./Instructors.JSON')
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])
    return (
        <Container>
            <div className="text-center mx-auto">
                <p className="m-0">Meet Instructors</p>
                <h3 className="fw-bolder"><span className="text-danger">Top & Famous </span>Instructor In Your City</h3>
                <Row className="g-4">
                    {
                        instructors.map(instruct => <Instructor key={instruct.name} instructor={instruct}/>)
                    }
                </Row>
            </div>
        </Container>
    );
};

export default Instructors;