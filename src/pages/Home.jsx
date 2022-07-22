
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AuthContext from '../contexts/AuthContext';

export default function Home() {

  const {getLogout} = useContext(AuthContext);

  const logout = (event)=>{
    event.preventDefault();
    getLogout();
  }
   
  return (
    <Container fluid >
        <Row>
            <Col sm={12}>
                <h1>Home</h1>   
                <a href='/' onClick={logout}>Logout</a>         
            </Col>
        </Row>
    </Container>
  )
}