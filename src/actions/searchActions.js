import * as types from './types'
import moviesApi from '../api/moviesApi'

export const searchMovie = (query) => {
  return async dispatch => {
    try {
      const results = await moviesApi.searchMovie(query)
      dispatch({ type: types.SEARCH_SUCCESS, results })
    } catch (e) {
      dispatch({ type: types.SEARCH_ERROR, error: e })
    }
  }
}

export const clearSearchResults = () => {
  return { type: types.CLEAR_SEARCH_RESULTS }
}
