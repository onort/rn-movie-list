import { StackNavigator } from 'react-navigation'
import { Watched, WatchedMovieDetail } from '../screens'

export default StackNavigator({
  Watched: {
    screen: Watched
  },
  WatchedMovieDetail: {
    screen: WatchedMovieDetail
  },
})
