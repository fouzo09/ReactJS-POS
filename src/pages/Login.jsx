import React, { useRef, useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../assets/login.css';
import AuthContext from '../contexts/AuthContext';
import { option } from '../global';

export default function Login() {

    const loginRef = useRef();
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const { login } = useContext(AuthContext);


    // useEffect(()=>{

    //     const getUser = async ()=>{
    //       const isLogged = await fetch('http://localhost:5000/api/1.0/auth-google/success', option);
    //       setUser(isLogged);
    //     };
    //     getUser();
    //   }, []);

    const handlePseudo = (event)=>{
        setPseudo(event.target.value);
        setErrors({...errors, pseudo: ''});
        if(event.target.value.length <= 3){
            setErrors({...errors, pseudo: 'Le pseudo doit avoir au moins 3 caracteres.'});
        }
        
    }

    const handlePassword = (event)=>{
        setErrors({...errors, password: ''});
        setPassword(event.target.value);
        if(event.target.value.length <= 6){
            setErrors({...errors, password: 'Le mot de passe doit avoir au moins 6 caracteres.'});
        }
    }

    const handleLogin = (event)=>{
        event.preventDefault();
        const credentials = {pseudo: pseudo, password: password};
        login(credentials);
    }

    const authWithGoogle = (event)=>{
        event.preventDefault();
        window.open('http://localhost:5000/api/1.0/auth-google', '_self');
    }
  return (
    <Container fluid className='login--page'>
        <Row className='login--container d-flex align-items-center justify-content-center'>
            <Col sm={4} style={{backgroundColor: '#fff', minHeight: '35%', borderRadius: '5px'}}>
                <Form ref={loginRef}  onClick={handleLogin}>
                    <Form.Group className="mb-3 mt-3">
                        <Form.Label>Pseudo</Form.Label>
                        <Form.Control type="text" value={pseudo} onChange={handlePseudo} placeholder="Votre pseudo" />
                        <span className='errors'>{(errors.pseudo) ? errors.pseudo : ''}</span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password" value={password} onChange={handlePassword} placeholder="Votre mot de passe" />
                        <span className='errors'>{(errors.password) ? errors.password : ''}</span>
                    </Form.Group>
                    
                    <div className="d-grid">
                        <Button variant="dark" type="submit" className='btn--submit mb-3'>
                            Connexion
                        </Button>
                      
                        <Button onClick={authWithGoogle}  className='btn--google mb-3'>
                            Google
                        </Button>
                    </div>
                </Form>                         
            </Col>
        </Row>
    </Container>
  )
}