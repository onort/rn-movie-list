import axios from 'axios'
import * as config from './config'

class moviesApi {
  // add baseurl to config and append needed endpoints for methods
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
}

export default moviesApi
