import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <Courses></Courses>
        </Container>
    );
};

export default Home;