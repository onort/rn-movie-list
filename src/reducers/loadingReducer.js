import * as types from '../actions/types'

export default (state = false, action) => {
  switch (action.type) {
    case types.SEARCH_MOVIE:
    case types.FETCH_CREDITS:
    case types.FETCH_MOVIE_DETAILS:
      return true
    case types.SEARCH_SUCCESS:
    case types.SEARCH_ERROR:
    case types.FETCH_MOVIE_DETAILS_SUCCESS:
    case types.FETCH_MOVIE_DETAILS_ERROR:
      return false
    default:
      return state
  }
}
