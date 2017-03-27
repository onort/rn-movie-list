import { StackNavigator } from 'react-navigation'

import { ListMovieDetail, Trailer, WatchList, } from '../screens'

export default StackNavigator(
  {
    Watchlist: {
      screen: WatchList
    },
    MovieDetail: {
      screen: ListMovieDetail
    },
    Trailer: {
      screen: Trailer
    },
  },
  {
    mode: 'modal',
    headerMode: 'screen'
  }
)
