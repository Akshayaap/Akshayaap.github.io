
import React from 'react';
import "./home.css"
import { Container,Row,Col } from 'react-bootstrap';
import LeftPane from '../components/homepage/left-pane/LeftPane';
import  RightPane from '../components/homepage/right-pane/RightPane';

const Home=()=>{

    return(
        <Container className="home">
            <Row>
                <Col md={4} className='test'  >
                
                </Col>
                <Col md={8} className='test'>
                    
                    
                </Col>
            </Row>
        </Container>

        
    );
}

export default Home;