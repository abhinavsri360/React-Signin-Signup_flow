import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import Signin from './signin'
import Welcome from './welcome'
import Signup from './signup'
import Home from './home'
import Pagenotfound from './404'
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
        <Signup isAuthenticated={this.props.auth.isAuthenticated} isLoading={this.props.auth.isLoading} registerUser={this.props.registerUser} />
      )
    }
    const SigninPage = () => {
      return (
        <Signin isAuthenticated={this.props.auth.isAuthenticated} isLoading={this.props.auth.isLoading} loginUser={this.props.loginUser} />
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
          <Route path='/404' component={Pagenotfound} />
          <Redirect to='/404' />
        </Switch>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(header))
