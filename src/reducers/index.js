import { combineReducers } from 'redux'

import discardedReducer from './discardedReducer'
import listReducer from './listReducer'
import loadingReducer from './loadingReducer'
import searchReducer from './searchReducer'

const rootReducer =  combineReducers({
  discarded: discardedReducer,
  list: listReducer,
  loading: loadingReducer,
  searchResults: searchReducer
})

export default rootReducer
