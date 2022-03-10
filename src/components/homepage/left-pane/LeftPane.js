import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import Profile from './Profile';
import './leftpane.css';

const LeftPane = () => {
    return (
        <Container >
        <Row >
            <Col className="left-top">
                <Profile />
            </Col>
        </Row>
        <Row>
            <Col className="left-bottom">
                M tech student
                <br />
                Software Engineer
            </Col>

        </Row>
        </Container>
        
    );
}

export default LeftPane;