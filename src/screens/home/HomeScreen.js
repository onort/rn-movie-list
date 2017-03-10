import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'
import { Colors } from '../common'


class HomeScreen extends Component {

  static navigationOptions = {
    tabBar: {
      icon: () => <Icon name="home" size={25} color={Colors.black} />
    }
  }

  render() {
    return (
      <View style={styles.homeContainer}>
        <Text style={styles.homeText}>This is HomeScreen</Text>
      </View>
    )
  }
}

export default HomeScreen
