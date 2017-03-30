import * as types from '../actions/types'

const initialState = {
  popular: [],
  now: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES_FOR_HOME_SUCCESS:
      return {
        popular: action.popular,
        now: action.now
      }
    default:
      return state
  }
}
