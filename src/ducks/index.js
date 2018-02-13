import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as modules from './modules'

const reducer = combineReducers({
  ...modules,
})

export default createStore(
  reducer,
  applyMiddleware(thunkMiddleware),
)
