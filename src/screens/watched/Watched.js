import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

class Watched extends Component {

  static navigationOptions = {
    title: 'Watched Movies',
    tabBar: {
      icon: ({ tintColor }) => <Icon name="playlist-add-check" size={25} color={tintColor} />
    }
  }

  render() {
    return (
      <View>
        <Text>Watched Movies</Text>
      </View>
    )
  }
}

export default Watched
