import * as types from './types'
import localApi from '../api/localStorage'

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

export const saveList = (list) => {
  return async dispatch => {
    dispatch({ type: types.SAVE_LIST, list })
    try {
      await localApi.saveWatchlist(list)
      dispatch({ type: types.SAVE_LIST_SUCCESS })
    } catch (error) {
      dispatch({ type: types.SAVE_LIST_ERROR, error })
    }
  }
}
