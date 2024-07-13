import React from 'react';
import { Button, Container, Card, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const HomePage = () => {
    return (
        <Container 
            className="text-center my-5"
            style={{ backgroundColor: 'tan', color: '#black', padding: '30px', borderRadius: '50px', border: '1px solid black' }}
        >
            <Image src='image.jpg' className="mb-3" alt='Batman'/>
            <h1>Welcome to Our Store</h1>
            <p>Your one-stop shop for all things comics</p>
            <Button variant="primary" size="lg" className="shadow-sm mb-3">Shop Now</Button>
            <Row>
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title>Featured Product(s)/Promotions</Card.Title>
                            <Button variant="primary">Explore</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;