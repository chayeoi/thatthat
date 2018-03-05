import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'ducks'
import {
  MainPage,
  LoginPage,
  CoursePage,
  MyPage,
  RegisteringPage,
  AboutPage,
  NotFoundPage,
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
            <Route path="/course/:courseKey" component={CourseDetailPage} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/registering" component={RegisteringPage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
