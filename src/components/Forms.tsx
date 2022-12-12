import React, { useState } from 'react';
import {  Col, Form, Container } from 'react-bootstrap';
import { Box, Title, Button } from './styles';


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
    <Box className="container mt-5">
        <Title>Formulário</Title>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
           <Form as={Col} md="4" controlId="validationCustom01">
                <Form.Label className='label'>Informações</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Dados profissionais"
                        as="textarea" rows={6} 
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form>
            <Form as={Col} md="4" controlId="validationCustom02">
                <Form.Label className='label'>Apontamentos</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="Apontamentos"
                    as="textarea" rows={3}
                    />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form>
            
            <Form className="mb-3">
                <Form.Check
                required
                label="Todos os campos estão preenchidos?"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                />
            </Form>
            <Button type="submit">Enviar</Button>
        </Form>
    </Box>
    
  );
}