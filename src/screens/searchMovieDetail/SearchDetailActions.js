import React from 'react'
import { View } from 'react-native'

import { colors } from '../../theme'

import { IconButton } from '../common'

const SearchDetailActions = ({ onAdd, onCancel, onTrailer }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
      <IconButton
        name="arrow-back"
        size={30}
        color={colors.black}
        onPress={onCancel}
      />
      <IconButton
        name="playlist-add"
        size={30}
        color={colors.black}
        onPress={onAdd}
      />
      <IconButton
        name="play-arrow"
        size={30}
        color={colors.black}
        onPress={onTrailer}
      />
    </View>
  )
}

export default SearchDetailActions
