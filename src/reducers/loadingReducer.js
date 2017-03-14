import * as types from '../actions/types'

export default (state = false, action) => {
  switch (action.type) {
    case types.SEARCH_MOVIE:
      return true
    case types.SEARCH_SUCCESS:
    case types.SEARCH_ERROR:
      return false
    default:
      return state
  }
}
