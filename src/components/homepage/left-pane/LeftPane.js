import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import Profile from './Profile';

const LeftPane = () => {
    return (
        <Container>
        <Row>
            <Col>
                <Profile />
            </Col>
        </Row>
        <Row>
            <Col>
                <div>
                    Right Pane
                </div>
            </Col>

        </Row>
        </Container>
        
    );
}

export default LeftPane;