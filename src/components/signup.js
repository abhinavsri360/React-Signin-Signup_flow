import React, { Component } from 'react'
import { Form, Button, Col, Row, Container, InputGroup } from 'react-bootstrap'
import Loading from './loading'
// import axios from 'axios'

export class signup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
    this.submitHandler = this.submitHandler.bind(this)
  }

  changeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) =>{
    e.preventDefault()

    this.props.registerUser(this.state)
    .then( res => {
      if(typeof res === 'undefined'){
        window.location = '/#/signin'
      }
      else{
        window.alert('There was error creating account')
      }
    })
    // window.location = '/'
  }

  render () {
    if (this.props.isAuthenticated) {
      return (
        window.location = '/'
      )
    } else {
      if (!this.props.isLoading) {
        const { username, password } = this.state
        return (
          <Container>
            <Row style={{ padding: 20 }}>
              <Col md={{ span: 6, offset: 3 }}>
                <Form onSubmit={this.submitHandler}>
                  <Form.Group as={Row} controlId='formHorizontalName'>
                    <Form.Label column sm={2}>
        Username
                    </Form.Label>
                    <Col sm={10}>
                      <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                        <Form.Control autoFocus='true' autoComplete='off' type='name' name='username' placeholder='icognito' value={username} onChange={this.changeHandler} />
                      </InputGroup.Prepend>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId='formHorizontalPassword'>
                    <Form.Label column sm={2}>
        Password
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type='password' name='password' placeholder='******' value={password} onChange={this.changeHandler} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Button type='submit' variant='dark'>Sign up</Button>
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        )
      } else {
        return (
          <Container>
            <Row style={{ padding: 200 }}>
              <Col md={{ span: 6, offset: 3 }}>
                <Loading />
              </Col>
            </Row>
          </Container>
        )
      }
    }
  }
}

export default signup
