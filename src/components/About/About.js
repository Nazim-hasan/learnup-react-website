import React from 'react';
import { Container } from 'react-bootstrap';
import AboutELearning from '../AboutELearning/AboutELearning';
import Instructors from '../Instructors/Instructors';
import Review from '../Review/Review';

const About = () => {
    return (
        <Container className="text-white">
            <AboutELearning></AboutELearning>
            <Instructors></Instructors>
            <Review></Review>
        </Container>
    );
};

export default About;