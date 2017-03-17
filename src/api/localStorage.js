import { AsyncStorage } from 'react-native'

class localStorageApi {

  static async getWatchlist() {
    try {
      const watchlist = await AsyncStorage.getItem('@MovieList:watchlist')
      if (watchlist !== null) return JSON.parse(watchlist)
      else console.log('No data in watchlist')
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
}

export default localStorageApi
