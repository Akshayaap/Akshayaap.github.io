import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import RPItem  from './RPItem';

const RighPane=()=>{
    return (
        <Container>
                    <Row className="rp-item">
                        <Col>   
                            <RPItem arg>

                            </RPItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                        
                        </Col>
                    </Row>
                    </Container>
    )
}

export default RighPane;