import axios from 'axios'
import * as config from './config'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

class moviesApi {
  // add baseurl to config and append needed endpoints for methods
  // to much code repeat, refactor!
  // need a check here for api data  
  static async searchMovie(query) {
    const params = {
      api_key: config.TMDbApiKey,
      language: 'en',
      query: encodeURI(query)
    }

    try {
      const { data } = await axios.get('/search/movie', { params })
      return data.results
    } catch (e) {
      console.error('Error on searchMovie', e)
    }
  }

  static async fetchMovieDetails(id) {
    const params = {
      api_key: config.TMDbApiKey,
    }
    try {
      const { data } = await axios.get(`/movie/${id}`, { params })
      return data
    } catch (e) {
      console.error('Error on fetchMovieDetails', e)
    }
  }

  static async fetchMovieCredits(id) {
    const params = {
      api_key: config.TMDbApiKey,
    }
    try {
      let credits = { cast: [], crew: [] }
      const { data } = await axios.get(`/movie/${id}/credits`, { params })
      // remove limits?
      if (data.cast) credits.cast = data.cast.slice(0,10)
      if (data.crew) credits.crew = data.crew.slice(0,10)
      // credits = { cast: data.cast.slice(0,10), crew: data.crew.slice(0, 10) }
      return credits
    } catch (e) {
      console.error('Error on fetchMovieCredits'. e)
    }
  }

  static async fetchMovieVids(id) {
    const params = {
      api_key: config.TMDbApiKey
    }
    try {
      const { data } = await axios.get(`/movie/${id}/videos`, { params })
      return data.results
    } catch (e) {
      console.error('Error on fetchMovieVids', e)
    }
  }

  static async fetchSimilar(id) {
    const params = {
      api_key: config.TMDbApiKey
    }
    try {
      const { data } = await axios.get(`/movie/${id}/similar`, { params })
      console.table('fetchSimilar got data', data)
      return data.results
    } catch (e) {
      console.error('Error on fetchSimilar', e)
    }
  }

  static async fetchPopular() {
    const params = {
      api_key: config.TMDbApiKey
    }
    try {
      const { data } = await axios.get('/movie/popular', { params })
      return data.results
    } catch (e) {
      console.error('Error on fetchPopular', e)
    }
  }

  static async fetchNowPlaying() {
    const params = {
      api_key: config.TMDbApiKey
    }
    try {
      const { data } = await axios.get('/movie/now_playing', { params })
      return data.results
    } catch (e) {
      console.error('Error on fetchNowPlaying', e)
    }
  }
}

export default moviesApi
