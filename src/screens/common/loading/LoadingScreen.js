import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

import { colors } from '../../../theme'

class LoadingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size={50}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray15,
  },
})

export default LoadingScreen
