import React, { Component } from 'react'
import { Form, Button, Col, Row, Container } from 'react-bootstrap'
import axios from 'axios'

export class signin extends Component {
  constructor (props) {
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

    axios.post('http://localhost:5000/users/signin', this.state)
      .then((res) => {
        console.log(res.status)
        if(res.status === 200){
        window.location = '/'
      }
      else{
        window.alert('There was error logging in')
      }
    })
    .catch((res) => {console.log(res); console.log(res.status); window.alert('There was error logging in')})
      /*.then(res => console.log(res.data))*/

    // window.location = '/'
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
