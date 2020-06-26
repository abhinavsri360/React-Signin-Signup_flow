import React, { Component } from 'react'
import { Form, Button, Col, Row, Container } from 'react-bootstrap'
import axios from 'axios'

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
    console.log(this.state.email)
    console.log(this.state.password)
    axios.get('http://localhost:5000/users/login', this.state)
      .then((res) => {
        if(res.status === 200){
        window.location = '/'
      }
      else{
        window.alert('There was error logging in ')
      }
    })
    .catch((res) => window.alert('There was error logging in'))
  }

  render () {
    const { email, password } = this.state
    return (
      <Container>
      <Row style={{padding: 20}}>
      <Col md={{ span: 6, offset: 3}}>
        <Form onSubmit={this.submitHandler}>
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
              <Button type='submit'>Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </Col>
      </Row>
      </Container>
    )
  }
}

export default signin
