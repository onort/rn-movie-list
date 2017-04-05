import * as types from '../actions/types'

const INITIAL_STATE = { id: '', details: {}, credits: { crew: [], cast: [] }, videos: [], similar: [] }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_SELECTED_INLIST:
      return action.movie
      // Object.assign({}, state, { id: action.movie.id })
    case types.RESET_SELECTED_INLIST:
      return INITIAL_STATE
    default:
      return state
  }
}
