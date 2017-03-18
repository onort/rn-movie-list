import { StackNavigator } from 'react-navigation'
import HomeNavigator from './HomeNavigator'
import { SearchMovie, ListMovieDetail, SearchMovieDetail } from '../screens'

export default StackNavigator(
  {
    Home: { screen: HomeNavigator },
    SearchMovie: { screen: SearchMovie },
    ListMovieDetail: { screen: ListMovieDetail },
    SearchMovieDetail: { screen: SearchMovieDetail },
  },
  { mode: 'modal' }
)

