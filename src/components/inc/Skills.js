import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import Mug from './../images/mugs.jpg';
import Education from './../images/education.jpg';


const Skills = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img src={Mug} variant="top" />
                        <Card.Body>
                            <Card.Title>
                                My projects
                            </Card.Title>
                            <Card.Text>
                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                                consectetu... Lorem Ipsum is simply dummy
                                text of the printing and typesetting industry.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Img src={Education} variant="top" />
                        <Card.Body>
                            <Card.Title>
                                Education History
                            </Card.Title>
                            <Card.Text>
                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                                consectetu... Lorem Ipsum is simply dummy
                                text of the printing and typesetting industry.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Img src={Mug} variant="top" />
                        <Card.Body>
                            <Card.Title>
                                Photography
                            </Card.Title>
                            <Card.Text>
                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                                consectetu... Lorem Ipsum is simply dummy
                                text of the printing and typesetting industry.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills
