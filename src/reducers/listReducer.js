import * as types from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case types.LOAD_LIST:
      return [
        ...state,
        ...action.list
      ]
    default:
      return state
  }
}
