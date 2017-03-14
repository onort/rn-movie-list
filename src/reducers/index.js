import { combineReducers } from 'redux'

import discardedReducer from './discardedReducer'
import errorReducer from './errorReducer'
import listReducer from './listReducer'
import loadingReducer from './loadingReducer'
import searchReducer from './searchReducer'

const rootReducer =  combineReducers({
  discarded: discardedReducer,
  errors: errorReducer,
  list: listReducer,
  loading: loadingReducer,
  searchResults: searchReducer
})

export default rootReducer
