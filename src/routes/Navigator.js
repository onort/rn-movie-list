import { StackNavigator } from 'react-navigation'
import HomeNavigator from './HomeNavigator'
import { AddMovie, ListMovieDetail, SearchMovieDetail } from '../screens'

export default StackNavigator(
  {
    Home: { screen: HomeNavigator },
    AddMovie: { screen: AddMovie },
    ListMovieDetail: { screen: ListMovieDetail },
    SearchMovieDetail: { screen: SearchMovieDetail },
  },
  { mode: 'modal' }
)

