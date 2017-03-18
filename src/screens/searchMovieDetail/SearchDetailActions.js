import React from 'react'
import { View } from 'react-native'

import { IconButton } from '../common'

const SearchDetailActions = ({ onAdd, onCancel }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
      <IconButton
        name="arrow-back"
        size={30}
        color="#333"
        onPress={onCancel}
      />
      <IconButton
        name="playlist-add"
        size={30}
        color="#333"
        onPress={onAdd}
      />
      <IconButton
        name="play-arrow"
        size={30}
        color="#333"
        onPress={onAdd}
      />
    </View>
  )
}

export default SearchDetailActions
