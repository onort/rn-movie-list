import * as types from './types'
import moviesApi from '../api/moviesApi'
import { noDuplicateMovie } from '../utils'

export const setInList = (movie) => {
  return {
    type: types.SET_SELECTED_INLIST,
    movie
  }
}

export const setNotListed = (movie) => {
  return {
    type: types.SET_SELECTED_NOTLISTED,
    movie
  }
}

export const resetInList = () => {
  return {
    type: types.RESET_SELECTED_INLIST
  }
}

export const resetNotListed = () => {
  return {
    type: types.RESET_SELECTED_NOTLISTED
  }
}

export const getMovieDetails = (id) => {
  return async dispatch => {
    dispatch({ type: types.FETCH_MOVIE_DETAILS })
    try {
      const [details, credits, videos, similar] = await Promise.all([
        moviesApi.fetchMovieDetails(id),
        moviesApi.fetchMovieCredits(id),
        moviesApi.fetchMovieVids(id),
        moviesApi.fetchSimilar(id),
      ])
      dispatch({ type: types.FETCH_MOVIE_DETAILS_SUCCESS, details, credits, videos, similar })
    } catch (e) {
      dispatch({ type: types.FETCH_MOVIE_DETAILS_ERROR, error: e })
    }
  }
}

export const getPopularAndNowPlaying = () => {
  return async dispatch => {
    dispatch({ type: types.FETCH_MOVIES_FOR_HOME })
    try {
      let [ popular, now ] = await Promise.all([
        moviesApi.fetchPopular(),
        moviesApi.fetchNowPlaying(),
      ])
      popular = noDuplicateMovie(popular, now)
      dispatch({ type: types.FETCH_MOVIES_FOR_HOME_SUCCESS, popular, now })
    } catch (error) {
      dispatch({ type: types.FETCH_MOVIES_FOR_HOME_ERROR, error})
    }
  }
}
