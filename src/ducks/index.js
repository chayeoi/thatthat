import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as modules from './modules'

const reducer = combineReducers({
  ...modules,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
)
