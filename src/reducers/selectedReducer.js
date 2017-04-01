import * as types from '../actions/types'

const INITIAL_STATE = { id: '', details: {}, credits: [], videos: [], similar: [] }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_SELECTED_MOVIE:
      if (action.movie.details) return action.movie
      else return Object.assign({}, state, { id: action.movie.id })
    case types.RESET_SELECTED_MOVIE:
      return INITIAL_STATE
    case types.FETCH_MOVIE_DETAILS_SUCCESS:
      const { details, credits, videos, similar } = action
      return {
        ...state,
        details,
        credits,
        videos,
        similar,
      }
    default:
      return state
  }
}
