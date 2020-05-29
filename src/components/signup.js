import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import './css/signin.css'

function signup () {
  return (
    <div className='form1'>
      <Form>
        <Form.Group as={Row} controlId='formHorizontalName'>
          <Form.Label column sm={2}>
      Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type='name' placeholder='Name' />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId='formHorizontalEmail'>
          <Form.Label column sm={2}>
      Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type='email' placeholder='Email' />
          </Col>
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
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
            <Button type='submit'>Sign up</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default signup
