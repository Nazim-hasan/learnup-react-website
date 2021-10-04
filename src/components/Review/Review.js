import React from 'react';
import { Container } from 'react-bootstrap';

const Review = () => {
    return (
        <Container className="my-5">
            <div className="text-center mx-auto">
                <p className="m-0">What People Say?</p>
                <h3 className="fw-bolder"><span className="text-danger">Reviews </span>By Our Success & Top Students</h3>
                <img className="rounded-circle" src="https://learnup.smartdemowp.com/wp-content/uploads/2021/05/user-2.jpg" alt="" width="88" height="88"/>
                <h6 className="mt-2">Rout Millance</h6>
                <p className="mb-1"><small>Web Design</small></p>
                <div className="w-75 mx-auto">
                    <small className="fw-light fst-italic">We wanted something with scale, credibility, and something we didn't have to construct ourselves. Learnup is a platform that not only provides instruction from prominent schools, but also allows you to track your progress. We believe you will understand our course easily.</small>
                </div>

            </div>
        </Container>
    );
};

export default Review;