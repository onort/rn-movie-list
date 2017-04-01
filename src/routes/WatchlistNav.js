import { StackNavigator } from 'react-navigation'

import { ListMovieDetail, SearchMovieDetail, Trailer, WatchList, } from '../screens'

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
    SimilarMovieDetail: {
      screen: SearchMovieDetail
    },
  },
  {
    headerMode: 'screen'
  }
)
