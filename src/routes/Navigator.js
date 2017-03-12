import { StackNavigator } from 'react-navigation'
import HomeNavigator from './HomeNavigator'
import { AddMovie, MovieDetail } from '../screens'

export default StackNavigator(
  {
    Home: { screen: HomeNavigator },
    AddMovie: { screen: AddMovie },
    MovieDetail: { screen: MovieDetail }
  },
  { mode: 'modal' }
)

