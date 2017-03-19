import * as types from './types'
import moviesApi from '../api/moviesApi'

export const discardMovie = (movie) => {
  return { 
    type: types.DISCARD_MOVIE,
    movie
  }
}

// Selected

export const setSelected = (movie) => {
  return {
    type: types.SET_SELECTED_MOVIE,
    movie
  }
}

export const resetSelected = () => {
  return {
    type: types.RESET_SELECTED_MOVIE
  }
}

export const getMovieDetails = (id) => {
  return async dispatch => {
    dispatch({ type: types.FETCH_MOVIE_DETAILS })
    try {
      const [details, credits] = await Promise.all([
        moviesApi.fetchMovieDetails(id),
        moviesApi.fetchMovieCredits(id)
      ])
      dispatch({ type: types.FETCH_MOVIE_DETAILS_SUCCESS, details, credits })
    } catch (e) {
      dispatch({ type: types.FETCH_MOVIE_DETAILS_ERROR, error: e })
    }
  }
}
