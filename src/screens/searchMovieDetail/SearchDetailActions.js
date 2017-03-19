import React from 'react'
import { View } from 'react-native'

import { IconButton } from '../common'

const SearchDetailActions = ({ onAdd, onCancel, onTrailer }) => {
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
        onPress={onTrailer}
      />
    </View>
  )
}

export default SearchDetailActions
