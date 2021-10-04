import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="mt-5 mb-2">
            <Container>
                <Row>
                    <Col md={3}>
                        <img className="mb-2" src="./logo.png" alt="" width='130px'/>
                        <p><small>4967 Sardis Sta, Victoria 8007, Montreal.</small></p>
                        <p><small>+1 246-345-0695</small></p>
                        <p><small>Info@Learnup.Com</small></p>
                    </Col>
                    <Col md={3}>
                        <h4>Navigations</h4>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Services</p>
                        <p>FAQs Page</p>
                    </Col>
                    <Col md={3}>
                        <h4>Help & Support</h4>
                        <p>Documentation</p>
                        <p>Live Chat</p>
                        <p>Privacy</p>
                        <p>Mail Us</p>
                    </Col>
                    <Col md={3}>
                        <h4>Download Apps</h4>
                        <div className="border-3">
                            <h6>Google Play</h6>
                            <p><small>Get it Now</small></p>
                        </div>
                        <div className="border-3">
                            <h6>App Store</h6>
                            <p><small>Now it Available</small></p>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;