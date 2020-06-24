import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import sin from './signin'
import welcome from './welcome'
import sup from './signup'
import home from './home'
import error from './error'

class header extends Component {
  render () {
    return (
      <Switch>
        <Route path='/' component={welcome} exact />
        <Route path='/signin' component={sin} />
        <Route path='/signup' component={sup} />
        <Route path='/home' component={home} />
        <Route path='/error' component={error} />
      </Switch>
    )
  }
}

export default header
