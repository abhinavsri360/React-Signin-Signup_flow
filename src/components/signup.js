import React, { Component } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import './css/signin.css'

export class signup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      users: []
    }
  }

  changeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) =>{
    e.preventDefault()
    
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    console.log(user)

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data))

    window.location = '/'
  }

  render () {
    const { username, email, password } = this.state
    return (
      <div className='form1'>
        <Form>
          <Form.Group as={Row} controlId='formHorizontalName'>
            <Form.Label column sm={2}>
      Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control type='name' name='username' placeholder='Name' value={username} onChange={this.changeHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='formHorizontalEmail'>
            <Form.Label column sm={2}>
      Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type='email' name='email' placeholder='Email' value={email} onChange={this.changeHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId='formHorizontalPassword'>
            <Form.Label column sm={2}>
      Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type='password' name='password' placeholder='Password' value={password} onChange={this.changeHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type='submit' onClick={this.submitHandler}>Sign up</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default signup
