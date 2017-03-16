import React from 'react'
import { View } from 'react-native'

import { IconButton } from '../common'

const SearchDetailActions = ({ onPress }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
      <IconButton
        name="playlist-add"
        size={30}
        color="#333"
        onPress={onPress}
      />
      <IconButton
        name="close"
        size={30}
        color="#333"
        onPress={onPress}
      />
    </View>
  )
}

export default SearchDetailActions
