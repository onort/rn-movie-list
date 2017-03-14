import * as types from './types'

export const discardMovie = (movie) => {
  return { 
    type: types.DISCARD_MOVIE,
    movie
  }
}

export const markWatched = (movie) => {
  return {
    type: types.MARK_MOVIE_WATCHED,
    movie
  }
}

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