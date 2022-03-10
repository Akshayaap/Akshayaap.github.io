import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RPItem from './RPItem';
import './rightpane.css';

const RighPane = () => {





    const [items, setItems] = React.useState([['M Tech', 'Ahemedabad', '2022'],
    ['item4', 'item5', 'item6'],
    ['item7', 'item8', 'item9'],
    ['item10', 'item11', 'item12'],
    ['item13', 'item14', 'item15'],
    ['item16', 'item17', 'item18'],
    ['item19', 'item20', 'item21'],
    ['item22', 'item23', 'item24'],
    ['item25', 'item26', 'item27'],
    ['item28', 'item29', 'item30'],
    ['item31', 'item32', 'item33'],
    ['item34', 'item35', 'item36'],
    ['item37', 'item38', 'item39'],
    ['item40', 'item41', 'item42'],]);


    return (
        <Container className='right'>

            {
                items.map((item, index) => {
                    return (

                        <Row key={index}> 
                            <Col>
                                <RPItem  arg1={item[0]} arg2={item[1]} arg3={item[2]} />
                            </Col>
                        </Row>

                    );
                })
            }
        </Container >
    );
}

export default RighPane;