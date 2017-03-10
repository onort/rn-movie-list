import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const middlewares = [
  thunk
]

if (__DEV__) { // eslint-disable-line
  const logger = require('redux-logger')
  middlewares.push(logger())
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
 rootReducer,
 undefined,
 enhancers(applyMiddleware(...middlewares)) 
)
