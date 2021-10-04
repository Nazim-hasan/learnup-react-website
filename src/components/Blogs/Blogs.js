import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import Instructors from '../Instructors/Instructors';

const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('./Blogs.JSON')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <Container className="my-5">
            <div className="text-center mx-auto">
                <h3 className="fw-bolder mb-1">Latest News & <span className="text-danger">Articles</span></h3>
                <small>There are some news about our courses and articles</small>
            </div>
            <Row className="g-4 mt-2 mb-5">
                {
                    blogs.map(blg=> <Blog key={blg.title} blog={blg}/>)
                }
            </Row>
            <Instructors></Instructors>
        </Container>
    );
};

export default Blogs;