import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
const Courses = () => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('./Courses.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[]);
    return (
        <div className="my-5">
            <h5>Featured Courses</h5>
            <Row className="g-3 ">
                {
                courses.filter((item, index) => index<4).map(cours =>
                <Course key={cours.name} course={cours}></Course>)
                }
        </Row>
        </div>
    );
};

export default Courses;