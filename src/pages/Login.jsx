import React, { useRef, useContext, useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/login.css';
import AuthContext from '../contexts/AuthContext';

export default function Login() {

    const loginRef = useRef();
    const [pseudo, setPseudo] = useState('mafouzdiallo@gmail.com');
    const [password, setPassword] = useState('123456');
    const [errors, setErrors] = useState({});
    const { login, isLogged } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        
    }, []);

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

    const handleLogin = async (event)=>{
        event.preventDefault();
        if(pseudo && password){
            const credentials = {email: pseudo, password: password};
            await login(credentials);
            navigate('/');
        }else{
            setErrors({...errors, message: 'Tous les champs sont obligatoires.'});
        }
    }
  return (
    <Container fluid className='login--page'>
        <Row className='login--container d-flex align-items-center justify-content-center'>
            <Col sm={4} style={{backgroundColor: '#fff', minHeight: '35%', borderRadius: '5px'}}>
                <Form ref={loginRef}  onClick={handleLogin}>
                    <span className='errors'>{(errors.message) ? errors.message : ''}</span>
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
                    </div>
                </Form>                         
            </Col>
        </Row>
    </Container>
  )
}