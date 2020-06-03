import React, { Component } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import './css/signin.css'

export class signin extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: ''
    }
  }

  changeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) =>{
    e.preventDefault()
    
    axios.get('https://jsonplaceholder.typicode.com/posts',this.state)
    .then(res =>{
      console.log(res)
    })
    .catch(error =>{
      console.log(error)
    })
  }

  render () {
    const { email, password } = this.state
    return (
      <div className='form1'>
        <Form>
          <Form.Group as={Row} controlId='formHorizontalEmail'>
            <Form.Label column sm={2}>
      Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type='email' placeholder='Email' name='email' value={email} onChange={this.changeHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='formHorizontalPassword'>
            <Form.Label column sm={2}>
      Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type='password' placeholder='Password' name='password' value={password} onChange={this.changeHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type='submit' onSubmit={this.submitHandler}>Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default signin
