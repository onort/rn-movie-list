import { TabNavigator } from 'react-navigation'

import { Discarded, HomeScreen, WatchList } from '../screens'
import { Colors } from '../screens/common'

export default TabNavigator(
{
  Home: {
    screen: HomeScreen
  },
  WatchList: {
    screen: WatchList
  },
  Discarded: {
    screen: Discarded
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
