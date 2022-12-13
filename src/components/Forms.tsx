import React, { useState } from 'react';
import {  Col, Form } from 'react-bootstrap';
import { Container, Title, Button, Area } from './styles';


export default function Forms() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container >
        <Title>Formulário</Title>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
           <Form as={Col} md="12" controlId="validationCustom01">
              <Area>
              <Form.Label className='label' >Dados do Profissioinal:</Form.Label>
                    <Form.Control className='input'
                        required
                        type="text"
                        placeholder="Dados pessoais"
                        as="textarea" rows={6} 
                    />
                    <Form.Control.Feedback>Preenchido!</Form.Control.Feedback>
              </Area>
               
            </Form>
            <Form as={Col} md="12" controlId="validationCustom02">
              <Area>
              <Form.Label className='label'>Informações:</Form.Label>
                    <Form.Control className='input'
                    required
                    type="text"
                    placeholder="Apontamentos"
                    as="textarea" rows={3}
                    />
                <Form.Control.Feedback>Preenchido!</Form.Control.Feedback>
              </Area>
                
            </Form>
            
            {/* <Form className="mb-3">
                <Form.Check
                required
                label="Todos os campos estão preenchidos."
                feedback="Verifique se os campos estão preechidos"
                feedbackType="invalid"
                />
            </Form> */}
            <Button type="submit">Enviar</Button>
        </Form>
    </Container>
    
  );
}