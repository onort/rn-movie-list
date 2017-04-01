import { StackNavigator } from 'react-navigation'
import { SearchMovieDetail, Watched, WatchedMovieDetail } from '../screens'

export default StackNavigator({
  Watched: {
    screen: Watched
  },
  WatchedMovieDetail: {
    screen: WatchedMovieDetail
  },
  WatchedSimilarMovieDetail :{
    screen: SearchMovieDetail
  }
})
