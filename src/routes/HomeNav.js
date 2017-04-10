import { StackNavigator } from 'react-navigation'
import { HomeScreen, SearchMovieDetail } from '../screens'

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  HomeMovieDetail: {
    screen: SearchMovieDetail,
  },
})
