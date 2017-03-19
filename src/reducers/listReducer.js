import * as types from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_LIST_SUCCESS:
      return [
        ...action.list
      ]
    case types.CLEAR_SUCCESS:
      if (action.listName === types.WATCHLIST) return []
      return state
    default:
      return state
  }
}
