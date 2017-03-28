import { TabNavigator } from 'react-navigation'

import { colors } from '../theme'

import HomeNav from './HomeNav'
import SearchNav from './SearchNav'
import WatchedNav from './WatchedNav'
import WatchlistNav from './WatchlistNav'
import { Watched } from '../screens'


export default TabNavigator(
  {
    Home: { screen: HomeNav },
    Watchlist: { screen: WatchlistNav },
    Watched: { screen: WatchedNav },
    SearchMovie: { screen: SearchNav },
  },
  {
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      pressColor: colors.black,
      activeTintColor: colors.black,
      inactiveTintColor: colors.gray50,
      indicatorStyle: { backgroundColor: colors.black },
      style: {
        backgroundColor: colors.white
      }
    }
  }
)
