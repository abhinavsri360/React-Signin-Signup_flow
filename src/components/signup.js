import React, { Component } from 'react'
import { Form, Button, Col, Row, Container } from 'react-bootstrap'
//import axios from 'axios'

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

    window.location = '/'

    /*axios.post('http://localhost:5000/user/register', this.state)
      .then((res) => {
        if(res.status === 200){
        window.location = '/'
      }
      else{
        window.alert('There was error creating account')
      }
    })
    .catch((res) => window.alert('There was error creating account'))
      /*.then(res => console.log(res.data))*/

    // window.location = '/'*/
  }

  render () {
    const { username, password } = this.state
    return (
      <Container>
      <Row style={{padding: 20}}>
      <Col md={{ span: 6, offset: 3}}>
        <Form onSubmit={this.submitHandler}>
            <Form.Group as={Row} controlId='formHorizontalName'>
              <Form.Label column sm={2}>
        Username
              </Form.Label>
              <Col sm={10}>
                <Form.Control type='name' name='username' placeholder='Username' value={username} onChange={this.changeHandler} />
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
                <Button type='submit'>Sign up</Button>
              </Col>
            </Form.Group>
          </Form>
          </Col>
      </Row>
      </Container>
    )
  }
}

export default signup
