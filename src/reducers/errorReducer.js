import * as types from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case types.SEARCH_ERROR:
      return [...state, action.error]
    default:
      return state
  }
}
