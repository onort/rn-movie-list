import React from 'react'
import { View } from 'react-native'

import { colors} from '../../theme'

import { IconButton } from '../common'

const ListDetailActions = ({ onDelete, onTrailer, onWatched }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', borderColor: 'red', borderWidth: 1 }}>
      <IconButton
        name="playlist-add-check"
        size={30}
        color={colors.black}
        onPress={onWatched}
      />
      <IconButton
        name="play-arrow"
        size={30}
        color={colors.black}
        onPress={onTrailer}
      />
      <IconButton
        name="delete"
        size={30}
        color={colors.black}
        onPress={onDelete}
      />
    </View>
  )
}

export default ListDetailActions
