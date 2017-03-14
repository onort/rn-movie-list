import { combineReducers } from 'redux'

import discardedReducer from './discardedReducer'
import errorReducer from './errorReducer'
import listReducer from './listReducer'
import loadingReducer from './loadingReducer'
import searchReducer from './searchReducer'
import selectedReducer from './selectedReducer'

const rootReducer =  combineReducers({
  discarded: discardedReducer,
  errors: errorReducer,
  list: listReducer,
  loading: loadingReducer,
  searchResults: searchReducer,
  selectedMovie: selectedReducer
})

export default rootReducer
