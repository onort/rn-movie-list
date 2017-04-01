import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const LoadingScreen = ({ color, size, backgroundColor }) => {
  const container = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor,
  }
  return (
    <View style={container}>
      <ActivityIndicator
        size={size}
        color={color}
      />
    </View>
  )
}

export default LoadingScreen
