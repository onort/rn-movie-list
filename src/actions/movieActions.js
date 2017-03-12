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
