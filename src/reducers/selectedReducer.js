import * as types from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case types.SET_SELECTED_MOVIE:
      return action.movie
    case types.RESET_SELECTED_MOVIE:
      return {}
    default:
      return state
  }
}
