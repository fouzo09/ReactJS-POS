
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../assets/login.css';

export default function Products() {


   
  return (
    <Container fluid className='login--page'>
        <Row className='login--container d-flex align-items-center justify-content-center'>
            <Col sm={4} style={{backgroundColor: '#fff', minHeight: '35%', borderRadius: '5px'}}>
                <h1>Products</h1>                     
            </Col>
        </Row>
    </Container>
  )
}