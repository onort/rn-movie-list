import { combineReducers } from 'redux'

import discardedReducer from './discardedReducer'
import listReducer from './listReducer'
import searchReducer from './searchReducer'

const rootReducer =  combineReducers({
  discarded: discardedReducer,
  list: listReducer,
  searchResults: searchReducer
})

export default rootReducer
