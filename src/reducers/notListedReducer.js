import * as types from '../actions/types'

const INITIAL_STATE = { id: '', details: {}, credits: { crew: [], cast: [] }, videos: [], similar: [] }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_SELECTED_NOTLISTED:
      return {
        ...state,
        id: action.movie.id
      }
      // Object.assign({}, state, { id: action.movie.id })
    case types.RESET_SELECTED_NOTLISTED:
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
