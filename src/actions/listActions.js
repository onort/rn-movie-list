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

export const fetchWatched = () => {
  return async dispatch => {
    dispatch({ type: types.FETCH_WATCHED })
    try {
      const watched = await localApi.getWatched()
      dispatch({ type: types.FETCH_WATCHED_SUCCESS, watched })
    } catch (error) {
      dispatch({ type: types.FETCH_WATCHED_ERROR, error })
    }
  }
}

export const saveWatched = (watched) => {
  return async dispatch => {
    dispatch({ type: types.SAVE_WATCHED, watched })
    try {
      await localApi.saveWatched(watched)
      dispatch({ type: types.SAVE_WATCHED_SUCCESS })
    } catch (error) {
      dispatch({ type: types.SAVE_WATCHED_ERROR, error })
    }
  }
}
