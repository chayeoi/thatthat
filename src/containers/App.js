import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'ducks'
import {
  LoginPage,
  MainPage,
  MyPage,
  NotFoundPage,
  CoursePage,
  CourseDetailPage,
} from 'pages'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/courses" component={CoursePage} />
            <Route path="/course/:id/:tab" component={CourseDetailPage} />
            <Route path="/mypage" component={MyPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
