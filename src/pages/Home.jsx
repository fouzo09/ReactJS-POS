
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../assets/login.css';
import AuthContext from '../contexts/AuthContext';

export default function Home() {

  const {getLogout} = useContext(AuthContext);

  const logout = (event)=>{
    event.preventDefault();
    getLogout();
  }




   
  return (
    <Container fluid className='login--page'>
        <Row className='login--container d-flex align-items-center justify-content-center'>
            <Col sm={4} style={{backgroundColor: '#fff', minHeight: '35%', borderRadius: '5px'}}>
                <h1>Home</h1>   
                <a href="#" onClick={logout}>Logout</a>                  
            </Col>
        </Row>
    </Container>
  )
}