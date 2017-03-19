import { combineReducers } from 'redux'

import errorReducer from './errorReducer'
import listReducer from './listReducer'
import loadingReducer from './loadingReducer'
import searchReducer from './searchReducer'
import selectedReducer from './selectedReducer'
import watchedReducer from './watchedReducer'

const rootReducer =  combineReducers({
  errors: errorReducer,
  list: listReducer,
  loading: loadingReducer,
  searchResults: searchReducer,
  selectedMovie: selectedReducer,
  watched: watchedReducer
})

export default rootReducer
