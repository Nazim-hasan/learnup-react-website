import React from 'react';
import { Col } from 'react-bootstrap';

const Blog = (props) => {
    const {title,sector,desc,view,publishDate,img}=props.blog;
    return (
        <Col md={4}>
            <div className="shadow-lg rounded">
                <img className="rounded-top img-fluid" src={img} alt="" width="350" height="247"/>
                <div className="ps-4 my-2">
                    <p><span className="badge bg-danger">{sector}</span></p>
                    <h6 className="fw-bolder">{title}</h6>
                    <small className="fw-light">{desc}</small>
                    </div>
                    <hr className="mb-1"/>
                    <div className="d-flex justify-content-between align-items-center">
                        <img className="" src="https://logodix.com/logo/1707081.png" alt="" width="50px" />
                        <p>{view}</p>
                        <p className="pe-2">{publishDate}</p>
                    </div>
            </div>
        </Col>
    );
};

export default Blog;