import { TabNavigator } from 'react-navigation'

import { HomeScreen, Watched, WatchList } from '../screens'
import { Colors } from '../screens/common'

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
  }
},
{
  animationEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    pressColor: Colors.green,
    activeTintColor: Colors.green,
    inactiveTintColor: Colors.grey,
    indicatorStyle: { backgroundColor: Colors.green },
    style: {
      backgroundColor: Colors.white
    }
  }
})
