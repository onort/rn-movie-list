import { TabNavigator } from 'react-navigation'

import { HomeScreen, WatchList } from '../screens'
import { Colors } from '../screens/common'

export default TabNavigator(
{
  Home: {
    screen: HomeScreen
  },
  WatchList: {
    screen: WatchList
  }
},
{
  animationEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    pressColor: Colors.black,
    style: {
      backgroundColor: Colors.white
    }
  }
})
