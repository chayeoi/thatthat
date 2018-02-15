import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { LoginPage, MainPage } from 'pages'
import store from 'ducks'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={MainPage} />
            <Route path="/login" component={LoginPage} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
