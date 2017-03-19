import * as types from '../actions/types'

export default (state = [], action) => {
  switch (action.type ) {
    case types.FETCH_WATCHED_SUCCESS:
      return [
        ...action.watched
      ]
    case types.CLEAR_SUCCESS:
      if (action.listName === types.WATCHED) return []
      return state
    default:
      return state
  }
}
