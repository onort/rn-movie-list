import * as types from '../actions/types'

const initialState = { screen: false, similar: false }

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_MOVIE:
    case types.FETCH_CREDITS:
    case types.FETCH_MOVIE_DETAILS:
      return { ...state, screen: true }
    case types.SEARCH_SUCCESS:
    case types.SEARCH_ERROR:
    case types.FETCH_MOVIE_DETAILS_SUCCESS:
    case types.FETCH_MOVIE_DETAILS_ERROR:
      return { ...state, screen: false }
    case types.FETCH_MOVIES_FOR_HOME:
      return { ...state, similar: true }
    case types.FETCH_MOVIES_FOR_HOME_SUCCESS:
    case types.FETCH_MOVIES_FOR_HOME_ERROR:
      return { ...state, similar: false}
    default:
      return state
  }
}
