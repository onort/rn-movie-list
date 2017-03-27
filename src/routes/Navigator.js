import { TabNavigator } from 'react-navigation'

import { colors } from '../theme'

import SearchNav from './SearchNav'
import WatchlistNav from './WatchlistNav'
import { HomeScreen, Watched } from '../screens'


export default TabNavigator(
  {
    Home: { screen: HomeScreen },
    Watchlist: { screen: WatchlistNav },
    Watched: { screen: Watched },
    SearchMovie: { screen: SearchNav },
  },
  {
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      pressColor: colors.green,
      activeTintColor: colors.green,
      inactiveTintColor: colors.grey,
      indicatorStyle: { backgroundColor: colors.green },
      style: {
        backgroundColor: colors.white
      }
    }
  }
)
