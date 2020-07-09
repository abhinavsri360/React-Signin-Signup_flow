import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Signin from './signin'
import Welcome from './welcome'
import Signup from './signup'
import Home from './home'
import error from './error'
import Navbar from './navbar'
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
    const SignupPage = () => {
      return (
        <Signup isLoading={this.props.auth.isLoading} registerUser={this.props.registerUser} />
      )
    }
    const SigninPage = () => {
      return (
        <Signin isLoading={this.props.auth.isLoading} loginUser={this.props.loginUser} />
      )
    }
    const HomePage = () => {
      return (
        <Home isAuthenticated={this.props.auth.isAuthenticated} />
      )
    }
    const WelcomePage = () => {
      return (
        <Welcome user={this.props.auth.user} isAuthenticated={this.props.auth.isAuthenticated} />
      )
    }
    return (
      <div>
        <Navbar isAuthenticated={this.props.auth.isAuthenticated} logoutUser={this.props.logoutUser} />
        <Switch>
          <Route path='/' component={WelcomePage} exact />
          <Route path='/signin' component={SigninPage} />
          <Route path='/signup' component={SignupPage} />
          <Route path='/home' component={HomePage} />
          <Route path='/error' component={error} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(header))
