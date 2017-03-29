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
    // lazyLoad: true,
    swipeEnabled: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: colors.gray05,
      inactiveTintColor: colors.gray35,
      indicatorStyle: { backgroundColor: colors.gray05 },
      pressColor: colors.gray15,
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: colors.gray80,
        borderTopColor: colors.gray70,
        borderWidth: 1,
      }
    }
  }
)
