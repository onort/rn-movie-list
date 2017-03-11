import * as types from './types'
import movieData from './moviedata'

export const loadList = () => {
  return {
    type: types.LOAD_LIST,
    list: movieData
  }
}
