import { StackNavigator } from 'react-navigation'
import { About, HomeScreen, SearchMovieDetail } from '../screens'

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  HomeMovieDetail: {
    screen: SearchMovieDetail,
  },
  About: {
    screen: About
  }
})
