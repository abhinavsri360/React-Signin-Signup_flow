import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  submitHandler = (e) =>{
    e.preventDefault()

    this.props.logoutUser()

  }

  render () {
    if (this.props.isAuthenticated) {
      return (
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Navbar.Brand><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to='/'>Signinup</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto' />
            <Nav>
              <Nav.Link><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to='/home'>Home</Link></Nav.Link>
              <Nav.Link><Link style={{ textDecoration: 'inherit', color: 'inherit' }} onClick={this.submitHandler}>Logout</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    } else {
      return (
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Navbar.Brand><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to='/'>Signinup</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto' />
            <Nav>
              <Nav.Link><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to='/signin'>Signin</Link></Nav.Link>
              <Nav.Link><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to='/signup'>Signup</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }
}

export default navbar
