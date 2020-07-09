import React, { Component } from 'react'

class home extends Component {
  render () {
    if (this.props.isAuthenticated) {
      return (
        <div>
          <h1>Welcome! {this.props.username}</h1>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Welcome!</h1>
        </div>
      )
    }
  }
}

export default home
