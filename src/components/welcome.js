import React, { Component } from 'react'
import './css/welcome.css'

class home extends Component {
  render () {
    if (this.props.isAuthenticated) {
      return (
        <body className='body'>
          <div className='welcome'>
            <h1 className='neon'>Welcome! {this.props.user.username}</h1>
          </div>
        </body>
      )
    } else {
      return (
        <body className='body'>
          <div className='welcome'>
            <h1 className='neon'>Welcome!</h1>
          </div>
        </body>
      )
    }
  }
}

export default home
