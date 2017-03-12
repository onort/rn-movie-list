import * as types from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case types.SEARCH_SUCCESS:
      return [
        ...action.results
      ]
    case types.CLEAR_SEARCH_RESULTS:
      return []
    default:
      return state
  }
}
