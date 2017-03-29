import React from 'react'
import { StatusBar, View } from 'react-native'
import Navigator from './routes/Navigator'

import { colors } from './theme'

const AppContainer = () => {
  return (
    <View style={{ flex: 1}}>
      <StatusBar backgroundColor={colors.gray90} />
      <Navigator />
    </View>
  )
}

export default AppContainer
