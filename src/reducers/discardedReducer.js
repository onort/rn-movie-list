import * as types from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case types.DISCARD_MOVIE:
      return [
        ...state,
        action.movie
      ]
    default:
      return state
  }
}
