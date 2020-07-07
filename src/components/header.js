import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import sin from './signin'
import welcome from './welcome'
import sup from './signup'
import home from './home'
import error from './error'
import { connect } from 'react-redux'
import { registerUser, loginUser, logoutUser } from '../redux/ActionCreators'

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => ({
  registerUser: (creds) => dispatch(registerUser(creds)),
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser())
})

class header extends Component {
  render () {
    const Signup = () => {
      return (
        <sup auth={this.props.auth} registerUser={this.props.registerUser} />
      )
    }
    const Signin = () => {
      return (
        <sin auth={this.props.auth} loginUser={this.props.loginUser} />
      )
    }
    return (
      <Switch>
        <Route path='/' component={welcome} exact />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/home' component={home} />
        <Route path='/error' component={error} />
      </Switch>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(header))
