import * as types from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case types.SEARCH_ERROR:
      return [...state, action.error]
    case types.FETCH_MOVIE_DETAILS_ERROR:
      return [...state, action.error]
    default:
      return state
  }
}
