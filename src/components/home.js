import React, { Component } from 'react'

class home extends Component {
  render () {
    if (!this.props.isAuthenticated) {
      return (
        window.location = '/#/signin'
      )
    } else {
      return (
        <div>
          <h1>Home</h1>
        </div>
      )
    }
  }
}

export default home
