import React from 'react'
import { View } from 'react-native'

import { IconButton } from '../common'

const ListDetailActions = ({ onPress }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', borderColor: 'red', borderWidth: 1 }}>
      <IconButton
        name="playlist-add-check"
        size={30}
        color="#333"
        onPress={onPress}
      />
      <IconButton
        name="play-arrow"
        size={30}
        color="#333"
        onPress={onPress}
      />
      <IconButton
        name="delete"
        size={30}
        color="#333"
        onPress={onPress}
      />
    </View>
  )
}

export default ListDetailActions
