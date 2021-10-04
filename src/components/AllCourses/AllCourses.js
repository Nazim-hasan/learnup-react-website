import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const AllCourses = () => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('./Courses.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <Container className="my-5">
            <h4><span className="text-danger text-center">Featured</span> Courses By Professional Instructor</h4>
            <Row className="mt-2 g-4">
                {
                courses.map(crs=> <Course key={crs.name} course={crs}></Course>)
                }
            </Row>
        </Container>
    );
};

export default AllCourses;