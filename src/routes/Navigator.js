import { StackNavigator } from 'react-navigation'
import HomeNavigator from './HomeNavigator'
import { AddMovie } from '../screens'

export default StackNavigator(
  {
    Home: { screen: HomeNavigator },
    AddMovie: { screen: AddMovie }
  },
  { mode: 'modal' }
)

