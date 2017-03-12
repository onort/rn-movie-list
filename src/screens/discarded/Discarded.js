import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

class Discarded extends Component {

  static navigationOptions = {
    title: 'Discarded Movies',
    tabBar: {
      icon: ({ tintColor }) => <Icon name="delete" size={25} color={tintColor} />
    }
  }

  render() {
    return (
      <View>
        <Text>Discarded Movies</Text>
      </View>
    )
  }
}

export default Discarded
