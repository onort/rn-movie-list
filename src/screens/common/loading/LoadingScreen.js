import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'

import styles from './styles'

class LoadingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size={100}
          color={'darkslategrey'}
        />
      </View>
    )
  }
}

export default LoadingScreen
