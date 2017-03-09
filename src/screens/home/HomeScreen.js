import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.homeContainer}>
        <Text style={styles.homeText}>This is HomeScreen</Text>
      </View>
    )
  }
}

export default HomeScreen
