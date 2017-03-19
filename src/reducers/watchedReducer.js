import * as types from '../actions/types'

export default (state = [], action) => {
  switch (action.type ) {
    case types.FETCH_WATCHED_SUCCESS:
      return [
        ...action.watched
      ]
    default:
      return state
  }
}
