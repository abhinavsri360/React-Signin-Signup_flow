import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './css/signin.css'

function signin () {
  return (
    <div className='form1'>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
      We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Remember me' />
        </Form.Group>
        <Button variant='primary' type='submit'>
    Sign in
        </Button>
      </Form>
    </div>
  )
}

export default signin
