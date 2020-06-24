import React, { Component } from 'react'
import './App.css'
import welcome from './components/welcome'
import Navbar from './components/navbar'
import sin from './components/signin'
import { HashRouter, Switch, Route } from 'react-router-dom'
import sup from './components/signup'
import home from './components/home'

class App extends Component {
  render () {
    return (
      <HashRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route path='/' component={welcome} exact />
            <Route path='/signin' component={sin} />
            <Route path='/signup' component={sup} />
            <Route path='/home' component={home} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App
