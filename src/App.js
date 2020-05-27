import React from 'react'
import './App.css'
import Home from './components/home'
import Navbar from './components/navbar'
import sin from './components/signin'
import { HashRouter, Switch, Route } from 'react-router-dom'
import sup from './components/signup'

function App () {
  return (
    <HashRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signin' component={sin} />
          <Route path='/signup' component={sup} />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App
