import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import './css/signin.css'

function signin () {
  return (
    <div className='form1'>
      <Form>
        <Form.Group as={Row} controlId='formHorizontalEmail'>
          <Form.Label column sm={2}>
      Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type='email' placeholder='Email' />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId='formHorizontalPassword'>
          <Form.Label column sm={2}>
      Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type='password' placeholder='Password' />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type='submit'>Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default signin
