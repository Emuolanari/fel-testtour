import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import Menu from './inc/Menu';
//import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [groupSize, setGroupSize] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        submitData();
    }

    const submitData = async () => {
        try {
            const res = await fetch('http://localhost:8000/api/v1/tours/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    duration: duration,
                    maxGroupSize: groupSize,
                    difficulty: difficulty,
                    price: 450,
                    summary: 'Go round paris',
                    imageCover: 'frameElement.jpg'
                })
            })
            const data = res.json();
            console.log(data);
        }

        catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <Menu />
            <Container>
                <Row>
                    <Form className="mb3" onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" onChange={(e) => setName(e.target.value)} placeholder="enter name"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="name">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control type="text" onChange={(e) => setDuration(e.target.value)} placeholder="enter duration"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>maxGroupSize</Form.Label>
                            <Form.Control type="text" onChange={(e) => setGroupSize(e.target.value)} placeholder="enter size"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="password" className="mb-3">
                            <Form.Label>Difficulty</Form.Label>
                            <Form.Control type="text" onChange={(e) => setDifficulty(e.target.value)} placeholder="enter difficulty"></Form.Control>
                        </Form.Group>
                        <Button variant="success" type="submit">Submit</Button>
                    </Form>
                </Row>
            </Container>

        </div>
    )
}

export default Signup
