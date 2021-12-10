import React from 'react';
import Felicia from './../images/felicia.jpeg';
import { Container, Row, Col } from 'react-bootstrap';

const Bio = () => {
    return (
        <Container className="mb-5 border-bottom">
            <Row>
                <Col>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                    It was popularised in the 1960s.
                </Col>
                <Col >
                    <img src={Felicia} height="100%" width="100%" alt="babe" />
                </Col>
            </Row>

        </Container>


    )
}

export default Bio
