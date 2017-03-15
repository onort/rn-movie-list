import axios from 'axios'
import * as config from './config'

class moviesApi {
  // add baseurl to config and append needed endpoints for methods
  // to much code repeat, refactor!
  // need a check here for api data
  static async searchMovie(query) {
    const _baseUrl = 'https://api.themoviedb.org/3/search/movie'
    const params = {
      api_key: config.TMDbApiKey,
      language: 'en',
      query: encodeURI(query)
    }

    try {
      const { data } = await axios.get(_baseUrl, { params })
      return data.results
    } catch (e) {
      console.log(e)
    }
  }

  static async fetchMovieDetails(id) {
    console.log('Fetching movie details')
    const _baseUrl = `https://api.themoviedb.org/3/movie/${id}`
    const params = {
      api_key: config.TMDbApiKey,
    }
    try {
      const { data } = await axios.get(_baseUrl, { params })
      console.log('Got movie details', data)
      return data
    } catch (e) {
      console.log('Error on fetchMovieDetails', e)
    }
  }

  static async fetchMovieCredits(id) {
    console.log('Fetching cast details')
    const _baseUrl = `https://api.themoviedb.org/3/movie/${id}/credits`
    const params = {
      api_key: config.TMDbApiKey,
    }
    try {
      const { data } = await axios.get(_baseUrl, { params })
      console.log('Got movie details', data.cast)
      return data.cast
    } catch (e) {
      console.log('Error on fetchMovieCredits'. e)
    }
  }

}

export default moviesApi
