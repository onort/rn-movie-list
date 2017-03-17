import * as types from './types'
// import movieData from './moviedata'
import localApi from '../api/localStorage'

// export const fetchList = () => {
//   return {
//     type: types.FETCH_LIST_SUCCESS,
//     list: movieData
//   }
// }

export const fetchList = () => {
  return async dispatch => {
    dispatch({ type: types.FETCH_LIST })
    try {
      const list = await localApi.getWatchlist()
      dispatch({ type: types.FETCH_LIST_SUCCESS, list })
    } catch (error) {
      dispatch({ type: types.FETCH_LIST_ERROR, error })
    }
  }
}
