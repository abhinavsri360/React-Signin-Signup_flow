import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './components/header'
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/store'

const store = ConfigureStore()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <HashRouter>
          <Header />
        </HashRouter>
      </Provider>
    )
  }
}

export default App
/* mongod --dbpath=data --bind_ip 127.0.0.1 */
