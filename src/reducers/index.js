import { combineReducers } from 'redux'

import errorReducer from './errorReducer'
import homeReducer from './homeReducer'
import inListReducer from './inListReducer'
import listReducer from './listReducer'
import loadingReducer from './loadingReducer'
import notListedReducer from './notListedReducer'
import searchReducer from './searchReducer'
import watchedReducer from './watchedReducer'

const rootReducer =  combineReducers({
  errors: errorReducer,
  home: homeReducer,
  inList: inListReducer,
  list: listReducer,
  loading: loadingReducer,
  notListed: notListedReducer,
  searchResults: searchReducer,
  watched: watchedReducer,
})

export default rootReducer
