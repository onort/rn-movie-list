import { TabNavigator } from 'react-navigation'

import { colors } from '../theme'

import { HomeScreen, Watched, WatchList, SearchMovie } from '../screens'

export default TabNavigator(
{
  Home: {
    screen: HomeScreen
  },
  WatchList: {
    screen: WatchList
  },
  Watched: {
    screen: Watched
  },
  Add: {
    screen: SearchMovie
  }
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
})
