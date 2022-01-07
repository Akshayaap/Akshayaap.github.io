
import React from 'react';
import "./home.css"
import { Container,Row,Col } from 'react-bootstrap';
import LeftPane from '../components/homepage/left-pane/LeftPane';
import  RightPane from '../components/homepage/right-pane/RightPane';

const Home=()=>{

    return(
        <Container className="home" fluid>
            <Row>
                <Col lg={4} className='test'  >
                <LeftPane />
                </Col>
                <Col lg={8} className='test'>
                    <RightPane />
                    
                </Col>
            </Row>
        </Container>

        
    );
}

export default Home;