import * as types from './types'
import movieData from './moviedata'

export const fetchList = () => {
  return {
    type: types.FETCH_LIST_SUCCESS,
    list: movieData
  }
}
