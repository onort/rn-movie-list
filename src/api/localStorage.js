import { AsyncStorage } from 'react-native'

class localStorageApi {

  static async getWatchlist() {
    try {
      const watchlist = await AsyncStorage.getItem('@MovieList:watchlist')
      if (watchlist !== null) return JSON.parse(watchlist)
      else {
        console.log('No data in watchlist')
        return []
      }
    } catch (e) {
      console.log('Error on getWatchlist method', e)
    }
  }

  static async saveWatchlist(watchlist) {
    try {
      await AsyncStorage.setItem('@MovieList:watchlist', JSON.stringify(watchlist))
      console.log('Data saved!')
    } catch (e) {
      console.log('Erro on getFromLocal', e)
    }
  }

  static async getWatched() {
    try {
      const watched = await AsyncStorage.getItem('@MovieList:watched')
      if(watched !== null) return JSON.parse(watched)
      else {
        console.log('No movies in watched list')
        return []
      }
    } catch (e) {
      console.log('Error on getWatched', e)
    }
  }

  static async saveWatched(watched) {
    try {
      await AsyncStorage.setItem('@MovieList:watched', JSON.stringify(watched))
      console.log('Watched movies list saved!')
    } catch (e) {
      console.log('Error on saveWatched', e)
    }
  }
}

export default localStorageApi
