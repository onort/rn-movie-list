import * as types from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_LIST_SUCCESS:
      return [
        ...state,
        ...action.list
      ]
    case types.DISCARD_MOVIE:
      return state
    default:
      return state
  }
}
