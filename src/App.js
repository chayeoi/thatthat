import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import reducer from 'ducks'
import { LoginPage } from 'pages'


const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware),
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/login" component={LoginPage} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
