import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import Navbar from './components/navbar'
import Header from './components/header'

class App extends Component {
  render () {
    return (
      <HashRouter>
        <Navbar />
        <Header />
      </HashRouter>
    )
  }
}

export default App
/* mongod --dbpath=data --bind_ip 127.0.0.1 */
