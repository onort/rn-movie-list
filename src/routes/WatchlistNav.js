import { StackNavigator } from 'react-navigation'

import { ListMovieDetail, Trailer, WatchList, } from '../screens'
import SeachNav from './SearchNav'

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
    SearchMovie: {
      screen: SeachNav
    }
  },
  {
    mode: 'modal',
    headerMode: 'float'
  }
)
